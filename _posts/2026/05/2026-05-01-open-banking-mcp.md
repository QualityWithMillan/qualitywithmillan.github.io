---
title: "Open Banking MCP: Compare Bank Rates in Your AI Assistant"
header:
  teaser: /assets/images/2026/05/openBanking_explained_visually.png
permalink: "/blog/open-banking-mcp.html"
search: true
date: 2026-05-01
last_modified_at: 2026-05-10
authors: 
  - Millan Kaul
categories:
  - blog
  - fintech
  - ai-tools
tags:
  - open-banking
  - mcp
  - model-context-protocol
  - australian-cdr
  - ai-assistant
  - banking-automation
  - claude
  - cursor
excerpt: "Ask your AI to compare home loan rates, savings accounts, and credit cards instantly. Open Banking MCP brings Australian CDR data into Claude, Cursor, and VS Code."
seo:
  title: "Open Banking MCP: Compare Australian Bank Rates in Claude & Cursor"
  description: "Compare home loan rates, savings accounts, and credit cards across 120+ Australian banks using AI. Open Banking MCP works with Claude, Cursor, and VS Code."
  type: article
  image: /assets/images/2026/05/openBanking_explained_visually.png
  keywords:
    - "open banking mcp"
    - "australian cdr api"
    - "compare home loan rates"
    - "best savings rates australia"
    - "model context protocol fintech"
    - "claude banking assistant"
    - "australian bank comparison"
    - "cdr consumer data right"
    - "compare credit cards australia"
    - "term deposit rates australia"
  author: "Millan Kaul"
  published_time: "2026-05-10"
  modified_time: "2026-05-10"
  site_name: "QualityWithMillan"
og:
  title: "Open Banking MCP: Compare Australian Bank Rates in Your AI"
  description: "Ask Claude or Cursor: 'Compare mortgage rates' or 'Best savings accounts?' Get real data from 120+ banks instantly."
  image: /assets/images/2026/05/openBanking_explained_visually.png
  type: article
twitter:
  card: summary_large_image
  title: "Compare Australian Bank Rates in Your AI Assistant"
  description: "Open Banking MCP brings CDR data to Claude, Cursor. Ask rates, compare instantly."
  image: /assets/images/2026/05/openBanking_explained_visually.png
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


<img src="/assets/images/2026/05/open_banking_iocn.png" alt="Open Banking MCP logo" align="right" height="96" width="96"/>

**Ask your AI to compare bank rates. No websites. No logins. Just real data.**

Open Banking MCP is a Model Context Protocol server that brings Australian banking data directly into Claude, Cursor, and other AI assistants. Compare home loans, savings rates, credit cards—all through natural conversation.

Powered by Australian **Consumer Data Right** [(CDR)](https://consumerdatastandardsaustralia.github.io/standards) Banking APIs public APIs. Real data from 120+ banks.

---

## Why You Need This

Banking decisions shouldn't require 10 browser tabs and manual comparisons.

> You: "Compare mortgage rates between NAB, ANZ, and CBA"
> AI: [Fetches real-time rates, returns sorted comparison]

> You: "Show me zero-fee credit cards"
> AI: [Searches all 120+ banks instantly]

> You: "Which bank has the best savings rate?"
> AI: [Returns top 10 with exact rates]


No custom integrations. No API keys. Just ask.

---

## What You Can Ask

- _"How many credit cards does CBA offer?"_
- _"List all banks"_
- _"Compare mortgage rates between NAB, ANZ, and ING"_
- _"Show me the fees for TYRO product ID abc123"_
- _"Which bank has the lowest variable mortgage rate?"_
- _"Are there any zero-fee credit cards at WESTPAC?"_
- _"Find the best term deposit rates"_
- _"Show me personal loan rates for $20k"_

---

## Install & Configure

### For Claude Desktop

1. Install the MCP:
```bash
npm install open-banking-mcp
```

2. Add to Claude config:
   - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "open-banking-mcp": {
      "command": "npx",
      "args": ["-y", "open-banking-mcp@latest"]
    }
  }
}
```

3. Restart Claude. Done.

### For Cursor

**Cursor Settings → MCP → New MCP Server**

```json
{
  "command": "npx",
  "args": ["-y", "open-banking-mcp@latest"]
}
```

### For VS Code

```json
{
  "mcpServers": {
    "open-banking-mcp": {
      "command": "npx",
      "args": ["-y", "open-banking-mcp@latest"]
    }
  }
}
```

Or CLI:
```bash
code --add-mcp '{"name":"open-banking-mcp","command":"npx","args":["-y","open-banking-mcp"]}'
```

### For Antigravity

Add to `~/.gemini/antigravity/mcp_config.json`:

```json
{
  "mcpServers": {
    "open-banking-mcp": {
      "command": "npx",
      "args": ["-y", "open-banking-mcp@latest"]
    }
  }
}
```

---

## What It Does

| Tool | What It Does |
|------|-------------|
| `list_banks` | Find any of 100+ CDR-registered Australian banks |
| `list_banking_products` | Browse products from a specific bank |
| `get_banking_product` | Get full details: fees, rates, eligibility |
| `compare_bank_rates` | Side-by-side rate comparison (2-3 banks) |
| `compare_home_loans` | Find lowest home loan rates across all banks |
| `find_best_savings_rate` | Highest savings account rate (top 10) |
| `find_best_term_deposit_rate` | Highest term deposit rate (top 10) |
| `find_credit_cards` | Filter by travel, cashback, zero-fee |
| `find_personal_loans` | Lowest personal loan rates ($5k–$50k) |

---

## How It Works

![Visual explanation of how Open Banking MCP works](/assets/images/2026/05/openBanking_explained_visually.png)

1. **You ask your AI** a question about banking
2. **MCP server receives** the request
3. **Fetches live data** from banks' public CDR APIs
4. **Returns formatted results** instantly
5. **AI presents it naturally** to you

---

## Local Development

```bash
npm install
npm run build
npm test
npm start:http
```

Server runs on [http://localhost:3001/mcp](http://localhost:3001/mcp)

Health check:
```bash
curl http://localhost:3001/health
```

### Docker

```bash
docker build -t open-banking-mcp:local .
docker run -p 3001:3001 open-banking-mcp:local
```

---

## HTTP / API Mode

Run as a server:
```bash
npx open-banking-mcp --http --port 3001
```

### Endpoints:

| Endpoint | Purpose |
|----------|---------|
| `GET /health` | Health check |
| `POST /mcp` | MCP requests (SSE) |
| `GET /` | Server info |

*Example: Compare rates*

```bash
curl -X POST http://localhost:3001/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "compare_home_loans",
      "arguments": {"rateType": "VARIABLE"}
    }
  }'
```

---

## Data Source

All data is **publicly available** through Australian CDR (Consumer Data Right):

- [CDR Register](https://api.cdr.gov.au/cdr-register/v1/banking/data-holders/brands/summary)
- [CDR Standards](https://consumerdatastandardsaustralia.github.io/standards)
- [ACCC CDR Info](https://www.accc.gov.au/consumers/consumer-data-right)

⚠️ **Disclaimer:** This tool is not affiliated with any bank. Data changes frequently. Always verify with your bank before making decisions.


