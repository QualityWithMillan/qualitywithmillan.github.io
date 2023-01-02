---
search : "false"
title: "How to decode jwt token offline - without using jwt.io"
header:
  image: /assets/images/jwt_hero.png
  teaser: /assets/images/jwt_hero.png
  caption: "Explained - 3 parts of JWT token"
permalink: "/post/How-to-decode-jwt-token-offline.html"
date: 2023-01-09T18:00:00-00:00
authors:
- Millan Kaul
categories:
  - blog
tags:
  - security
  - algorithm
  - tools
  
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


> I will show you **How to decode jwt token using postman in 2 minutes !!**

Most of the developers and QA have pasted jwt tokens on https://jwt.io as nothing else seems more reliable than that to copy your secrets.
But its less of a fact that we read this on the same website

Warning: JWTs are credentials, which can grant access to resources. Be careful where you paste them! We do not record tokens, all validation and debugging is done on the client side.

![jwt.io screenshot](/assets/image/jwt_io_ui.png)
<figcaption align = "center">screenshot of decoding JWT token from jwt.io</figcaption> 


**Postman Test tab**

```javascript
var jwt_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

var one = JSON.parse(atob(jwt_token.split('.')[0]));
var two = JSON.parse(atob(jwt_token.split('.')[1]));
var three = jwt_token.split('.')[2];

console.log (one);
console.log (two);
console.log (three);
```

> And you will see this in the result tab at bottom

```javascript
pm.test('one -----> ' + JSON.stringify(one), function () {});
pm.test('two -----> ' + JSON.stringify(two), function () {});
pm.test('three ---> ' + three, function () {});
```

> Test Result tab showing decoded values of jwt token 

![Test results of decoded jwt token](/assets/image/jwt_test_result.png)
<figcaption align = "center">Image with values of decoded JWT token</figcaption> 
