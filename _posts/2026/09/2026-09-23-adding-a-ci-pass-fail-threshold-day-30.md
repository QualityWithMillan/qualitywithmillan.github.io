---
layout: single-tabs
title: "Adding a CI pass fail threshold - day 30"
header:
  teaser: /assets/images/2026/09/evals_day_30.png
permalink: "/blog/adding-a-ci-pass-fail-threshold-day-30.html"
search: true
date: 2026-09-23
last_modified_at: 2026-09-23
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
excerpt: "I brought my eval journey to the finish line today by integrating our small test dataset directly into our CI/CD pipeline with a pass/fail threshold."
seo:
  title: "Adding a CI Pass Fail Threshold - Day 30"
  description: "Configuring automated LLM evaluations and pass/fail thresholds in CI/CD build processes."
  type: article
  image: /assets/images/2026/09/evals_day_30.png
  keywords:
    - "ci/cd pipeline"
    - "automation tests"
    - "github actions"
    - "pass fail threshold"
    - "quality gate"
  author: "Millan Kaul"
  published_time: "2026-09-23"
  modified_time: "2026-09-23"
og:
  title: "Adding a CI Pass Fail Threshold - Day 30"
  description: "How to automate prompt regression checks and run continuous evaluations on every commit."
  image: /assets/images/2026/09/evals_day_30.png
  type: article
twitter:
  card: summary_large_image
  title: "Adding a CI Pass Fail Threshold - Day 30"
  description: "How to automate prompt regression checks and run continuous evaluations on every commit."
  image: /assets/images/2026/09/evals_day_30.png
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

**Scaling up - integrating our small test dataset directly into our CI/CD pipeline with a pass/fail threshold.**

<figure class="align-center">
  <img src="/assets/images/2026/09/evals_day_30.png" alt="Image on evals, LLM evals pipeline">
  <figcaption style="text-align: center;">Don’t just fix AI bugs. Turn them into regression tests.</figcaption>
</figure>



### What I did today:
I configured a GitHub Action that runs our evaluator script on every commit. If the average accuracy score drops below 85%, the build fails.

Here is a sample GitHub Actions pipeline YAML configuration to run this check:

```yaml
name: AI Evals Quality Gate
on: [push]
jobs:
  evals:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Evals & Check Threshold
        run: |
          python run_evals.py --threshold 0.85
```


### What surprised me:
Running evals automatically took the fear out of refactoring system prompts.

### My QA takeaway:
1. Every AI defect is a gift to your regression suite, if captured.
2. Don’t just fix AI bugs. Turn them into regression tests.

Is your AI evaluation suite running on every code change, or is it still manual?

#AIEvals #RegressionTesting #AIEngineering
