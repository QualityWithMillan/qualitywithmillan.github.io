---
title: "Guide to implement Multi-tab Code Snippets in Jekyll 🧪"
date: 2026-08-11T12:00:00-00:00
layout: single-tabs
header:
  teaser: /assets/images/2026/08/muti-code-tabs-jekly.gif
authors:
  - Millan Kaul
categories:
  - blog
tags:
  - tutorial
  - jeklly
  - GitHub pages
  - multi-code tabs
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

This article demonstrates how to implement clean, multi-tab code snippets or pseudocode on a static website like [Jekyll](https://jekyllrb.com/) hosted on GitHub Pages. Let me explain how I built it using my agent, link to the source files, and show you how to easily reuse this dynamic setup in your own blog.

---

## Live Demonstration

Here is the multi-tab code snippets component in action. Select a tab to view the code snippet formatted for that environment: 

<div id="multi-tab-id-1"></div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  createCodeTabs('multi-tab-id-1', [
    {
      language: 'cURL', 
      code: `curl https://api.openai.com/v1/chat/completions`
    },
    {
      language: 'Python', code: 
`from openai import OpenAI

client = OpenAI()
response = client.responses.create(
    model="gpt-5.6",
    input="Hello LLM 👋",
    reasoning={"effort": "low"}
)`
    },
    {
      language: 'JavaScript', code: 
`import OpenAI from "openai";

const openai = new OpenAI();
const response = await openai.responses.create({
  model: "gpt-5.6",
  input: "Hello LLM 👋",
  reasoning: { effort: "low" }
});`
    }
  ]);
});
</script>

---

## How It Works Under the Hood

The component is split into three modular pieces:
1. **Styles**: Scoped CSS managing layouts, active tabs underlines, and light-theme syntax colors.
2. **Javascript Engine**: A lightweight controller that creates elements, highlights syntax dynamically, and handles keyboard arrow key navigation.
3. **Jekyll Layout**: A layout file linking CSS and JS assets automatically.

### Source Files

You can view the source files directly on GitHub (opens in a new tab):
* [assets/css/code-tabs.css](https://github.com/QualityWithMillan/qualitywithmillan.github.io/blob/prod/assets/css/code-tabs.css){:target="_blank"}
* [assets/js/code-tabs.js](https://github.com/QualityWithMillan/qualitywithmillan.github.io/blob/prod/assets/js/code-tabs.js){:target="_blank"}
* [_layouts/single-tabs.html](https://github.com/QualityWithMillan/qualitywithmillan.github.io/blob/prod/_layouts/single-tabs.html){:target="_blank"}

---

## Add Code Tabs to Your Jekyll Posts

To use this code tab system in any post:

### Step 1: Set the Layout
Configure your post frontmatter to inherit the `single-tabs` layout:
```yaml
---
layout: single-tabs
title: "Your Post Title"
---
```

### Step 2: Add a Target Container
Place a `div` element with a unique ID inside your markdown article:

**IMP**: This must be a unique `ID` in your entire blog

```html
<div id="code-tabs-202X-XX-XX"></div>
```

### Step 3: Initialize with JavaScript
Add the initialization script directly below it:
```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    createCodeTabs('code-tabs-202X-XX-XX', [
      { language: 'cURL', code: 'curl http://localhost:11434/' },
      { language: 'Python', code: `from openai import`},
      { language: 'JavaScript', code: 'import openai' }
    ]);
  });
</script>
```

# Thats it, happy coding!