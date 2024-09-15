---
title: "Say hello to `Multiple` : New Performance testing tool"
header:
  teaser: /assets/images/2024/04/multiple/multiple_teaser.png
permalink: "/post/new-performance-testing-tool-multiple.html"
search : false
date: 2024-04-06
authors: 
  - Millan Kaul
categories:
  - blog
  - tools
tags:
  - performance testing
  - Shift-Left
  - Test automation
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


I recently came across this potentially game-changing performance testing tool called **MULTIPLE**


> _Multiple is a load test platform built for developers. With a few lines of JavaScript, you can create and run scalable load tests, observe the results in real-time, and easily share them with your team._
<br><br>
_...from [multiple.dev](https://docs.multiple.dev/introduction)_

<br>

![MULTIPLE company logo](/assets/images/2024/04/multiple/multiple_logo.png)
<figcaption align = "center">MULTIPLE logo</figcaption> 

<br>


**In this blog I will cover**

1. [Introduction to multiple.dev](#introduction)

2. [My research 🔍](#my-research)

3. [What's the selling point? 🧐](#whats-the-selling-point)

4. [Usage - What to expect](#usage---what-to-expect)

5. [Show me the code!👨‍💻](#show-me-the-code)

6. [Good to know things](#good-to-know-things)

7. [Final Verdict 📣](#final-verdict)


# Introduction

[Multiple.dev](https://www.multiple.dev/) looks promising in what I see redefining the approach to performance testing. Let's dive into its features, capabilities, and potential of Multiple.dev, exploring whether it's the revolutionary tool we've been waiting for.

Let me quickly give you an overview of Multiple.dev's followed by some cool performance testing tool features it offers.

With some cool and innovative features it comes with a user-friendly, web based, interface **Yes a website.!**

`Performance testing experience that we haven't seen so far.`


## My research


I did a short research and found that Multiple took off [Multiple's Signup is Live!](https://www.multiple.dev/blog/multiple-is-live) on December 7, 2023 and started with an idea to solve three challenges with existing tools, on the lines of :

1. Limited scripting capabilities. XML or GUI-based scripting can only test basic scenarios...

2. Cannot use existing libraries or code. Instead of forcing you to learn a new system and rewrite code, Multiple leverages the JavaScript and `NPM` ecosystem.... _**<< my favourite**_ ❤️

3. Tedious infrastructure management....



## What's the selling point?

Multiple state that with them you can:

- Write load tests with Javascript and `NPM` packages; no proprietary tools or config files.
- Works with almost any service, database, and protocol out of the box, including Kafka, EC2, MongoDB, Redis, and gRPC.
- Managed infrastructure lets you spin up large load tests in seconds without setting up and tearing down your own cloud resources.
- It’s easy to share tests and test results with your team.



## Usage - What to expect


As per their [Quick Start Guide](https://docs.multiple.dev/quick-start-guide) after creating account you will learn:

- **Create new test** : The first step is to create a new test.
- **Write test spec** : The next step is to write your load test. Initialize > configure vus > run (dry run) > clean up.
  - You can set the environment variables using dotenv.
- **Run load test** : Start actual test.
- **View results** : You can view any previously run load tests. 
  - Export data


![Sample run result from multople.dev](/assets/images/2024/04/multiple/multiple_result_graph.png)
<figcaption align = "center">Sample run result</figcaption> 

## Show me the code!


As I mentioned earlier my :heart: works with custom `NPM` packages.

like how simple it is to use `faker-js` library, that's why I see it game changer.


This model allows users to use a basic version of the software for free, but they may need to pay for additional features or to unlock higher usage limits.

```javascript
// faker for generating synthetic data
import { faker } from '@faker-js/faker';

class LotsOfChatMxTestSpec {
  npmDeps = {
    '@faker-js/faker': '7.6.0',
  };

  async vuInit(ctx) {
    ....
    // Log in as a user and get a JWT
    const res = await ctx.axios.post('login', {
      email: `user@email.com`,
      password: 'password',
    });
  }

  async vuLoop(ctx) {
    // Send a POST request to the chat endpoint 
    // with a random message
    await ctx.axios.post('chat', {
      // Generate synthetic data with faker
      message: faker.lorem.paragraph(),
    });

    // Send a GET request to the chat endpoint
    await ctx.axios.get('chat');
  }

}
```

# ++

It supports `dotenv` **Environment Variables** 

```bash
# Base URL for the API
API_BASE_URL=https://www.qualitywithmillan.github.io
```


## Good to know things


Multiple does not have a CLI option as of 6th April 2024.
I have no doubt that it would be in their top list of priorities as they claim their product to be dev-centric. 

⬆️ This specific option to run tests usin CLI makes the tool CI friendly.

If you have been following my blog, you would remember I also wrote about another performance testing tool `k6`  :

- <a href="/post/2024/01/k6-with-real-time-performance-monitoring-with-web-dashboards.html" title="k6 - web dashboards + HTML report 📊" target="_blank">k6 - web dashboards + HTML report 📊</a>  early this year and

- A **memorable example** in <a href="/post/how-to-shift-left-without-writing-code.html" title="How to Shift-Left without writing Code" target="_blank">How to Shift-Left without writing Code</a> back in June 2023


back to multiple, worth sharing that Multiple is not [open source like k6](//todo mk ); it's freemium [see pricing](https://www.multiple.dev/pricing)


<br>

![Pricing page on MULTIPLE website](/assets/images/2024/04/multiple/multiple_pricing.png)
<figcaption align = "center">Pricing - multiple.dev</figcaption> 

<br>


## Final Verdict

While choosing the right performance testing tool is always a tricky decision to make, what I see here is Multiple.dev brings a fresh perspective and a host of innovative features to the table. Multiple's potential to revolutionize performance testing is undeniable. 

> _Load Testing as a service using the full JavaScript and `NPM` Package ecosystem. No proprietary languages, unfamiliar paradigms, or complicated cloud configurations._
<br><br>
~By: multiple.dev


I can't wait to see what multiple team has planned to build, I appreciate how modern tools are solving complex and historic problem statemets. I would wait for to explore CLI option and may be open Community Support page.

But the question still remains open.
**Could Multiple.dev be the revolutionary tool we've been waiting for..❓**

maybe the answer lies in exploring it's capabilities and discovering how it fits into your orgnizations performance testing strategy.

Why not give it a go 🚀 

Do let us know if you decided to give it a try by sharing your experience and taging [@Quality With Millan](https://www.linkedin.com/company/quality-with-millan)



<br>
<br>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">

Want to learn more❓
<br> 
Follow [Quality With Millan](https://www.linkedin.com/company/quality-with-millan) or <a href="https://www.linkedin.com/shareArticle?url=https://qualitywithmillan.github.io{{ page.url }}&title=I+came+through+this+awesome+blogs+on+%0A%23QualityWithMillan" title="I came through this awesome blogs on #QualityWithMillan" target="_blank">Share it on LinkedIn</a>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">
