---
title: "Running a local server and API testing in less than 10 minutes"
header:
  teaser: /assets/images/2021/12/local-serv/run-api-server-in-10-mins.jpg
  caption: "Image by : Millan Kaul"
permalink: "/tutorial/running-api-server-in-10-minutes.html"
date: 2021-09-20T18:00:00-00:00
authors:
- Millan Kaul
categories:
  - tutorial
tags:
  - node
  - javascript 
  - testing
  - serverless
  
---

<hr>
<p>
 Written by -
{% assign authorCount = page.authors | size %}
{% if authorCount == 0 %}
   {{ page.author}}
{% elsif authorCount == 1 %}
    {{ page.authors | first }}         
{% else %}
    {% for author in page.authors %}
        {% if forloop.first %}
            {{ author }}
        {% elsif forloop.last %}
            and {{ author }}
        {% else %}
            , {{ author }}
        {% endif %}
    {% endfor %}
{% endif %}
</p>

<hr>




## Time is money 💲

> So in next 10 minutes or less 🤞 I promise, we will:

1. Start an **API server** on your machine (*localhost*)
2. Run independent **API test** on server. 
  * Test's include *assertion*

✔️ All this without using any dependency !!! ✔
<hr style="border:12px solid grep">

```diff
+                      Time starts now ⏱️
```

![ten minutes timer](/assets/images/2021/12/local-serv/10-minutes-timer.png)
<figcaption align = "center">Fig.1 - 10 minute timer</figcaption> 
<br/>

**Step 1** : Set up the node / NodeJS
> 💡 Think of `NodeJs` like `JVM` if you are familiar with `java` 

If you already have it setup then you can jump to [Code and run](#run-and-test-in-4-simple-steps)

Go to [nodejs.org](https://nodejs.org/en/download/) and download / install **NodeJs** on your platform. You may also Check their [official Releases page](https://nodejs.org/en/about/releases/#releases) 


> **macos** users : `brew install node` 
> **linux** users : `sudo apt install node`

Check installation by running this `node -v` on your terminal / cmd and you will see :
 
```console
node -v
v16.8.0
```

> **Version 16** was the latest while writing this article.

☑️ And that's all you need today in terms of setup
<br/>
<br/>
### Run and Test in 4 simple steps

1️⃣ **Setup** server ✔️

2️⃣ Run **server** 🏃🎽

3️⃣ Write **tests** 📝

4️⃣ **Run** API test's 🚀


To keep it simple, we will keep server and test files in the same folder/directory.

So lets create a folder named **dev** on **Desktop**

```sh
Desktop/dev
```
**Let's Start !**


## 1️⃣ Setup server✔️

Go to **dev** folder (`cd Desktop/dev`) and create a file named `server.js` and copy this code:


```javascript
//server.js

const http = require("http");

const HOST = "localhost";
const PORT = 8020;

const server = http.createServer(async (req, res) => {
console.log("Request on server received :  " + req.method + " : " + req.url);

  /**
   * Health check endpoint `/health`
   * 
   * @path {HOST}:{PORT}/health
   * @return status : {200}
   * @return message : text : "If you see this message, your API server is all set , Welcome !"
   */
  if (req.url === "/" && req.method === "GET") {
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the response data as text
    res.end("If you see this message, your API server is all set , Welcome !");
  } 


  /**
   * Health check endpoint `/health`
   * 
   * @path {HOST}:{PORT}/health
   * @return status {200:OK}
   * @return uptime : how long has been server up & running
   * @return timestamp : Time of response from server  
   */
  else if (req.url === "/health" && req.method === "GET") {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };
    res.end(JSON.stringify(healthcheck));
  } 

  
  /**
   * Endpoint not implemented / invalid endpoint
   * @path {optional} `/`
   * @return {404} - Route is not implemented (Page Not Found)
   */
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ message: "Route is not implemented" })
    );
  }
});

server.listen(PORT, () => {
  console.log(`server started on : ${HOST}  port: ${PORT}`);
});
```
So we created a javaScript file to set up a `local server` that we will run (in next step). 

> In same file we created 2 endpoints:

```javascript
http://localhost:8020/        //Base url : GET Home Page
http://localhost:8020/health  //Health   : GET server status
```


## 2️⃣ Run server🏃🎽

Open your terminal/cmd and navigate to **Desktop/dev**

```javascript
cd ~/Desktop/dev 
```

and run your server using this command:

```javascript
node server.js
```

If you see this message, it means your API Server is all set !

![server](/assets/images/2021/12/local-serv/start-node-server.png)
<figcaption align = "center">Fig.2 - server started on http://localhost:8020</figcaption>

You can even check it on your browser:

![server verified on browser](/assets/images/2021/12/local-serv/server-start-on-browser.png)
<figcaption align = "center">Fig2.1 - server ( http://localhost:8020) accessible on browser</figcaption> 


## 3️⃣ Write tests 📝

Under same folder `Desktop/dev` now create a file named `test.js` and copy this code:

```javascript
//test.js

const http = require('http');
const assert  = require("assert");

let BASE_URL = "http://localhost:8020";


  /**
   * Test 1 : Hit BASE_URL and assert response statusCode to be  === 200
   * 
   * @path {BASE_URL}
   * @return expect : {200}
   */
http.get(BASE_URL, (response) => {
      console.log("Response: " + response.statusCode);
      assert(response.statusCode === 200);
    });

  /**
   * Test 2 : Hit `/health` endpoint and assert response statusCode to be  === 200
   * 
   * @path {BASE_URL}/health
   * @return status : {200}
   */
http.get(BASE_URL+'/health', (response) => {
      console.log("Response: " + response.statusCode);
      assert(response.statusCode === 200);
    });


  /**
   * Test 3 : Hit random endpoint `/thisIsNotAValidEndpoint` and assert response statusCode to be  === 404
   * 
   * @path {BASE_URL}/thisIsNotAValidEndpoint
   * @return status : {404}
   */
http.get(BASE_URL+'/thisIsNotAValidEndpoint', (response) => {
      console.log("Response: " + response.statusCode);
      assert(response.statusCode === 200);
    });
```

## 4️⃣ Run API test's 🚀

1. Make sure you open a new terminal/cmd window to run this.
2. Be sure that our server is still running (step **2️⃣ Run server🏃🎽** ) on separate terminal/cmd.


```javascript
node test.js
```

you will see something like this:

```javascript
dev $ node test.js 
Response: 200
Response: 200
Response: 404
node:assert:400
    throw err;
    ^

AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

  assert(response.statusCode === 200)

    at ClientRequest.<anonymous> (.../Desktop/dev/test.js:40:7)
    at Object.onceWrapper (node:events:514:26)
    at ClientRequest.emit (node:events:394:28)
    at HTTPParser.parserOnIncomingClient [as onIncoming] (node:_http_client:621:27)
    at HTTPParser.parserOnHeadersComplete (node:_http_common:128:17)
    at Socket.socketOnData (node:_http_client:487:22)
    at Socket.emit (node:events:394:28)
    at addChunk (node:internal/streams/readable:315:12)
    at readableAddChunk (node:internal/streams/readable:289:9)
    at Socket.Readable.push (node:internal/streams/readable:228:10) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '=='
}
```

<hr>  

# WHAT ❗ ❗ 

What just happened ❓ , why all these logs are printed.

Don't panic, it was expected, here is why ⬇️

In the above `test.js` this was intentionally put to demo,  what will happen when an test fails on assertion.


**Troubleshooting** : Start by reading error printed:

```javascript
AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

  assert(response.statusCode === 200)
```

What it tells is that "the expected response code `200` was not received". 

**Question** : But which one ❓

**Answer** : Read just 1 more line from logs it tells you exactly where `test.js:40:7`

```javascript
 at ClientRequest.<anonymous> (.../Desktop/dev/test.js:40:7)
```
> Let's Fix this :

* Open `test.js` in your text editor.
* Go to **line # 40**

```javascript
assert(response.statusCode === 200);
```

**Change `200` to `404`**

```javascript
assert(response.statusCode === 404);
```
now save and close this file. 

>Self assignment:  Try to explore the reason yourself.
 hint: line # 33 of `test.js`


---------------------------------------------

Let's try to run test's once again 🏃 🚀

```javascript
node test.js
```

# Done !

![successful test run](/assets/images/2021/12/local-serv/response-test.png)
<figcaption align = "center"><b>Fig.3 - Successful Test run ✔️ </b></figcaption> 

> Time over :) 

![1 second left on timer](/assets/images/2021/12/local-serv/01-sec-timer.png)
<figcaption align = "center"><b>Fig.3.1 - Time over</b></figcaption> 

      
> Credits for <a target="_blank" href="https://icons8.com/icon/b3uCTpcS-NiY/api">API icon</a> 
