---
title: "Saving 216 Minutes in 2.5 Years with Simple Docker Enhancements"
header:
  teaser: /assets/images/2026/08/docker-speedup-teaser.png
permalink: "/blog/docker-build-speed-optimizations-enhancements.html"
search: true
date: 2026-08-05
last_modified_at: 2026-08-05
authors:
  - Millan Kaul
categories:
  - blog
  - engineering
tags:
  - docker
  - jekyll
  - devops
  - productivity
excerpt: "How three minor Docker configuration changes shaved 33% off my Jekyll build times, saving hours of developer wait time."
---


<p>
 Written by -
{% if page.authors == nil or page.authors.size == 0 %}
   {{ page.author }}
{% else %}
    {% assign result = "" %}
    {% for author in page.authors %}
        {% if author != nil and author != "" %}
            {% if forloop.first %}
                {% assign result = author %}
            {% elsif forloop.last %}
                {% assign result = result | append: " and " | append: author %}
            {% else %}
                {% assign result = result | append: ", " | append: author %}
            {% endif %}
        {% endif %}
    {% endfor %}
    {% if result != "" %}
        <strong>{{ result }}</strong>
    {% endif %}
{% endif %}
</p>


Every second spent waiting for a container build is a second of productivity lost. Recently, I looked at the Docker setup for my own Jekyll blog (this blog you are reading right now) and realized it was taking **96.0 seconds** to start up from scratch with `docker compose up`. 

Here is how I optimized the setup, shaving it down to **63.5 seconds** (a **33.8% speedup**), 😱 and the math behind how much time this saves over the project's lifetime.

---

### The Problem Statement
Our old Docker configuration was slow due to three main issues:
1. **Redundant installation**: The Dockerfile ran `gem install jekyll bundler` even though the base `ruby` image already includes Bundler, and Jekyll is managed by `Gemfile`.
2. **Permission overhead**: The build step ran `chown -R` on `/usr/local/bundle`. This recursively modified permissions for tens of thousands of system gem files unnecessarily (since they only need to be read at runtime).
3. **Sequential processing**: Bundler installed gem dependencies sequentially, underutilizing modern multi-core host CPUs.
> This is where I consulted my AI coding assistant. 

**PROMPT**: 
```text
Act as an experienced DevOps engineer and suggest the best CPU-centric optimizations for the below Dockerfile. 
I want to keep the changes minimal.
```  

---

### The Fix
1. **Removed Redundant Installs**: Deleted the duplicate `gem install` command, relying solely on the base image's Bundler.
2. **Optimized CPU Usage**: Configured Bundler to use parallel installation jobs matching the host’s CPU cores:
   ```dockerfile
   RUN bundle config set jobs $(nproc) && bundle install
   ```
3. **Scoped Directory Permissions**: Restricted the slow recursive `chown` to `/srv/jekyll` (which only contains a couple of configuration files during build), keeping the pre-installed gems read-only.
4. **Bootstrapped Startup**: Updated the Docker Compose startup command to run `bundle install` dynamically. This immediately writes the correct `Gemfile.lock` back to the host machine without breaking the runtime environment.

---

### The Math: How Much Time We Saved
Since I introduced Docker to this project in [this commit](https://github.com/eaccmk/qualitywithmillan.github.io/commit/ab7a257deeedade372512a5590b9719d8fe8b758#Dockerfile) in February 2024, I have logged 497 Git commits, including [this commit](https://github.com/eaccmk/qualitywithmillan.github.io/commit/673c35ed44c1a4a7b4fb72688484ed1ded47764c), which contains the time saving Dockerfile updates :

I estimate that :

* **Estimated Builds (80% of commits)**: ~398 builds
* **Old Build Time**: 96.0 seconds
* **New Build Time**: 63.5 seconds
* **Time Saved Per Build**: 32.5 seconds

⏱️ **Total Time Saved: 3.6 hours** (12,935 seconds) across \(398\) builds.

## My take away, you can take too!

By tuning parallel compiler jobs and narrowing down disk I/O operations, we eliminated hours of developer friction. Sometimes the best DevOps enhancements aren't new tools, but polishing the ones you already have. 

> So if you are not that Sr. DevOps mate, ask your Agent to be!


Here is a comparison Before and After (today)

<table style="width: 100%; table-layout: fixed;">
  <thead>
    <tr>
      <th style="width: 50%;">Before (Old Setup)</th>
      <th style="width: 50%;">After (Optimized)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">
        <pre><code class="language-dockerfile">FROM jekyll/jekyll
WORKDIR /srv/jekyll
COPY Gemfile Gemfile.lock ./
RUN bundle install
EXPOSE 4000
CMD ["serve" ..]</code></pre>
      </td>
      <td valign="top">
        <pre><code class="language-dockerfile">FROM ruby:3.2.0
RUN apt-get update && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /srv/jekyll
RUN adduser --disabled-password dockeruser
COPY Gemfile Gemfile.lock* ./
RUN bundle config set jobs $(nproc) && \
    bundle install
RUN chown -R dockeruser:dockeruser /srv/jekyll
USER dockeruser
EXPOSE 4000
CMD ["serve" ..]</code></pre>
      </td>
    </tr>
  </tbody>
</table>
