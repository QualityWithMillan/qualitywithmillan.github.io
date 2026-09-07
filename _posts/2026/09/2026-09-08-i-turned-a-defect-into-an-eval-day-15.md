---
layout: single-tabs
title: "I turned a defect into an eval - day 15"
header:
  teaser: /assets/images/2026/09/evals_day_15.png
permalink: "/blog/i-turned-a-defect-into-an-eval-day-15.html"
search: true
date: 2026-09-08
last_modified_at: 2026-09-08
authors:
  - Millan Kaul
series: "30 Days of AI Evals"
categories:
  - blog
  - engineering
  - ai
tags:
  - evals
  - llm-as-a-judge
  - llm-evals
excerpt: "I found one AI bug today—and turned it into a permanent test in 10 minutes."
seo:
  title: "I Turned a Defect into an Eval - Day 15"
  description: "Converting production AI defects and model bugs into reusable regression test cases."
  type: article
  image: /assets/images/2026/09/evals_day_15.png
  keywords:
    - "ai defect engineering"
    - "regression testing"
    - "eval dataset"
    - "software qa"
    - "test automation"
    - "the ai eval mindset"
    - "the ai eval mindset book"
    - "millan kaul book"
    - "ai testing book"
  author: "Millan Kaul"
  published_time: "2026-09-08"
  modified_time: "2026-09-08"
og:
  title: "I Turned a Defect into an Eval - Day 15"
  description: "How to use real-world AI failures to continuously build and improve regression test suites."
  image: /assets/images/2026/09/evals_day_15.png
  type: article
twitter:
  card: summary_large_image
  title: "I Turned a Defect into an Eval - Day 15"
  description: "How to use real-world AI failures to continuously build and improve regression test suites."
  image: /assets/images/2026/09/evals_day_15.png
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

**I found one AI bug today—and turned it into a permanent test in 10 minutes.**

<figure class="align-center">
  <img src="/assets/images/2026/09/evals_day_15.png" alt="Image shwoing to tun AI bugs into Evals">
  <figcaption style="text-align: center;">Don’t just fix AI bugs. Turn them into regression tests.</figcaption>
</figure>


### What I did today:
I took a real failure example, wrote down the expected behavior, and added it to my small eval dataset. Now any prompt or model change has to pass it.

### What surprised me:
The bug stopped being frustrating the moment it became reusable test data.

{% include product-spotlight-card.html 
   hook="📖 <em>This is a lesson from the 30-day AI testing framework in:</em>"
   title="THE AI EVAL MINDSET: 30 Focused Lessons for Testing AI That Works in the Real World"
   link="https://us.amazon.com/dp/B0HHJ84359/"
   link_text="Shop on Amazon ›"
   image="/assets/images/books/001_The_AI_Eval_Mindset.png"
   image_alt="THE AI EVAL MINDSET Book by Millan Kaul"
   author="by Millan Kaul"
   price="$9.99 Kindle"
   format="Also available in Paperback & Hardcover"
%}

### My QA takeaway:
1. Every AI defect is a gift to your regression suite—if you capture it.
2. Don’t just fix AI bugs. Turn them into regression tests.

What recent AI failure should become your next eval?

#AIEvals #RegressionTesting #AIEngineering

{% include book-cta-footer.html %}
