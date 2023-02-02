---
search : "false"
title: "ToDo"
header:
  image: /assets/images/ToDo.png
  teaser: /assets/images/ToDo.png
  caption: "Photo credit: [**ToDo**](https://ToDo)"
permalink: "/post/ToDo.html"
date: 2021-09-09T18:00:00-00:00
authors:
- Millan Kaul
categories:
  - ToDo
tags:
  - ToDo
  -
  
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
