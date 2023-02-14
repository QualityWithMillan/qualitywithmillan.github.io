---
title: "The paradigm of Quality"
header:
  image: /assets/images/thinking-by-unsplash.jpg
  teaser: /assets/images/thinking-by-unsplash.jpg
  caption: "Photo credit: Unplash"
permalink: "/post/the-paradigm-of-quality.html"
authors:
- Alejandro Sanchez Giraldo
- ChatGPT
categories:
  - blog
tags:
  - Roadmap
  - Quality Engineering
  - Strategy
  - Maturity Assessment 
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

The paradigm of quality refers to the overall concept, philosophy, or approach to quality in a particular field or industry. It encompasses the beliefs, values, and practices related to quality, and it is shaped by the context in which it operates.

In general, the paradigm of quality can be characterized by the following principles:

- Customer focus: Quality is defined by the customer and their needs and expectations. The customer is the ultimate judge of quality, and quality efforts should be focused on meeting or exceeding customer requirements.

- Continuous improvement: Quality is an ongoing process, and continuous improvement is an essential aspect of the paradigm of quality. Organizations should strive to improve their quality processes and systems continuously to meet changing customer needs and to stay ahead of the competition.

- Total quality management: Quality is a company-wide responsibility, and everyone in the organization should be involved in quality efforts. This means that quality should be integrated into all aspects of the organization, from product design to customer service.

- Data-driven decision making: The paradigm of quality is based on data-driven decision making. Quality processes should be based on data and facts, and decisions about quality should be made based on data and analysis, rather than intuition or experience.

- Collaboration: Quality is a collaborative effort, and it requires the involvement and cooperation of all stakeholders, including customers, suppliers, employees, and management.

Overall, the paradigm of quality is an essential part of any organization's success, as it helps to ensure that the organization is delivering high-quality products and services that meet customer needs and expectations. By adopting a strong quality paradigm, organizations can improve their competitiveness, enhance customer satisfaction, and increase profitability.

<hr>

- What is quality?
- How can quality be measured?
- Does quality bring success to your business?

<hr>

![thinking](/assets/images/thinking-by-unsplash.jpg)
<figcaption align = "center">Photo on Unsplash</figcaption> 

<hr>

These are just a few questions you need to address as you try to implement quality within your organisation. But I ask you first, What is your definition of quality?

>The word quality either as an adjective or a noun is driven by the opinion of the observant.

For example, your software might be described as quality software due to the code coverage it possesses, others might think is based on how easy is it to maintain and is well documented, and others might even describe quality code as code that can be used by consumers quickly.

<hr> 

![istqb](/assets/images/istqb-levels.png)
<figcaption align = "center">From https://www.istqb.org</figcaption> 


<hr>

There are many standards and objective metrics that will help you measure the state of your code, but ultimately you can only achieve quality based on the definition of the success of your business.

<br>

I have worked in many industries, some of which success is defined by speed to market, and others are based on meeting certain industry standards, so how can you create a process or strategy to implement quality in your organisation?

<br>

First, you need to understand your organisation's definition of success, and the appetite to risk. These two pillars will drive the right implementation of quality and what steps are required to achieve such quality.

<br> 

Something I have been working on over the last few years is a set of maturity steps where you can understand the desired quality and how you can get there.

<hr>

- Independent
- Embedded
- Built In
- Optimised


![qe maturity](/assets/images/qe-maturity.png)

<hr>

I find the above describes the current ways teams are delivering quality, but I have a few questions for you:

>- Where is your current team?
>- Is my team at the right step?
>- How can I get to the right step?

<br>

There are several methods you can assess your stage 
of quality, [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) has been a popular assessment since 2000 and more recent [DORA state of DevOps](https://cloud.google.com/blog/products/devops-sre/dora-2022-accelerate-state-of-devops-report-now-out) are great ways to understand your software and code quality, but how can this encapsulate other areas that can drive quality, like Agile practices, team structures and operational quality?

In this series, we will explore together each of these steps, how I think we could assess our teams and what some of the technical and cultural changes need to get your team to a desired step.

<hr>

## Independent

<br>

Here's how independent software verification works:

- Requirements gathering: The verification team begins by gathering information about the software requirements and specifications. This includes the design documents, user manuals, and any other relevant information about the software's intended functionality.

- Verification plan: Next, the verification team develops a verification plan that outlines the steps and methods that will be used to evaluate the software. This plan includes a description of the testing techniques, the testing environment, and the schedule for conducting the tests.

- Test execution: With the verification plan in place, the verification team begins executing the tests. This may include functional testing, performance testing, security testing, and other types of testing as outlined in the verification plan. The team also creates test cases and scripts to validate the software's functionality and ensure that it meets the specified requirements.

- Reporting and documentation: After the tests are completed, the verification team creates a report that documents the results of the testing process. The report includes a summary of the test results, any issues that were identified, and recommendations for any necessary improvements.

- Final assessment: Based on the results of the testing process, the verification team provides a final assessment of the software's quality and functionality. If any issues were identified during the testing process, the verification team works with the software development team to address them before the software is released to the market.

### How to assess

Is your team doing the above? You would be surprised how many organisations continue to operate like this. Due to the agile and DevOps revolutions, many consider this is old fashion and has no place in the software industry.

The first part of any assessment is to be truthful on how you deliver quality in your organisation. If you are following a process, there is a reason for this, and it is important to understand why. Might be due to risk to an organisation or its customers.

Spend some time with your teams and check the below:

1. Are tests automated?
  - [ ] Yes
  - [ ] No

2. Are tests self-verifying?
  - [ ] Yes
  - [ ] No

3. Do you have a dedicated quality/test engineering team?
  - [ ] Yes
  - [ ] No

4. Do you need to wait for someone else to make decisions about the quality the team is shipping?
  - [ ] Yes
  - [ ] No

5. Does the team need to use multiple tools to track the delivery and quality of software?
  - [ ] Yes
  - [ ] No

These are just a few questions that can indicate where your team and organisation sit. Some open-source tools can help you in this journey, I find [devopsmaturity](https://devopsmaturity.atos.net/) by atos a great way to asses individual teams. 

If you're searching for an assessment that covers the entire organization, it's advisable to bring in an external team to assist. I've observed that many organizations that attempt to self-assess tend to encounter issues and never get a good results. These assessments are only valuable if they are conducted regularly to determine improvement progress.


This article was written in collaboration with [ChatGPT](https://chat.openai.com/chat)

