---
title: "7 most used util and helper methods in test automation project"
header:
 # image: /assets/images/2023_04_06_automation_utils.png
  teaser: /assets/images/2023_04_06_automation_utils.png
  caption: "Screenshot of REHL ( redhat OS with postman)"
permalink: "/post/most-commonly-used-methods-in-test-automation.html"
date: 2023-04-06
authors:
- Millan Kaul
categories:
  - blog
tags:
  - testing
  - automation
  - code
  
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


Why another blog with code snippet for test automation ?

**TL;DR**

This blog is not a theory chapter, direct **code** so go ahead and `copy - paste` and enjoy. All code snipets are in `JavaScript`.

... **let's get started.**


![Image depecting household tool to depict similarity between test automtion utils methods and helper fucntions](/assets/images/2023_04_06_automation_utils.png)
Image credits: [Vijay Verma](https://www.linkedin.com/in/realvjy/)

 

<br>

------

<br>

## 1. Function to Assert Response Status Code:

Check **Expected** vs **Actual** `status code` in your `API` response.

> Make sure you set up [axios](https://www.npmjs.com/package/axios) or simply run `npm i axios`

```javascript
function assertStatusCode(response, expectedStatusCode) {
  if (response.status !== expectedStatusCode) {
    console.error(`Expected status code: ${expectedStatusCode}, Actual status code: ${response.status}`);
    throw new Error(`Response status code mismatch. Expected: ${expectedStatusCode}, Actual: ${response.status}`);
  }
}
```


## 2. Function to Send a GET Request:

```javascript
const axios = require('axios');
async function sendGetRequest(url, headers = {}) {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`Failed to send GET request to ${url}:`, error);
    throw error;
  }
}
```

## 3. Function to Send a POST Request:

> Make sure you set up [axios](https://www.npmjs.com/package/axios) or simply run `npm i axios`

```javascript
const axios = require('axios');

async function sendPostRequest(url, data, headers = {}) {
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error(`Failed to send POST request to ${url}:`, error);
    throw error;
  }
}

// Example usage
const apiUrl = 'https://api.domain.com/users';
const postData = { name: 'FirstName', age: 30, email: 'FirstName@domain.com' };
const requestHeaders = { 'Content-Type': 'application/json', Authorization: 'Bearer <your_auth_token>' };

const responseData = await sendPostRequest(apiUrl, postData, requestHeaders);
console.log(responseData); // Print the response data
```

💡 **Bonus tip** - For `PUT Request` change above code to have `axios.put()` instead `axios.post()` of and perhaps rename `sendPostRequest` to `sendPutRequest`. So something like this :

<br>

```javascript
async function sendPutRequest(url, data, headers = {}) {
..
await axios.put(url, data, { headers });
..
```

some more util specific : ↘️

<br>

## 4. Function to Compare Three 3️⃣  Strings:

```javascript
function compareStrings(string1, string2, string3) {
  if (string1 === string2 && string2 === string3) {
    return true;
  } else {
    return false;
  }
}
```

usage

```javascript
const string1 = 'quality';
const string2 = 'millan';
const string3 = 'millan';

const result = compareStrings(string1, string2, string3);
console.log(result); // Prints false, since string2 and string3 are not equal to string1

```

<br>


## 5. Function to Convert ISO Time to Local Time Zone:

```javascript
function convertIsoToLocaleTime(isoTime, timeZone) {
  const date = new Date(isoTime);
  const options = { timeZone };
  return date.toLocaleString('en-US', options);
}
```

*This function takes an ISO time string and a time zone as input, and returns the equivalent local time in the specified time zone.* 

For example:

```javascript
const isoTime = '2023-04-07T10:30:00Z';
const timeZoneCanada = 'America/Toronto';
const timeZoneAustralia = 'Australia/Sydney';

const localTimeCanada = convertIsoToLocaleTime(isoTime, timeZoneCanada);
console.log(`Local time in Canada: ${localTimeCanada}`);

const localTimeAustralia = convertIsoToLocaleTime(isoTime, timeZoneAustralia);
console.log(`Local time in Australia: ${localTimeAustralia}`);
```

<br>


## 6. Check if a string contains another string (substring):

```javascript
function stringContainsSubstring(str, substring) {
  return str.includes(substring);
}
```
Use it using :

```javascript
const originalString = 'Quality With Millan';
const substring1 = 'quality';
const substring2 = 'without';

console.log(stringContainsSubstring(originalString, substring1)); // Prints true
console.log(stringContainsSubstring(originalString, substring2)); // Prints false
```

<br>


## 7. Function to Assert Response JSON Schema:

**This function can be used to assert that the response data matches a given JSON schema, and throw an error if the validation fails.**


```javascript
/** ajv : https://www.npmjs.com/package/ajv
 *JSON validator for Node.js and browser.
*/
const Ajv = require('ajv');

function assertJsonSchema(response, schema) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(response.data);
  if (!isValid) {
    console.error(`JSON schema validation failed: ${ajv.errorsText(validate.errors)}`);
    throw new Error(`Response JSON does not match the expected schema`);
  }
}
```

<br>

Copy paste > save time and have fun with test automation !! 🙌


### Follow this hash tag [#QualityWithMillan](https://www.linkedin.com/feed/hashtag/qualitywithmillan/)

