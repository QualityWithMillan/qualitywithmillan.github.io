---
layout: single-tabs
title: "How to run floci - local cloud stack. Lets start with local AWS"
header:
  # teaser: /assets/images/2026/08/docker-speedup-teaser.png
permalink: "/blog/running-aws-on-local-using-floci.html"
search: true
date: 2026-08-11
last_modified_at: 2026-08-11
authors:
  - Millan Kaul
categories:
  - blog
  - engineering
  - devops
tags:
  - docker
  - saas
  - devops
  - aws
  - s3
  - aws
  - cloud-infra
excerpt: "How to run floci - local cloud stack. Lets start with local AWS"
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


<div id="code-tabs-2026-08-11"></div>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    createCodeTabs('code-tabs-2026-08-11', [
       {
      language: 'cURL',
      code: `curl http://localhost:11434/`
    },
    ])
  })
</script>  
