---
title: "The API Automation framework I wish I had known sooner"
header:
  teaser: /assets/images/2025/02/api-auto-ts-types.png
permalink: "/post/api-automation-using-typescript-types-at-scale.html"
search: true
date: 2025-02-22
authors: 
  - Millan Kaul
categories:
  - blog
tags:
  - engineering
  - api-testing
  - testing-at-scale
  - cicd
  - type-script
  - readme
  - quality engineering
seo:
    title: "A practical how-to guide to build a clean and trustworthy API automation framework from scratch: MVP"
    description: "Build a robust, scalable, and type-safe API automation framework using Playwright and TypeScript. Learn how to validate API responses, create smart test scripts, and maintain clear documentation for efficient testing at scale."
    type: article
---

### 🚀 Type-Safe API Testing: A Playwright + TypeScript Framework 


<br>
Building a <u>fast, reliable and scalable</u> API automation framework requires more than just writing tests. It’s about maintaining stability, enforcing best practices plus keeping everything developer-friendly.  

Here’s how I scaled API testing using Playwright + TypeScript and structured a framework which -   

⦿ Ran hundreds of API tests in 7.5 mins on GitHub pipelines.
⦿ Used typed API responses for fail-safe assertions.
⦿ Built short-commands in `package.json` scripts for smart test execution.
⦿ Maintained a clear and easy-to-follow README file.  

---  

## 🛠 Setting Up a Solid Playwright API Automation Framework

### 1️⃣ Using TypeScript for API Response Validation

One of the biggest issues in API automation is unexpected API response changes. If a key is missing, null, or the data type changes, we must catch it early instead of debugging failures later.  

Here’s how we map API responses to TypeScript interfaces and validate them:  

#### Define a Type for API Response  

" It's all about **TYPE's** if it's `TypeScript`" --- _Unknown_

```typescript
export interface UserResponse {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
```

#### Fetch & Validate Response Using Playwright  

```typescript
import { test, expect, request } from '@playwright/test';
import { UserResponse } from '../types/userTypes';

test('Validate API Response with TypeScript', async ({ request }) => {
    const response = await request.get('/api/users/1');
    expect(response.status()).toBe(200);

    // Parse response as JSON
    const responseBody: UserResponse = await response.json();

    // TypeScript will catch errors if response format changes
    expect(responseBody.id).toBeDefined();
    expect(typeof responseBody.name).toBe('string');
    expect(responseBody.email).toContain('@');
    expect(responseBody.isActive).toBeTruthy();
});
```

🔹 Why? If `id` changes to a string or `isActive` becomes null, TypeScript will throw a type error before the test even runs. Less debugging, more confidence!  

---

### 2️⃣ Smart `package.json` Scripts for Flexible Test Runs  

Instead of running complex CLI commands, we defined shortcuts in `package.json`:  

#### `package.json` Script Configuration
```json
"scripts": {
  "test": "npx playwright test",
  "smoke": "npx playwright test --grep @smoke",
  "regression": "npx playwright test --grep @regression",
  "login": "npx playwright test --grep @login",
  "critical": "npx playwright test --grep @critical",
  "api": "npx playwright test --grep @api",
  "report": "npx allure generate allure-results && npx allure open"
}
```

### 💡 How This Helps?
- 🏃 Run only Smoke tests → `npm run smoke`
- 🚀 Trigger full regression → `npm run regression`
- 🔥 Execute critical tests only → `npm run critical`
- 📊 Generate Allure report → `npm run report`

---

### 3️⃣ Clear & Easy-to-Follow README.md

A good README ensures anyone (even in different time zones) can set up & run tests without confusion.  

#### 📄 Sample README.md

```md
# 🚀 API Automation with Playwright & TypeScript  

Repository: http://github.com/qualitywithmillan

## 📌 Setup Instructions

### 1️⃣ Install Dependencies
Ensure you have Node.js and npm installed:  
`npm install`

### 2️⃣ Install Playwright
`npx playwright install`


### 3️⃣ Run API Tests

| Command              | Description                        |
|----------------------|------------------------------------|
| `npm run test`       | Runs all tests                     |
| `npm run smoke`      | Runs smoke tests (@smoke)          |
| `npm run regression` | Runs full regression (@regression) |
| `npm run login`      | Runs login tests (@login)          |
| `npm run critical`   | Runs critical tests (@critical)    |
| `npm run report`     | Generates & opens Allure Report    |


### 4️⃣ Viewing Reports
Run: `npm run report`

This will generate a "detailed Allure report" with test execution insights.  

## 🔗 Need Help?
For any questions or issues, reach out via:  
📧 Team Email: `team-support@example.com`
💬 Slack Channel: `#api-automation`

---

### 🙏 Thank You!
We appreciate your time in setting this up. Happy Testing! 🚀  
```

```yml
#.github/workflows/playwright.yml
name: API Testing 

on:
  pull_request:
    branches: [ "main" ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm install
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run all Playwright tests
        run: npx run test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

---

So, just by structuring API automation correctly, using TypeScript for type-safe API responses as well as leveraging smart scripts & documentation, we can:  

✅ Build a clean & stable framework.
✅ Ensure high reliability & developer trust.
