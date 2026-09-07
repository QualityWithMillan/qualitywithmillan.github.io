---
layout: single-tabs
title: "I put a price tag on quality - day 10"
header:
  teaser: /assets/images/2026/09/evals_day_10.png
permalink: "/blog/i-put-a-price-tag-on-quality-day-10.html"
search: true
date: 2026-09-03
last_modified_at: 2026-09-03
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
excerpt: "I tested two models today. One answer was only slightly better and much more expensive."
seo:
  title: "I Put a Price Tag on Quality - Day 10"
  description: "Comparing cost versus quality metrics in LLM evaluation datasets."
  type: article
  image: /assets/images/2026/09/evals_day_10.png
  keywords:
    - "ai cost optimization"
    - "cost vs quality"
    - "llm expenses"
    - "llm evaluation"
    - "quality engineering"
    - "the ai eval mindset"
    - "the ai eval mindset book"
    - "millan kaul book"
    - "ai testing book"
  author: "Millan Kaul"
  published_time: "2026-09-03"
  modified_time: "2026-09-03"
og:
  title: "I Put a Price Tag on Quality - Day 10"
  description: "Analyzing whether minor quality improvements are worth premium LLM costs."
  image: /assets/images/2026/09/evals_day_10.png
  type: article
twitter:
  card: summary_large_image
  title: "I Put a Price Tag on Quality - Day 10"
  description: "Analyzing whether minor quality improvements are worth premium LLM costs."
  image: /assets/images/2026/09/evals_day_10.png
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

**I tested two models today. One answer was only slightly better and much more expensive.**

<figure class="align-center">
  <img src="/assets/images/2026/09/evals_day_10.png" alt="Image shwoing Measure Value not hype">
  <figcaption style="text-align: center;">The best AI answer is not always the best business decision.</figcaption>
</figure>


### What I did today:
I ran the same small dataset through two model options and estimated the cost per response. Then I compared that cost with the quality improvement I could actually see.

### What surprised me:
I had a strong opinion about quality, but no opinion about whether that quality was worth paying for.

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
1. An eval score without cost context is incomplete.
2. The best AI answer is not always the best business decision.

Would you pay 10x more for a 5% quality lift?

#AIEvals #AIProduct #LLMOps

{% include book-cta-footer.html %}
