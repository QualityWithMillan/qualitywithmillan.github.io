---
layout: single-tabs
title: "The same prompt, 10 different answers - day 01"
header:
  teaser: /assets/images/2026/08/evals_day_01.png
permalink: "/blog/the-same-prompt-10-different-answers-day-01.html"
search: true
date: 2026-08-24
last_modified_at: 2026-08-24
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
excerpt: "Running the exact same prompt multiple times reveals the inherent variability in LLM responses, a core challenge in AI testing."
seo:
  title: "The Same Prompt, 10 Different Answers - Day 01"
  description: "Testing LLM response variability by running the same prompt 10 times to understand consistency in AI quality."
  type: article
  image: /assets/images/2026/08/evals_day_01.png
  keywords:
    - "llm response variability"
    - "prompt testing"
    - "ai response consistency"
    - "the ai eval mindset"
    - "the ai eval mindset book"
    - "millan kaul book"
    - "ai testing book"
    - "llm evals"
    - "quality engineering"
    - "ai quality"
    - "llm-as-a-judge"
    - "software testing"
  author: "Millan Kaul"
  published_time: "2026-08-24"
  modified_time: "2026-08-24"
og:
  title: "The Same Prompt, 10 Different Answers"
  description: "How variable are LLM responses to the exact same prompt? Exploring consistency in LLM evals."
  image: /assets/images/2026/08/evals_day_01.png
  type: article
twitter:
  card: summary_large_image
  title: "The Same Prompt, 10 Different Answers"
  description: "Testing LLM response consistency by running the same prompt 10 times."
  image: /assets/images/2026/08/evals_day_01.png
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

𝗜 𝗿𝗮𝗻 𝘁𝗵𝗲 𝘀𝗮𝗺𝗲 𝗔𝗜 𝗽𝗿𝗼𝗺𝗽𝘁 𝟭𝟬 𝘁𝗶𝗺𝗲𝘀 𝘁𝗼𝗱𝗮𝘆. 𝗜𝘁 𝗴𝗮𝘃𝗲 𝗺𝗲 𝟭𝟬 𝘀𝗹𝗶𝗴𝗵𝘁𝗹𝘆 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 “𝗰𝗼𝗿𝗿𝗲𝗰𝘁” 𝗮𝗻𝘀𝘄𝗲𝗿𝘀.

<figure class="align-center">
  <img src="/assets/images/2026/08/evals_day_01.png" alt="Image showing different AI responses for the same prompt">
  <figcaption style="text-align: center;">𝐼𝑓 𝑦𝑜𝑢𝑟 𝐴𝐼 𝑓𝑒𝑎𝑡𝑢𝑟𝑒 𝑜𝑛𝑙𝑦 𝑔𝑒𝑡𝑠 𝑡𝑒𝑠𝑡𝑒𝑑 𝑜𝑛𝑐𝑒, 𝑦𝑜𝑢 𝑎𝑟𝑒 𝑡𝑒𝑠𝑡𝑖𝑛𝑔 𝑎 𝑙𝑢𝑐𝑘𝑦 𝑑𝑟𝑎𝑤, 𝑛𝑜𝑡 𝑏𝑒ℎ𝑎𝑣𝑖𝑜𝑟.</figcaption>
</figure>


### What I did today:
I took one simple prompt and ran it 10 times with the same model settings. Then I put the responses side by side and looked for differences in facts, tone, and completeness.

### What surprised me:
The answers all sounded confident, but a few slightly different.

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
𝐼𝑓 𝑦𝑜𝑢𝑟 𝐴𝐼 𝑓𝑒𝑎𝑡𝑢𝑟𝑒 𝑜𝑛𝑙𝑦 𝑔𝑒𝑡𝑠 𝑡𝑒𝑠𝑡𝑒𝑑 𝑜𝑛𝑐𝑒, 𝑦𝑜𝑢 𝑎𝑟𝑒 𝑡𝑒𝑠𝑡𝑖𝑛𝑔 𝑎 𝑙𝑢𝑐𝑘𝑦 𝑑𝑟𝑎𝑤, 𝑛𝑜𝑡 𝑏𝑒ℎ𝑎𝑣𝑖𝑜𝑟.

𝗦𝗮𝗺𝗲 𝗽𝗿𝗼𝗺𝗽𝘁 ≠ 𝘀𝗮𝗺𝗲 𝗽𝗿𝗼𝗱𝘂𝗰𝘁 𝗯𝗲𝗵𝗮𝘃𝗶𝗼𝗿

What’s one AI output you assumed would be consistent?

{% include book-cta-footer.html %}