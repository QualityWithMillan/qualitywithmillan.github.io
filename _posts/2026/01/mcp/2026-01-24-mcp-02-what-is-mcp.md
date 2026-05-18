---
title: "What is MCP?"
header:
  teaser: /assets/images/2026/01/mcp/02_what_is_mcp.png
permalink: "/post/mcp/what-is-mcp.html"
search: true
date: 2026-01-24
authors: 
  - Millan Kaul
categories:
  - blog
  - mcp
  - ai-tools
tags:
  - mcp
  - model-context-protocol
  - ai-architecture
  - llm-tools
  - developer-tools
seo:
  title: "What is MCP? Model Context Protocol Explained (Architecture + Flow)"
  description: "MCP architecture breakdown: Client, Host, Server. How LLMs discover and call your Python/Node.js tools through a standardized protocol."
  type: article
  keywords:
    - "model context protocol"
    - "mcp explained"
    - "mcp architecture"
    - "mcp client server"
    - "llm tool calling"
  author: "Millan Kaul"
  published_time: "2026-01-24"
---

**Model Context Protocol (MCP)** = Standardized way for LLMs to discover and call *your* external tools/data.

No more custom integrations. One protocol works everywhere.

![What MCP is and its three layers](/assets/images/2026/01/mcp/02_what_is_mcp.png)

## MCP = 3 Layers

LLM/App ← Host → Client ← Protocol → Server (YOUR CODE)


### 1. **Server** (You write this)

```python
# YOUR Python/Node.js server
from fastmcp import FastMCP

mcp = FastMCP("inventory-server")

@mcp.tool()
def check_stock(item_id: str) -> dict:
    return {"in_stock": True, "quantity": 42}
```

2. Client (MCP host manages)
- Discovers available tools (tools/list)
- Calls tools with validated params
- Returns structured results

3. Host (Claude Desktop, Open WebUI, VS Code)
- Wires LLM ↔ MCP Client
- Handles conversation flow

### The MCP Handshake (3 Steps)

1. Client → Server: "initialize" + capabilities
2. Server → Client: "tools/list" + schemas  
3. Client → Server: "tools/call" → {"result": ...}

### JSON example:

```json
// Step 2: Server advertises tools
{
  "tools": [{
    "name": "check_stock",
    "inputSchema": {
      "type": "object",
      "properties": {"item_id": {"type": "string"}}
    }
  }]
}

// Step 3: Client calls tool
{"method": "tools/call", "params": {"name": "check_stock", "arguments": {"item_id": "SKU123"}}}
```


### Real Flow Example

User: "Is iPhone 16 in stock?"

1. LLM → Host: "Need to call check_stock('iPhone16')"
2. Host → Client → Server: tools/call
3. Server → DB → "Yes, 5 units"
4. LLM: "Yes, iPhone 16 is in stock (5 units left)"


### Python vs Node.js

#### Python (FastMCP):

```python
@mcp.tool()
def get_weather(city: str) -> str:
    return f"Weather in {city}: Sunny ☀️"
```


Node.js (TypeScript):

```typescript
const mcp = new MCP('weather-server');
mcp.tool('get_weather', async (city: string) => {
  return `Weather in ${city}: Sunny ☀️`;
});
```

### Why This Architecture Wins

- Self‑describing – Server advertises schemas, no docs needed
- Type‑safe – JSON Schema validation before calling
- Streaming – Large results stream back incrementally
- Local – Stdio/HTTP, no cloud required

## Call‑to‑Action
"Now you know WHAT MCP is. Next: WHEN do hallucinations happen most?"

References
- [FastMCP (Python)](https://github.com/jlowin/fastmcp)
- [MCP Spec - Handshake](https://modelcontextprotocol.io/docs/protocol)
- [FastMCP Node.js](https://github.com/punkpeye/fastmcp)
