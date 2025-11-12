---
title: "5 Well-Known and 5 Less-Known MCP Concepts with Examples"
header:
  teaser: /assets/images/2025/11/04-5-well-n-less-known-mcp-use-cases.jpg
permalink: "/post/ai/5-well-known-5-less-known-mcp-use-cases.html"
search: true
toc: true
date: 2025-11-09
authors: 
  - Millan Kaul
categories:
  - blog
tags:
  - AI
  - AI Fundamentals
  - MCP
  - Agentic
  - AI-ML
seo:
  title: "Understanding MCP: 5 Popular and 5 Lesser-Known Concepts Explained with Real Use Cases"
  description: "Dive into the Model Context Protocol (MCP) through 10 essential concepts — 5 widely recognized and 5 lesser-known—each explained with practical examples. Perfect for developers and testers advancing in AI agent technologies."
  type: article
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

Let's dive in!

## Well-Known MCP Concepts

| Concept                      | Definition                                                          | Example Use Case                                                                      | Reference Link                |
|------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------|-------------------------------|
| Tool Invocation              | AI agent calls external APIs or tools in a standardized way.       | An agent fetches invoice details by calling an accounting API via MCP.                | [Merge.dev][web:162]          |
| Session Memory               | Persistence of conversational context across steps or platforms.   | User pauses a product return on mobile, resumes later on web with all context preserved. | [ActivePieces][web:161]       |
| Cross-Platform Context Sharing | Transfer of history, context, and tasks across devices/apps.     | User starts booking a flight in mobile, changes seat via voice assistant—context seamlessly moves.| [AWS][web:164]                |
| Enterprise System Integration| Unified connectivity to ERPs, CRMs, HR, and more via MCP.          | Sales agent merges account data from Salesforce and Oracle ERP in one query.          | [ActivePieces][web:161]       |
| Multi-Modal Decision Support | Combining real-time and historical data sources through MCP.       | Factory sensors report vibration; MCP agent accesses machine data then schedules maintenance.| [ActivePieces][web:165]       |

## Less-Known MCP Concepts

| Concept                      | Definition                                                          | Example Use Case                                                                      | Reference Link                |
|------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------|-------------------------------|
| Client ID Metadata Documents | Document-based trust for clients and servers with no prior relationship. | A 3rd-party tool authenticates with a cloud service using a metadata document in the MCP handshake.| [Descope][web:152]            |
| Secure Elicitation           | Enhanced protocol for securely gathering sensitive info.           | Payment provider linked via secure MCP authentication link, not exposed in chat.      | [Descope][web:152]            |
| Sampling Requests            | Server requests client LLM to summarize or generate, not just call tools.| Code review server asks client LLM for summary of changes.                          | [Descope][web:152]            |
| Ad Hoc Data Lookups          | On-demand, live retrieval from diverse sources using MCP.           | Agent instantly queries ERP if PO number exists before invoice approval.             | [Merge.dev][web:162]          |
| Registry and Trust Management| Centralized registration and discovery of MCP servers/tools.       | Enterprise platform auto-verifies and lists new AI tools for integration, ensuring secure access.| [ActivePieces][web:165]       |

[web:152]: https://descope.com  
[web:161]: https://activepieces.com  
[web:162]: https://merge.dev  
[web:164]: https://aws.amazon.com  
[web:165]: https://activepieces.com



<div align="center">⁂</div>



<br>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">

Want to learn more❓
<br> 
Follow [Quality With Millan](https://www.linkedin.com/company/quality-with-millan) or <a href="https://www.linkedin.com/shareArticle?url=https://qualitywithmillan.github.io{{ page.url }}&title=I+came+through+this+awesome+blogs+on+%0A%23QualityWithMillan" title="I came through this awesome blogs on #QualityWithMillan" target="_blank">Share it on LinkedIn</a>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">
