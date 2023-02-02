---
search : "false"
title: "The paradigm of Quality"
header:
  image: /assets/images/thinking-by-unsplash.jpg
  teaser: /assets/images/thinking-by-unsplash.jpg
  caption: "Photo credit: Unplash"
permalink: "/post/the-paradigm-of-quality.html"
date: 2023-02-01T00:00:00-00:00
authors:
- Alejandro Sanchez Giraldo
categories:
  - blog
tags:
  - Roadmap
  - Quality Engineering
  - Strategy
  
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

## The paradigm of Quality

<hr>

- What is quality?
- How can quality be measured?
- Does quality bring success to your business?

<hr>

![thinking](/assets/images/thinking-by-unsplash.jpg)
<figcaption align = "center">Photo on Unsplash</figcaption> 

<hr>

These are just a few questions you need to address as you try to implement quality with in your organisation. But I ask you first, What is your definition of quality?

<hr>

>The word quality either as an adjective or a noun is  driven by the opinion of the observant.

<hr>

For example, your software might be described quality software due to the code coverage it possesses, others might think is based on how easy is it to maintain and is well documented, others might even describe quality code as code that can be used by consumers quickly.

<hr> 

![istqb](/assets/images/istqb-levels.png)
<figcaption align = "center">From https://www.istqb.org</figcaption> 


<hr>
There are many standards and objective metrics that will help you measure the state of your code, but ultimately you can only achieve quality base on the definition of success of your business. I have worked in many industries, some of which success is defined by speed to market, and other are base on meeting certain industry standards, so how can you create a process or strategy to implement quality in your organisation?

<br>

First you need to understand you organisation definition of success, and the appetite to risk. These two pillars will drive the right implementation of quality and what steps are required to achieve such quality.

Something I have been working over the last few years is a set of maturity steps were you can understand the desired quality and how you can get there.

<hr>

- Independent
- Embedded
- Built In
- Optimised


![qe maturity](/assets/images/qe-maturity.png)

<hr>

I find the above describe the current ways teams are delivering quality, but I have a few questions for you:

>- Where is your current team at?
>- Is my team at the right step?
>- How can I get to the right step?

There are several methods you can assess your stage of quality, Joel Test has been a popular assessment since 2000 and more recent DORA state of DevOps are great ways to understand your software and code quality, but how can this encapsulate other areas that can drive quality, like Agile practices, team structures and operational quality?

In this series we will explore together each of this steps, how I think we could assess our teams and what are some of the technical and cultural changes need to get your team to a desired step.

<hr>

## Independent

Independent teams validate changes with either manual or automated test, automation is primitive and based on E2E journeys on flaky and expensive environments.

Here's how independent software verification works:

- Requirements gathering: The verification team begins by gathering information about the software requirements and specifications. This includes the design documents, user manuals, and any other relevant information about the software's intended functionality.

- Verification plan: Next, the verification team develops a verification plan that outlines the steps and methods that will be used to evaluate the software. This plan includes a description of the testing techniques, the testing environment, and the schedule for conducting the tests.

- Test execution: With the verification plan in place, the verification team begins executing the tests. This may include functional testing, performance testing, security testing, and other types of testing as outlined in the verification plan. The team also creates test cases and scripts to validate the software's functionality and ensure that it meets the specified requirements.

- Reporting and documentation: After the tests are completed, the verification team creates a report that documents the results of the testing process. The report includes a summary of the test results, any issues that were identified, and recommendations for any necessary improvements.

- Final assessment: Based on the results of the testing process, the verification team provides a final assessment of the software's quality and functionality. If any issues were identified during the testing process, the verification team works with the software development team to address them before the software is released to the market.

This process 