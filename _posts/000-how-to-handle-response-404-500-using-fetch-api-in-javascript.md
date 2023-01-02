---
search : "false"
title: "How to handle 404, 500 and more - using `fetch()`API in JavaScript"
header:
  image: /assets/images/fetch_hero.png
  teaser: /assets/images/fetch_hero.png
  caption: "Handle 404 API respinse using fetch in JavaScript"
permalink: "/post/how-to-handle-response-404-500-using-fetch-api-in-javascript.html"
date: 2023-01-02T18:00:00-00:00
authors:
- Millan Kaul
categories:
  - blog
tags:
  - node
  - api
  - 
  
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

Give it a try and open this URL in your browser https://httpstat.us/404 , or in other words, see what happens when you fetch this endpoint (URL) using JavaScript (example code below).

```javascript
const fetch = require('node-fetch');
fetch('https://httpstat.us/404')
    .then(function(){
      console.log('200 OK');
    }).catch(function(){
      console.console.log('404 Not Found');
    })
```


---

404 error example. 
So if you know basic of any API/ web programming , you would have already guessed that above code shall print in the console.
`404 Not Found`

So if you guessed it to be `404` like I did , when first time I was using JavaScript `fetch()` API, **incorrect!**

As that's not how JavaScript `fetch() API` has been designed.


So, the answer is 😕
```
200 OK
```
<br>

### A quick background on fetch( )
> The fetch() API call or let us call it fetch() method for the sake of simplicity here in this article, is one of the many available modern ways to send a network request and get information (or response) from the server (or endpoint).
The fetch() method returns a Promise so you can use the then() and catch() methods to handle it, for simplicity think of Promise as a response to your request.
✅ Interesting to know that you can call fetch() method in various ways, such as , but not limited to:


<br>

### 1. GET request API example with fetch( )


```javascript
const fetch = require('node-fetch');
let url = 'https://google.com';
fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    }
  })
  .then(function() {
    console.log('Okay Google - 200');
  }).catch(function() {
    console.log('Google-  not so OK');
  });
```

<br>

### 2. Simplified: GET request API example with fetch( )


```javascript
const fetch = require('node-fetch');
fetch('https://www.google.com')
  .then(function() {
    console.log('Okay Google - 200');
  }).catch(function() {
    console.log('Google-  not so OK');
  });
```  

<br>

### 3. POST request API example with fetch( )


```javascript
const fetch = require('node-fetch');
fetch('https://www.google.com', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
  }
}).then(function() {
  console.log('Okay Google - 200');
}).catch(function() {
  console.log('Google-  not so OK');
});
```

<br>

### 4. Another POST request API example with fetch( ) {neat example}

```javascript
let requestData = {
  method: 'POST',
  body: data,
  headers: new Headers()
}
fetch(url, requestData)
  .then(function() {
    // here you can handle the response provided by server
  });
```


By now, if you were not aware, you would be knowing what 200 and 404 means in little of full sense. 
> Both ways this knowledge is enough to continue reading.


```
From the official MDN documentation (as on Feb 2021)
The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.
```

Yes as you just read, 200 for 400, 404, 4xx, 3xx and so on and so forth …. it will resolve normally

Also did you noticed, what does it mean, when they say:
 
```
...
and it will only reject on network failure or if anything prevented the request from completing.
```


<br>

### To test that, I ran below code to fetch a URL with my internet switched OFF 📵 to see what happens.
So here I paused writing this article and jumped to hands-on-coding ⌨️
this is what happened - voila FetchError !

> Google-  not so OK


```javascript
FetchError: request to https://google.com/ failed, reason: getaddrinfo ENOTFOUND google.com
    at ClientRequest.<anonymous> (C:\node_modules\node-fetch\lib\index.js:1461:11)
    at ClientRequest.emit (events.js:315:20)
    at TLSSocket.socketErrorListener (_http_client.js:469:9)
    at TLSSocket.emit (events.js:315:20)
    at emitErrorNT (internal/streams/destroy.js:106:8)
    at emitErrorCloseNT (internal/streams/destroy.js:74:3)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) {
  type: 'system',
  errno: 'ENOTFOUND',
  code: 'ENOTFOUND'
}
```  

![fetch_error_internet_off](/assets/image/fetch_error_internet_off.png)
<figcaption align = "center">Fetch Error screen ( when Internet is OFF)</figcaption> 
  
<hr>  

So till now, we know what fetch is what 200 and 4xx is and when /how you can reach the catch() block of fetch() method.


<br>

## The big question is still open, how shall I handle 3xx, 4xx and 5xx response of while using fetch() ❓

Without taking your time I will show you how you can do it (**Practical**) and then explanation (_Theory_).

So here is a sample code. just follow the numbers to understand how does the the code flows in real time.


```javascript
const fetch = require('node-fetch');
fetch('https://httpstat.us/404') 1️⃣ 
    .then(function(response) { 2️⃣ 
        if (!response.ok) { 3️⃣ 
            throw Error(response.statusText);4️⃣ 
        }
        return response;
    }).then(function(response) {
        console.log('200 - ok');
    }).catch(function(error) { 5️⃣ 
        console.log('404 Not Found : '+ error); 6️⃣ 
    });
```
  
This will throw Error and hence it will go into 5️⃣ catch()️⃣block and this will be printed in console

```
404 Not Found : Error: Not Found
```

now we know how to catch 404 there any be any other error status as well, such as 406, 500, 503.... 

<br>

### why not improve the code in elegant way to handle any such error.


```javascript
  function manageErrors(response) { 3️⃣ //input promise by fetch()
  if (!response.ok) { 4️⃣
    throw Error(response.statusText);5️⃣
  }
  return response;
}
let url = 'https://httpstat.us/503'; // pass your URL here
fetch(url) 1️⃣
  .then(manageErrors) 2️⃣ // call function to handle errors
  .then(function(response) {
    console.log('200 - ok');
  }).catch(function(error) { 6️⃣
    console.log(error); 7️⃣
  });
```
  

<br>

### if you are a fan of arrow function expression (ES6) enjoy less lines of code

  
```javascript
  function manageErrors(response) { 3️⃣
  if (!response.ok) {   4️⃣
    throw Error(response.statusText);   5️⃣
  }
  return response;
}
let url = 'https://...'; // pass your URL here 
fetch(url) 1️⃣
  .then(manageErrors) 2️⃣
  .then(response => console.log('200 - ok'))
  .catch(error => console.log(error)); 6️⃣
```


<br>

### wait a second, what if you want to catch errors only if specific error code is returned

  
```javascript
  function manageErrors(response) { 
    if (!response.ok) { 
           if (response.status == 404){ 
                  throw Error(response.statusText); 
            }
           return ; // will print '200 - ok'
     }
    return response;
}
```
  

<br>

### And what about if you want a range of error code to be caught, and later handled

```javascript  
function manageErrors(response) {
  if (!response.ok) {
    if (response.status >= 200 && response.status < 300) {
      throw Error(response.statusText);
    }
    return; // will print '200 - ok'
  }
  return response;
}
```                                                        
                                                        

<br>

### Hang on, what if you want both error status code and Error message to be passed back, so that you can handle all type of non 200 's

> You can construct them and pass as a object, later can be parsed at destination
      
```javascript
function manageErrors(response) { 3️⃣ 
    if(!response.ok){ 4️⃣
          const responseError = { 5️⃣️
               statusText: response.statusText,
               status: response.status
          };
          throw(responseError); 6️⃣
    }
    return response;
}
fetch('https://httpstat.us/503')  1️⃣ 
    .then(manageErrors)  2️⃣ // call function to handle errors
    .then(function(response) {
        console.log('200 - ok');
    }).catch(function(error) { 7️⃣
          console.log('Error Code   : ' + error.status );8️⃣
          console.log('Error Reason : ' + error.statusText);9️⃣
    });
This will print something
Error Code   : 503
Error Reason : Service Unavailable
```



## …💡 Tip for the article …
Download and set up node js
If you are stuck to get started with fetch and facing issue such as :

```javascript
      fetch('https://www.google.com')
^
ReferenceError: fetch is not defined
```
 

![Missing npm package : node-fetch](/assets/image/fetch_missing_npm_package.png)
<figcaption align = "center">Missing npm package : node-fetch</figcaption> 
      

      

<br>

#### That means probably node is not able to fins the npm package node-fetch which you may install by running:

      
```javascript
npm install node-fetch
```
      
      
![node-fetch (v 2.6.1) installation complete](/assets/image/node-fetch_v_2_6_1_installation_complete.png)
<figcaption align = "center">node-fetch (v 2.6.1) installation complete</figcaption> 
      
      

<br>

## ➕… Bonus information … ➕

      When the request completes, the resource is available. At this time, the promise will resolve into a Response object.
Response from fetch()and in general provides multiple promise-based methods to access the body in various formats as below.

      - `response.text()` – read the response and return as text
      - `response.json()` – parse the response as JSON
      - `response.formData()` – return the response as FormData object
      - `response.blob()` – return the response as Blob (binary data with type)
      - `response.arrayBuffer()` – return the response as ArrayBuffer (low-level representation of binary data)
      
additionally, `response.body` is a ReadableStream object, it allows you to read the body chunk-by-chunk.

<br><hr>
You can read more in detail on MDN's [official page on Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
