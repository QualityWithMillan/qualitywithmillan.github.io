---
title: "How I turned my blog into a Docker based development paradise 🐳 - Try It Yourself!"
header:
  feature: /assets/images/2024/02/docker_jeklly/01_docker_jeklly.png
  teaser: /assets/images/2024/02/docker_jeklly/01_docker_jeklly.png
permalink: "/post/2024/02/run-your-blog-as-a-docker-container-locally.html"
date: 2024-02-28
authors:
- Millan Kaul
categories:
  - article
tags:
  - blog
  - automation
  - docker
  - Jekyll
  
---

<hr>
<p>
 Written by -
{% assign authorCount = page.authors | size %}
{% if authorCount == 0 %}
   {{ page.author}}
{% elsif authorCount == 1 %}
    {{ page.authors | first }}         
{% else %}
    {% for author in page.authors %}
        {% if forloop.first %}
            {{ author }}
        {% elsif forloop.last %}
            and {{ author }}
        {% else %}
            , {{ author }}
        {% endif %}
    {% endfor %}
{% endif %}
</p>

<hr>

> Dockerizing my blog running on Ruby Gem 💎 and Jekyll has proven to be a game-changer. In this short blog, I'll share how straightforward the process was, the benefits of Dockerization, and the convenience it offers for making changes and running the blog locally.

<br>

!["Banner image with Jeklly and docker icons for the blog on using docker by Millan Kaul on his blog Quality With Millan"](/assets/images/2024/02/docker_jeklly/01_docker_jeklly.png){: .align-center}

<hr>

### No crap, straight to code first

Dockerizing a Jekyll blog involves creating a `Dockerfile` and a `docker-compose.yaml` file. 
These files encapsulate the environment and dependencies needed to run the blog on your local machine or on cloud seamlessly.

# `Dockerfile`

<hr>

```bash
# Use the official Jekyll image
FROM jekyll/jekyll:latest

# Set the working directory
WORKDIR /srv/jekyll

# Copy the Gemfile and Gemfile.lock to the container
COPY Gemfile Gemfile.lock ./

# Install Jekyll and dependencies
RUN bundle install

# Copy the rest of the application code to the container
COPY . .

# Expose the default Jekyll port
EXPOSE 4000

# Command to run the Jekyll server
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
```


# `docker-compose.yaml`

<hr>


```bash
version: '3'
services:
  jekyll:
    image: qwm
    ports:
      - "4000:4000"
    volumes:
      - "./:/srv/jekyll"
    command: ["bundle", "exec", "jekyll", "serve",  "--force_polling" , "--host", "0.0.0.0"]

```


<hr>


### Running Locally:

With the `Dockerfiles` and `docker-compose.yaml` in place, running the Jekyll blog locally becomes a breeze. 
Execute the following commands:

```bash
# Build the Docker image
$ docker-compose build

# Run the Jekyll server locally
$ docker-compose up
```
<hr>

This will initiate the Jekyll server, and you can access your blog locally at [http://localhost:4000](http://localhost:4000)


### Benefits of Dockerization

1. **Isolation:** Docker encapsulates the blog and its dependencies, ensuring consistency across different environments

2. **Portability:** The Dockerized setup is easily transferable, making it convenient to share with collaborators ( linux / mac / windows).

3. **Ease of Development:** Making changes and testing locally becomes seamless with the ability to run the blog in a controlled Docker environment.

<hr>

I am just loving it 😍

<hr>

**Wait ....You may ask Why, why Dockerize ?**

Q. Why Dockerize a Blog?

**Dockerizing my Jekyll blog was a game-changer for me!** 
> It's all about creating a smoother experience. Regardless of my setup, I can dive into my blog hassle-free ( local, cloud..). 


Q. How Does Docker Benefit Blog Development?


**Docker brings a level of consistency**
> ..and ease to blog development that I find invaluable. It's not just about the code; it's about creating an environment effortlessly and the benefits extend beyond my own work.

Q. Can I Still Make Changes Locally?

**Absolutely!**
 > Dockerization is designed to enhance, not limit, the development process. I'm just as passionate about the hands-on, creative aspect of blogging as you are. With Docker, making changes locally becomes a joy. You can tweak, experiment, and see your ideas come to life in real-time.


It's my way of extending an invitation to the community to explore and collaborate, creating a more accessible space for sharing insights and ideas. 🤗🤗🤗

<hr>

### "Image showing running blog on local

!["Image showing running blog on local"](/assets/images/2024/02/docker_jeklly/02_docker_blog.png){: .align-center}


<br>
<br>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">

Want to learn more❓
<br> 
Follow [Quality With Millan](https://www.linkedin.com/company/quality-with-millan) or <a href="https://www.linkedin.com/shareArticle?url=https://qualitywithmillan.github.io{{ page.url }}&title=I+came+through+this+awesome+blogs+on+%0A%23QualityWithMillan" title="I came through this awesome blogs on #QualityWithMillan" target="_blank">Share it on LinkedIn</a>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">

<script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="millankaul" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting, now you can buy me a coffee 😉" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>