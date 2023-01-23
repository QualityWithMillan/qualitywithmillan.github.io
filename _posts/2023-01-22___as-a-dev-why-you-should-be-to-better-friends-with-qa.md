---
title: "As a Dev 👨‍💻, why you should be better friends with QA ❤️"
header:
  image: /assets/images/dev-qa-friends.png
  teaser: /assets/images/dev-qa-friends.png
  caption: "Dev QA Friends"
permalink: "/post/how-to-win-dev-friends-as-a-QA.html"
date: 2023-01-22T08:00:00-00:00
authors:
- Millan Kaul
categories:
  - blog
tags:
  - dev
  - qa
  
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


The other title for this post in my mind was **Why Developers Should Love Testers** as a team mates.

Well, that could have gone south, I decided to keep it "As a Dev 👨‍💻, why you should be better friends with QA ❤️"

Nevertheless over to the WHY ❓ and HOW ❓

Developers and testers often work closely together to ensure that a software application is functioning as expected. Here are a few reasons why developers should be better friends and perhaps love the work of testers.

I will try my best with code examples and situations.

**Testers can save developers from crises** by identifying and reporting bugs early on in the development process. 
This allows developers to fix the issues before they become major problems that impact the user experience.


<br><br>

### When working with QA (no coding involved)

🙌. Testers can help developers gain a deeper understanding of the product by providing feedback on how it is being used in the real world. This can help developers make informed decisions about future enhancements and improvements.

🙌. Testers often have a strong understanding of <ins>end-to-end testing</ins>, which can help developers ensure that their code is functioning properly across all parts of the application.

🙌. Testers can help developers **improve the quality** of their `code` by providing feedback on test automation strategies and helping to implement automated testing processes.

🙌. Testers can also help developers with code snippets and positive examples, by providing sample code that demonstrates how to handle specific scenarios or edge cases.

**Let me explain with an example:**

👨‍💻 A developer is working on a new feature that allows users to upload files to the application. 
The developer has written the code and tested it locally, but it's not working as expected when it goes to live. 

🤝 A tester found out that the issue is with the file size validation, where the code is allowing to upload files more than the required size limit. 
This issue is then fixed by the developer and it's not causing any negative impact on the user experience.

### When working with automation tester

⚙️.  Test automation can help developers save time by automating repetitive and time-consuming tasks, such as running regression tests. This allows developers to focus on more important tasks, such as writing new code or fixing bugs.

⚙️.  Test automation can help developers improve the reliability of their code by running automated tests on a regular basis. This can help to catch bugs and other issues early on, before they have a chance to cause problems for users.

⚙️.  Test automation can help developers improve the maintainability of their code by providing a clear and consistent testing strategy. This can make it easier for developers to understand how the code is supposed to work and make changes as needed.

⚙️.  Test automation can help developers improve the efficiency of their code by identifying areas that are taking longer than expected to execute, and providing data that can be used to optimize performance.

Here's an example of a `Java` code snippet that demonstrates how to use `JUnit`, a popular testing framework for `Java`, to create an `automated test`:

```java
import org.junit.Test;
import static org.junit.Assert.*;

public class ExampleTest {
    @Test
    public void testExample() {
        int a = 1;
        int b = 2;
        int expectedSum = 3;
        int actualSum = a + b;
        assertEquals(expectedSum, actualSum);
    }
}
```

And an example of JavaScript code snippet that demonstrates how to use Jest, a JavaScript testing framework, to create an automated test:

```javascript
describe('example test', () => {
    test('addition test', () => {
        expect(1 + 2).toBe(3);
    });
});
```

Sounds like unit test case isn't it ? And is simple and effective if your devs have no test at all.


In both the examples are a very simple test case checking that 1 + 2 equals 3. 
The test framework will run the test and report whether the test passed or failed. 

Developers can use these frameworks to create automated tests that cover a wide range of scenarios and help ensure that the code they are writing is working as expected.

A bit of avanced version could be

here's an example of an API test that uses a JSON body in the request:

```java
import requests
import json

# Define the endpoint and the JSON body for the request
endpoint = "https://api.example.com/users"
json_body = {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
}

# Convert the JSON body to a string
json_data = json.dumps(json_body)

# Send the POST request to the endpoint
response = requests.post(endpoint, json=json_data)

# Check the status code of the response
assert response.status_code == 201

# Parse the JSON response
response_json = response.json()

# Check that the response contains the expected data
assert response_json["name"] == "John Doe"
assert response_json["email"] == "johndoe@example.com"
```


In this example, the test is sending a POST request to an endpoint using the requests library, passing the JSON body as the json parameter. 
The test then checks that the status code of the response is 201 (created), indicating that the request was successful. 

The test also parse the JSON response and check the expected data.

This is a simple example of API testing, but in real-world testing, you can include more complex test cases, such as testing for different status codes, testing for specific error messages, and testing for different edge cases, like testing with different inputs, different user roles, and so on.


Here's an example of similar API test in `JavaScript` using the `fetch API` and the `assert library`:

```javascript
const assert = require('assert');

const endpoint = 'https://api.example.com/users';
const jsonBody = {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
};

fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonBody)
})
.then(response => {
    assert.equal(response.status, 201, `Expected 201 but got ${response.status}`);
    return response.json();
})
.then(data => {
    assert.equal(data.name, 'John Doe');
    assert.equal(data.email, 'johndoe@example.com');
})
.catch(error => console.error(error));
```


In conclusion, testers play a vital role in the software development process by helping developers to identify and fix bugs, improve the overall quality of the code, and ensure that the application is functioning as expected. 

Developers should value the contributions of testers and work closely with them to create high-quality software that meets the needs of users.


