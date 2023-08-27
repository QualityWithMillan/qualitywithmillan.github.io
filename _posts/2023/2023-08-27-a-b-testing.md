---
title: "A/B Tetsing - in 5 steps"
header:
  feature: /assets/images/2023/08/a-b-testing-feature.jpg
  teaser: /assets/images/2023/08/a-b-testing-teaser.png
permalink: "/post/a-b-testing.html"
date: 2023-08-27
authors:
- Millan Kaul
categories:
  - article
tags:
  - testing

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

### So waht is A/B tetsing ?

> "A/B testing" is a shorthand for a simple randomized controlled experiment, in which a number of samples (e.g. A and B) of a single vector-variable are compared 
~ from [Wiki](https://en.wikipedia.org/wiki/A/B_testing#Overview)

Also known as bucket testing, split-run testing, or split testing. It is a user experience research methodology where randomized experiment usually involves two variants (A and B).

GOLA 🎯 Determining which of the variants is more effective.

I will explain to you **A/B testing** process in 5 steps - for continuous testing and improvement.



!["Image showing 5 key point for A B tetsing"](/assets/images/2023/08/a-b-testing-feature.jpg){: .align-center}

<hr>


### 🔷 𝟬𝟭 𝗗𝗲𝗳𝗶𝗻𝗲 𝗚𝗼𝗮𝗹 (𝗰𝗼𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻)

Before your create a test, your need to know what, exactly, you’re hoping to accomplish.


### 🔷 𝟬𝟮 𝗕𝗿𝗮𝗶𝗻𝘀𝘁𝗼𝗿𝗺/𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲 𝗜𝗱𝗲𝗮

Once you’ve determined a goal you want to accomplish, you’ll need to generate ideas.


### 🔷 𝟬𝟯 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗖𝗵𝗮𝗻𝗴𝗲𝘀

You will be need to implement changes with highest potential, intuition and best practices.


### 🔷 𝟬𝟰 𝗖𝗿𝗼𝘄𝗻 𝘁𝗵𝗲 𝗡𝗲𝘄 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻

Once you’ve launched your test, you need to let it run for a long enough period of time.


### 🔷 𝟬𝟱 𝗧𝗲𝘀𝘁 𝗨𝗻𝘁𝗶𝗹 𝗦𝘁𝗮𝘁𝗶𝘀𝘁𝗶𝗰𝗮𝗹𝗹𝘆 𝗦𝗶𝗴𝗻𝗶𝗳𝗶𝗰𝗮𝗻𝘁

By this point, you’ve set a goal, select a page and determine what you want to test.

<hr>

Follow me for engaging and visual content Millan Kaul or my hash tag #QualityWithMillan / Quality With Millan

#usertesting #alpha and #beta #testing

Want to learn more❓ Follow my hashtag.[#QualityWithMillan](https://www.linkedin.com/feed/hashtag/?keywords=qualitywithmillan) on or just follow [me on linkedIn](https://www.linkedin.com/in/millankaul/)
