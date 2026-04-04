---
title: "LLM Pre-training: Learning From Trillions of Words"
header:
  teaser: /assets/images/2026/04/llm/chapter_06_pre-training.png
permalink: "/post/llm/what-is-pre-training.html"
search: true
date: 2026-04-07
authors: 
  - Millan Kaul
categories:
  - blog
  - llm-foundations
tags:
  - llm
  - pre-training
  - next-token-prediction
  - masked-language-modeling
  - llm-training
  - ai-testing
seo:
  title: "Pre-training LLMs: How Models Learn Language From Raw Internet Text"
  description: "Next-token prediction vs masked modeling—how LLMs gain general knowledge before fine-tuning. Why zero-shot prompting works for testers and developers."
  type: article
  keywords:
    - "llm pre-training"
    - "next token prediction"
    - "masked language modeling"
    - "llm knowledge cutoff"
    - "ai training basics"
  author: "Millan Kaul"
  published_time: "2026-04-07"
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

<hr style="border: none; height:2px; background-color: #A9F1E4; position: relative;">

# What is Pre-training in LLMs?

Pre-training equips LLMs with broad language knowledge from vast datasets before task-specific tuning.

## WHY?

For **Developers and SDETs**
- Pre-training is how LLMs learn **patterns, grammar, and world knowledge** from internet-scale data, giving them the "smarts" to handle diverse test prompts without task-specific training.  
- Understanding pre-training helps you know **what the model "knows" by default** (syntax, facts, code patterns) vs what it needs to learn later (your domain rules, policies).

![Image 01](/assets/images/2026/04/llm/chapter_06_pre-training.png)
<span style="font-size:0.5em;"></span>


## WHAT?

- **Pre-training** is the initial training phase where a transformer model learns general language understanding by predicting parts of massive unlabeled text datasets (books, web, code).  
- **Next-token prediction** (autoregressive, GPT-style): model sees text so far and predicts the next word/token repeatedly.  
- **Masked language modeling** (bidirectional, BERT-style): randomly hide 15% of tokens and predict them using full context from both sides.  

Take these concrete examples:

- **Next-token**: "The cat sat on the" → predict "mat".  
- **Masked**: "The [MASK] sat on the mat" → predict "cat".  
- Trained on **trillions of tokens** from diverse sources like Common Crawl, books, Wikipedia, code repos.


## WHEN AND WHERE?

### When pre-training knowledge is key

- When using **zero/few-shot prompting**: the model's pre-training knowledge is what enables it to follow instructions or reason without examples.  
- When **debugging unexpected knowledge**: model recalls facts, code patterns, or behaviors it "learned" during pre-training.  

### When you can keep it high-level

- Daily prompt engineering doesn't require pre-training details; just know it's the "general smarts" before specialization.  

Think about **where** pre-training impacts your work.

- **Model selection docs**: "Pre-trained on X trillion tokens, cutoff YYYY-MM" tells you the scope of built-in knowledge.  
- **Zero-shot capabilities**: ability to summarize, translate, code-review without fine-tuning comes from pre-training.  

Concrete examples:

- GPT-4 pre-trained to **April 2023** knows events up to then but not later (hence hallucinations on fresh data).  
- Code models pre-trained on GitHub repos generate syntax and patterns without task training.  
- Multilingual models handle 50+ languages because pre-training included diverse web text.


## HOW?

**1. Conceptual steps**

1. **Massive data preparation**  
   - Clean/filter trillions of tokens from web crawls, books, code (remove duplicates, toxic content).  
2. **Self-supervised objectives**  
   - **Next-token**: shift input/output by 1, predict forward (decoder-only).  
   - **Masked**: hide random tokens, predict using bidirectional context (encoder).  
3. **Train transformer at scale**  
   - Stack 100s of layers, train on 1000s of GPUs for weeks/months, optimizing next-token or masked loss.  
4. **Checkpoint and evaluate**  
   - Save weights when perplexity plateaus; test on benchmarks like GLUE, MMLU.

**2. Examples**

- **Next-token training**: "The quick brown fox jumps over the lazy" → predict "dog" (learns grammar, facts).  
- **Masked training**: "The [MASK] [MASK] over the lazy dog" → predict "quick brown fox jumps" (learns bidirectional context).  
- **Outcome**: model learns syntax ("noun verb"), semantics ("animal action"), facts ("Paris=France").  

**3. Testing mindset**

- **Knowledge probes**: ask about pre-training-era facts; gaps show cutoff or weak coverage.  
- **Pattern tests**: does it complete common code snippets or sentences correctly?

## For Leaders

- Pre-training is the **expensive foundation** that makes LLMs versatile; it explains why even "zero-shot" prompts work reasonably well out-of-the-box.  
- Leaders care because pre-training costs drive model pricing, and its quality sets the ceiling for what fine-tuning or prompting can achieve.  
- When selecting base models—pre-training quality affects generalization, safety baselines, and how much fine-tuning you'll need.  
- Focus on outcomes (context length, knowledge cutoff) rather than training recipes.  
- In **cost models**—pre-training is done once by providers; you pay via API costs scaled by model size.  
- Benchmark zero-shot performance on your domain docs to gauge if pre-training suffices or fine-tuning is needed.  
- Pre-training uses **self-supervision** (no human labels needed), making it scalable but compute-intensive (weeks/months on thousands of GPUs).

***

## Reference

- "What is LLM training?" [IBM](https://www.ibm.com/think/topics/llm-training)  
- "LLM Pre-Training and Custom LLMs" [Databricks](https://www.databricks.com/blog/llm-pre-training-and-custom-llms)