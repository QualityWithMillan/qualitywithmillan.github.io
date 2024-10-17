---
title: "The Ultimate guide to complex JSON parsing using JavaScript, Python, Go, and Java"
header:
  teaser: /assets/images/2024/10/json/json_n_lang_logo.jpg
  og_image: /assets/images/2024/09/json/json_n_lang_logo.jpg
permalink: "/post/json-parsing-guide-with-code-examples.html"
search : true
date: 2024-10-16
authors: 
  - Millan Kaul
categories:
  - blog
tags:
  - Automation
  - json
  - Test Data
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

In the era of monolithic relational databases, structured data dominated how systems communicated. 

However, with the rise of microservices, flexible, unstructured data became crucial for inter-service communication. `JSON` (JavaScript Object Notation) quickly became the industry standard due to its lightweight nature, human readability, and compatibility across languages. Unlike XML or other formats, **JSON** provides an intuitive way to manage data in distributed systems and APIs, which are essential in modern microservices architectures.

## Background: Why JSON Became the Industry Standard

As software architectures shifted towards microservices, systems moved from tightly coupled databases to more unstructured data exchanges. Relational databases couldn’t always efficiently handle the dynamic and flexible data structures needed by microservices. JSON emerged as the go-to format because:

1. **Human readability**: Easy to read and write for both humans and machines.

2. **Lightweight**: Smaller data format than alternatives like XML, saving bandwidth.

3. **Language agnostic**: Natively supported in most programming languages.

4. **Microservices-friendly**: Easily handles unstructured, flexible data required by distributed systems.


### Sample Complex User Data JSON

```json
{
  "userId": 12345,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Metropolis",
    "zipcode": "12345"
  },
  "orders": [
    {
      "orderId": 101,
      "product": "Laptop",
      "amount": 1499.99
    },
    {
      "orderId": 102,
      "product": "Smartphone",
      "amount": 799.49
    }
  ]
}
```

## Parsing JSON in 4 Programming Languages

Let’s take this complex JSON response and parse the `name` and the `product` of the first order in different programming languages.


# 1. JavaScript (Node.js)

```javascript
//index.js

const userData = JSON.parse(`{
  "userId": 12345,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Metropolis",
    "zipcode": "12345"
  },
  "orders": [
    {
      "orderId": 101,
      "product": "Laptop",
      "amount": 1499.99
    },
    {
      "orderId": 102,
      "product": "Smartphone",
      "amount": 799.49
    }
  ]
}`);

console.log(userData.name); // Output: John Doe
console.log(userData.orders[0].product); // Output: Laptop
```

## 2. Java

```java
//main.java

import org.json.JSONObject;
import org.json.JSONArray;

public class JsonParseExample {
    public static void main(String[] args) {
        String jsonString = "{ \"userId\": 12345, \"name\": \"John Doe\", \"email\": \"john.doe@example.com\", \"address\": { \"street\": \"123 Main St\", \"city\": \"Metropolis\", \"zipcode\": \"12345\" }, \"orders\": [ { \"orderId\": 101, \"product\": \"Laptop\", \"amount\": 1499.99 }, { \"orderId\": 102, \"product\": \"Smartphone\", \"amount\": 799.49 } ] }";
        
        JSONObject jsonObject = new JSONObject(jsonString);
        System.out.println(jsonObject.getString("name")); // Output: John Doe
        
        JSONArray orders = jsonObject.getJSONArray("orders");
        System.out.println(orders.getJSONObject(0).getString("product")); // Output: Laptop
    }
}
```

## 3. Golang

```go
// main.go

package main

import (
	"encoding/json"
	"fmt"
)

type Address struct {
	Street  string `json:"street"`
	City    string `json:"city"`
	Zipcode string `json:"zipcode"`
}

type Order struct {
	OrderId int     `json:"orderId"`
	Product string  `json:"product"`
	Amount  float64 `json:"amount"`
}

type User struct {
	UserId  int     `json:"userId"`
	Name    string  `json:"name"`
	Email   string  `json:"email"`
	Address Address `json:"address"`
	Orders  []Order `json:"orders"`
}

func main() {
	data := `{
		"userId": 12345,
		"name": "John Doe",
		"email": "john.doe@example.com",
		"address": {
			"street": "123 Main St",
			"city": "Metropolis",
			"zipcode": "12345"
		},
		"orders": [
			{
				"orderId": 101,
				"product": "Laptop",
				"amount": 1499.99
			},
			{
				"orderId": 102,
				"product": "Smartphone",
				"amount": 799.49
			}
		]
	}`

	var user User
	json.Unmarshal([]byte(data), &user)

	fmt.Println(user.Name)                // Output: John Doe
	fmt.Println(user.Orders[0].Product)   // Output: Laptop
}
```

## 4. Python

```python
# __main__.py
import json

user_data = '''
{
  "userId": 12345,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Metropolis",
    "zipcode": "12345"
  },
  "orders": [
    {
      "orderId": 101,
      "product": "Laptop",
      "amount": 1499.99
    },
    {
      "orderId": 102,
      "product": "Smartphone",
      "amount": 799.49
    }
  ]
}
'''

user = json.loads(user_data)
print(user["name"])  # Output: John Doe
print(user["orders"][0]["product"])  # Output: Laptop
```

Yes it's that easy to parse nested JSON values in different languages. 


Give it a go 🚀!

<br>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">

Want to learn more❓
<br> 
Follow [Quality With Millan](https://www.linkedin.com/company/quality-with-millan) or <a href="https://www.linkedin.com/shareArticle?url=https://qualitywithmillan.github.io{{ page.url }}&title=I+came+through+this+awesome+blogs+on+%0A%23QualityWithMillan" title="I came through this awesome blogs on #QualityWithMillan" target="_blank">Share it on LinkedIn</a>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;"> 