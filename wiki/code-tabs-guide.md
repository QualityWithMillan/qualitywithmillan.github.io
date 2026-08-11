# Reusable Code Tabs Component Guide

This guide explains how to use the dynamic Ollama-style tabbed code examples component in any Jekyll blog post.

---

## 1. Prerequisites

Ensure your post YAML frontmatter has the layout set to `single-tabs`:

```yaml
---
layout: single-tabs
title: "Your Post Title"
---
```

This layout automatically loads the required CSS stylesheet (`/assets/css/code-tabs.css`) and JavaScript controller (`/assets/js/code-tabs.js`).

---

## 2. Basic Usage

To insert a set of tabbed code examples:

### Step A: Add a Target Placeholder Div
Create a unique HTML `div` placeholder in your markdown file where you want the component to appear:

```html
<div id="code-tabs-202X-XX-XX"></div>
```

### Step B: Initialize the Tabs
Directly below the placeholder, add a `<script>` block calling `createCodeTabs` on your placeholder ID, passing an array of code objects:

```html
<script>
document.addEventListener('DOMContentLoaded', () => {
  createCodeTabs('code-tabs-202X-XX-XX', [
    {
      language: 'cURL',
      code: `curl http://localhost:11434/api/generate \\
  -d '{"model":"kimi-k3:cloud","prompt":"Hello"}'`
    },
    {
      language: 'Python',
      code: `import ollama
response = ollama.generate(model="kimi-k3:cloud", prompt="Hello")
print(response["response"])`
    }
  ]);
});
</script>
```

---

## 3. Multiple Tab Groups on the Same Page

You can place multiple code tab sets on the same page. Just ensure **each placeholder div has a unique ID** and you invoke `createCodeTabs` for each:

```html
<!-- Tab Group 1 -->
<div id="setup-tabs"></div>
<script>
document.addEventListener('DOMContentLoaded', () => {
  createCodeTabs('setup-tabs', [
    { language: 'cURL', code: 'curl http://localhost:11434/api/tags' },
    { language: 'Python', code: 'import ollama\nprint(ollama.list())' }
  ]);
});
</script>

<!-- Tab Group 2 -->
<div id="inference-tabs"></div>
<script>
document.addEventListener('DOMContentLoaded', () => {
  createCodeTabs('inference-tabs', [
    { language: 'JavaScript', code: 'import ollama from "ollama";\nconsole.log(await ollama.list());' }
  ]);
});
</script>
```

---

## 4. Features & Highlights

* **Supported Languages (Auto-Highlighted)**: `cURL`, `Python`, `JavaScript`, `Java`.
* **Copy to Clipboard**: A built-in icon button is rendered on the right side of the tab bar. It copies the active tab's code **AS IS** (keeping indentation formatting) and turns green momentarily as a success indicator.
* **Keyboard Accessible**: Focus the tab bar and navigate selections using the Arrow keys (`Right`/`Left`/`Up`/`Down`), `Home`, and `End`.
* **Zero Dependencies**: Uses standard native DOM, CSS Grid/Flexbox, and vanilla JS. Requires no third-party libraries, gems, or CDNs.
