---
layout: single-tabs
title: "My first AI eval was boring - day 02"
header:
  teaser: /assets/images/2026/08/evals_day_02.png
permalink: "/blog/my-first-ai-eval-was-boring-day-02.html"
search: true
date: 2026-08-25
last_modified_at: 2026-08-25
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
excerpt: "Setting up a basic LLM evaluation only to find the initial results predictable, but discovering why simple tests are the best place to start."
seo:
  title: "My First AI Eval Was Boring - Day 02"
  description: "Building the first basic LLM evaluation and why simple, predictable baseline evals are essential for testing AI."
  type: article
  image: /assets/images/2026/08/evals_day_02.png
  keywords:
    - "ai evaluation"
    - "llm eval baseline"
    - "testing ai models"
    - "llm-as-a-judge"
    - "ai quality assurance"
  author: "Millan Kaul"
  published_time: "2026-08-25"
  modified_time: "2026-08-25"
og:
  title: "My First AI Eval Was Boring"
  description: "Why a simple and predictable first AI evaluation is actually a success in quality engineering."
  image: /assets/images/2026/08/evals_day_02.png
  type: article
twitter:
  card: summary_large_image
  title: "My First AI Eval Was Boring"
  description: "Why a simple and predictable first AI evaluation is actually a success."
  image: /assets/images/2026/08/evals_day_02.png
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

**My first AI eval was not clever. It was one boring pass/fail rule.**

<figure class="align-center">
  <img src="/assets/images/2026/08/evals_day_02.png" alt="Image showing basic pass/fail test for AI responses">
  <figcaption style="text-align: center;">Start with one rule your AI must never break.</figcaption>
</figure>


### What I did today:
I picked one output requirement: the response must include a clear next step. I tested five answers and marked each one pass or fail.

### What surprised me:
The simplest rule found failures faster than my “does this feel good?” review.

### My QA takeaway:
1. Start with what must never break. Fancy metrics can come later.
2. Start with one rule your AI must never break.

What is one non-negotiable rule for your AI feature?


#AIEvals #SoftwareTesting #AIEngineering