---
layout: single-tabs
title: "I tested the 'boring' requirement - day 05"
header:
  teaser: /assets/images/2026/08/evals_day_05.png
permalink: "/blog/i-tested-the-boring-requirement-day-05.html"
search: true
date: 2026-08-28
last_modified_at: 2026-08-28
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
excerpt: "Putting predictable constraints and standard expectations to the test, evaluating how the LLM judge grades standard formatting and basic rules."
seo:
  title: "I Tested the 'Boring' Requirement - Day 05"
  description: "Testing standard structural and functional rules (the 'boring' requirements) using an LLM evaluator to check rule adherence."
  type: article
  image: /assets/images/2026/08/evals_day_05.png
  keywords:
    - "boring requirements"
    - "rule adherence testing"
    - "llm evaluations"
    - "ai quality criteria"
    - "prompt engineering"
    - "the ai eval mindset"
    - "the ai eval mindset book"
    - "millan kaul book"
    - "ai testing book"
  author: "Millan Kaul"
  published_time: "2026-08-28"
  modified_time: "2026-08-28"
og:
  title: "I Tested the 'Boring' Requirement"
  description: "Can an LLM judge test boring formatting and structural rules effectively? Evaluating basic requirements."
  image: /assets/images/2026/08/evals_day_05.png
  type: article
twitter:
  card: summary_large_image
  title: "I Tested the 'Boring' Requirement"
  description: "Can an LLM judge test boring formatting and structural rules effectively?"
  image: /assets/images/2026/08/evals_day_05.png
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

**The AI answer looked great. It still failed the test.**

<figure class="align-center">
  <img src="/assets/images/2026/08/evals_day_05.png" alt="Image showing LLM outputs with some being not compliant with rules">
  <figcaption style="text-align: center;">A beautiful AI answer can still break production.</figcaption>
</figure>


### What I did today:
I checked whether every response returned the required JSON field. I ignored whether the wording was impressive and focused only on the contract.

### What surprised me:
Several responses were useful to a human but unusable by the application.

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
1. For AI systems, product quality includes format, schema, and integration—not just smart words.
2. A beautiful AI answer can still break production.

What “boring” requirement has caused your team the most pain?

#AIEvals #APITesting #AIEngineering

{% include book-cta-footer.html %}
