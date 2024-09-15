---
title: "Importance of Test Data - with code example"
header:
  teaser: /assets/images/2024/09/test_data/data.jpg
  og_image: /assets/images/2024/09/test_data/data.jpg
permalink: "/post/test-data-generation-in-test-automation.html"
search : true
date: 2024-09-14
authors: 
  - Millan Kaul
categories:
  - blog
tags:
  - Automation
  - Shift-Left
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

Information used to verify the functionality and performance of a software application.

<p><img src="/assets/images/2024/09/test_data/data.jpg" alt="image-left" class="align-left" alt="Image showing a word cloud featuring DATA" /> There are vaiours way and definition to explain Test Data, I picked up the above definition for this blog.</p>

<span style="font-size:0.5em;">Image credits: [www.epictop10.com](https://www.flickr.com/photos/182229932@N07/)</span>

*Example: An e-commerce website testing may require `test data` such as product listings, user accounts, orders, and payment details to ensure all shopping, checkout, and payment processes.*

## Why Test Data management is important

1. **Consistency and reliability:**
Ensures tests are repeatable under the same conditions.
   - *Example:* **(e.g)** Running regression tests after each deployment to an e-commerce site to ensure no new bugs are introduced.

2. **Comprehensive testing:**
Identifies hidden bugs with varied test data, including edge cases.
- **e.g:** Testing a banking application with various transaction types, amounts, and currencies to cover all possible scenarios.

3. **Efficiency:**
Reduces setup time for tests, leading to faster development cycles.
   - **e.g:** Automating nightly test runs for a social media platform to quickly identify and fix issues.

4. **Compliance and security:**
Maintains data protection and prevents sensitive data exposure.
   - **e.g:** Masking user personal information while testing a healthcare application to comply with data privacy laws.

## 4 Top tricks for effective Test Data management

| # | Trick | Explanation | Example |
| - | ------| ----------- | ------- |
| 1 | **Data masking**    | Protects sensitive information while using realistic data. | Masking credit card numbers in a payment processing |
| 2 | **Synthetic data**  | Generates fake but realistic data.  | Creating synthetic user profiles for a customer relationship management (CRM) system.  |
| 3 | **Version control** | Tracks changes in test data over time.  | Using Git to manage test datasets for a financial reporting application. |
| 4 |**Automated data generation** | Uses tools to generate data dynamically. | Creating user login data for a content management system (CMS) load testing. |

<hr>

## Real-Life example: Payment transactions

Let me give you a practical example by generating sample test data for payment transactions using TypeScript:

```typescript

//npm i @faker-js/faker

import { faker } from '@faker-js/faker';

interface Transaction {
  id: string;
  amount: number;
  currency: string;
  date: Date;
  status: string;
  customerId: string;
}

const generateTransaction = (): Transaction => {
  return {
    id: faker.datatype.uuid(),
    amount: parseFloat(faker.finance.amount(10, 1000, 2)),
    currency: faker.finance.currencyCode(),
    date: faker.date.recent(),
    status: faker.helpers.arrayElement(['completed', 'pending', 'failed']),
    customerId: faker.datatype.uuid(),
  };
};

// Generate a list of transactions
const generateTransactions = (num: number): Transaction[] => {
  return Array.from({ length: num }, generateTransaction);
};

console.log(generateTransactions(10));
```

Which would generate transactions like :

```json
// sample json response
[
  {
    "id": "a6a65d7b-23c8-4c6c-94a1-7b0a0b2d7f0e",
    "amount": 378.45,
    "currency": "USD",
    "date": "2024-09-14T14:33:54.927Z",
    "status": "completed",
    "customerId": "d6e95d6c-0731-45b8-9b7e-29b062c3f5ed"
  },
  {
    "id": "b4c5c8e4-5158-45b9-9db8-32e6a9d8a3de",
    "amount": 529.78,
    "currency": "EUR",
    "date": "2024-09-14T18:22:37.432Z",
    "status": "pending",
    "customerId": "f5a4b7c9-d8e5-45ea-a4a8-1dfe31b1a2cf"
  },
  {
    "id": "c8f1d8e3-9b7c-49e8-9f5c-8e6a9d8a3d4e",
```

## Remember

Automating test data generation can enhance not only efficiency but also accuracy. Essentially leading to better test coverage for complex test data dependent scenario for the applications under test.

<br>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">

Want to learn more❓
<br> 
Follow [Quality With Millan](https://www.linkedin.com/company/quality-with-millan) or <a href="https://www.linkedin.com/shareArticle?url=https://qualitywithmillan.github.io{{ page.url }}&title=I+came+through+this+awesome+blogs+on+%0A%23QualityWithMillan" title="I came through this awesome blogs on #QualityWithMillan" target="_blank">Share it on LinkedIn</a>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;"> 