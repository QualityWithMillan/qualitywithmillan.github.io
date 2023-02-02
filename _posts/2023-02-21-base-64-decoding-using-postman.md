---
search : "false"
title: "Base64 decoding using Postman"
header:
  image: /assets/images/base64.png
  teaser: /assets/images/base64.png
  caption: "Decoding Base64 string - with postman"
permalink: "/post/base-64-decoding-using-postman.html"
date: 2023-02-21T18:00:00-00:00
authors:
- Millan Kaul
categories:
  - blog
tags:
  - security
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


Base 64 decoding/encoding is one of the most fundamental and reversible encoding technique. And so it remains close to the heart of each and every developer who starts learning this simple yet powerful algorithm.
Always advisable to better keep the data such as : passwords, token, email , URL etc. at least Base64 Encoded. Rather than storing them over the internet as human readable plain text strings.

<hr>

Having said that , we have a lot of use cases where you may have to implement Base64 encoding and/or decoding during software development or a website page.
Question here is how often we do it offline ( not copy pasting data on some websites which are not hosted in your company's network) .
It is so easy to use free online resources.

![base64 matrix image](/assets/images/base64_matrix.png)
<figcaption align = "center">Photo by Markus Spiske on Unsplash</figcaption> 


But let 's be honest and accept the fact, that we have been doing that for ease of access and quick beautification of data such as json.
Remember sometimes test data is much more important and confidential than anything already out there in the market.
Think of your company building a new product. And it is currently in testing phase. If the data goes public it may not only attract competitors but also hackers waiting for your sweet little mistake.
Sacred ?? But don't worry my intention is not to scare you, rather help you to know that " how much important is testing" and "the value of test data". If we can use a tool /service hosted or installed inhouse, wouldn't that be a great solution. In this article , that's what I am going to show you, I will cover the use case ousing Postman tool.

<hr>


So to make it simple lets do it ! in just two simple steps:
1. You how to do it (Practical)
2. Explain what you just learnt (Theory)


<hr>

<br>

## 1. Practical
Use this code and run in your Postman
And follow the instructions below.

<br>

### GitHub gist ( easy to copy)


<script src="https://gist.githubusercontent.com/eaccmk/501177b2834a20caa995626849f32ebd"></script>



- Copy the code in Tests tab of your request

* Just replace `YWJjZDEyMzQ=` with your encoded string :+1:

```javascript
const base64EncodedString =  "YWJjZDEyMzQ=" ; 
```

- Type request type as GET (or as per your need )
- Put any URL
- Click Send button


> Now Make sure you click on Test Results tab as in below screen shot to see Decoded String also you can click Console bottom left 2nd link to see more details.

 
![base64 Postman ui decoding screenshot](/assets/images/base64_postman_ui.png)
<figcaption align = "center">Screen : Compete Experience of Base64 Decoding using postman</figcaption> 



<br>

## 2. Theory


```javascript
base64Encoding of "abcd1234" is "YWJjZDEyMzQ="
```

So what we want to do hear is (knowing the answer) see how we can decode any Base64 String (in this example `"YWJjZDEyMzQ="`) using this tool.


<br>

### This is the string you want to decode:


```javascript
const base64EncodedString= "YWJjZDEyMzQ=";
```


<br>

### Print your input in console (for further reference)

```javascript
console.log("INPUT >>",base64EncodedString,"<<");
```



<br>

### Step 1: parse /decode 'base64EncodedString' as 'wordArray'

```javascript
var wordArray = CryptoJS.enc.Base64.parse(base64EncodedString);
```


<br>

### Step 2: stringify 'wordArray' to get final 'decodedString'

```javascript
var decodedString = CryptoJS.enc.Utf8.stringify(wordArray);
```

<br>

### Print your output in console (for further reference)

```javascript
console.log("OUTPUT >> ",decodedString," <<");
```

## -- Results --


![Test Results with Base64 Decoded result.](/assets/images/base64_pm_result_tab.png)
<figcaption align = "center">Test Results with Base64 Decoded result.</figcaption> 


<hr>


![Console logs with Base64 Decoded result.](/assets/images/base64_pm_console_tab.png)
<figcaption align = "center">Console logs with Base64 Decoded result.</figcaption> 


<hr>


<br>

### Complete Postman Collection is here ( includes encoding)

<script src="https://gist.github.com/eaccmk/0c361cb53ba869a3dbde4d86a8d501bb"></script>

<br><hr>
