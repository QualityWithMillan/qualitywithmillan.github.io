---
title: "How MCP Works?"
header:
  teaser: /assets/images/2026/02/mcp/05_how_mcp_works.png
permalink: "/post/mcp/how-mcp.html"
search: true
date: 2026-02-05
authors: 
  - Millan Kaul
categories:
  - blog
  - mcp
  - ai-tools
  - coding
tags:
  - mcp
  - model-context-protocol
  - playwright-mcp
  - mcp-tools
  - vscode-mcp
  - coding-assistant
seo:
  title: "How MCP Works: Database Agent + Playwright Examples"
  description: "MCP handshake flow, tool calling details. Database agent, Playwright browser automation, VS Code setup. Complete code examples."
  type: article
  keywords:
    - "model context protocol"
    - "how mcp works"
    - "mcp tool calling"
    - "playwright mcp"
    - "mcp vscode"
    - "database mcp agent"
  author: "Millan Kaul"
  published_time: "2026-02-05"
---


"MCP handshake → tool call → your code runs. 3 minutes to understand."


**MCP Flow (Database Agent Example)**

1. LLM: "User balance for ID=123?"
2. Host: Discover tools → get_balance()
3. Client → Server: tools/call({"user_id": "123"})
4. YOUR CODE: DB query → "$1,247.89"
5. LLM: "Balance is $1,247.89"


![Image 01](/assets/images/2026/02/mcp/05_how_mcp_works.png)


**Playwright‑MCP Example (Browser Automation)**

```python
# playwright-mcp server
@mcp.tool()
def launch_browser(url: str) -> str:
    """Launch browser, navigate"""
    page.goto(url)
    return page.title()

@mcp.tool()
def click_element(selector: str) -> str:
    """Click visible element"""
    page.click(selector)
    return "Clicked"
```

**Coding Assistant MCP Example**

Dev: "Test login flow"

→ MCP calls:
1. launch_browser("https://app.com/login")
2. fill_form("#email", "test@example.com")
3. click_element("#login-btn")
4. screenshot("login-test.png")


Tool Calling Details
Discovery (`tools/list`):

```json
{
  "tools": [{
    "name": "launch_browser",
    "inputSchema": {
      "properties": {"url": {"type": "string"}},
      "required": ["url"]
    }
  }]
}
```

Call (`tools/list`):

```json
{
  "name": "launch_browser",
  "arguments": {"url": "https://example.com"}
}
```

### VS Code / Cursor Setup

`.vscode/mcp.json` (`.cursor/mcp.json`):

```json
{
  "servers": [{
    "name": "Playwright MCP",
    "command": "uv",
    "args": ["run", "playwright_server.py"]
  }]
}
```

> Usage: Chat → "Test login on example.com" → Auto‑calls Playwright tools.

**Full Playwright‑MCP Server**

```python
from fastmcp import FastMCP
from playwright.async_api import async_playwright

mcp = FastMCP("playwright-server")

@mcp.tool()
async def test_login(url: str, email: str, password: str) -> str:
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(url)
        await page.fill("#email", email)
        await page.fill("#password", password)
        await page.click("#login")
        title = page.title()
        await browser.close()
        return f"Login test: {title}"
```

**Leadership view:**

Every tool call = your code. Full audit, zero hallucinations.

### Call‑to‑Action

"Build your first MCP tool today and deploy it by tomorrow."

### References

- [Playwright‑MCP](https://github.com/microsoft/playwright-mcp)
- [VS Code MCP Docs](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)


