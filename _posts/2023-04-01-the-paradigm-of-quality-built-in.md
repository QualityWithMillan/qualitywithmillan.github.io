---
title: "The paradigm of Quality - Built-In"
header:
  image: /assets/images/DALL·E-Infinity-symbol.jpg
  teaser: /assets/images/DALL·E-Infinity-symbol.jpg
  caption: "Photo credit: Unplash"
permalink: "/post/the-paradigm-of-quality-built-in.html"
authors:
- Alejandro Sanchez Giraldo
- ChatGPT
- Github Copilot
categories:
  - blog
tags:
  - Roadmap
  - Quality Engineering
  - Strategy
  - Maturity Assessment 
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

## The paradigm of Quality - Built-In

In our previous article, "[The paradigm of Quality](/post/the-paradigm-of-quality.html)" and "[The paradigm of Quality - Embedded](/post/the-paradigm-of-quality-embedded.html)", we discussed different maturity models and why organizations may require an independent model of Quality Engineering. In this article, we will examine various aspects of Quality Engineering in an built-in model.

In today’s fast-paced digital world, businesses are under immense pressure to release high-quality products at lightning speed. The traditional process of developing software has been replaced by a more efficient approach called DevOps. However, even with the integration of DevOps practices like Continuous Integration and Continuous Deployment, ensuring quality remains a major concern.

This is where Quality Engineering comes into play. Quality Engineering is the practice of ensuring that software products meet predefined quality standards throughout the development process. It takes a proactive approach to identify potential issues early in the software development lifecycle, making it an essential part of the DevOps culture.

The goal of this article is to take a comprehensive look at how we can built-in Quality Engineering in the development process and its role in the DevOps culture. 

By the end of this article, you’ll have a better understanding of Quality Engineering and its importance in delivering successful products quickly and efficiently. Let's dive in!

## What is DevOps?

![DEVOPS](/assets/images/DALL·E-Infinity-symbol.png)

Photo by <a href="https://openai.com/product/dall-e-2">DALL-E</a>


### preface 1

### preface 2


This article was written in collaboration with [ChatGPT](https://chat.openai.com/chat) and [Github Copilot](https://copilot.github.com/).

