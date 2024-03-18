---
title: "The paradigm of Quality - Built-In"
header:
  image: /assets/images/2023/04/paradigm_built_in/DALL-E-Infinity-symbol.png
  teaser: /assets/images/2023/04/paradigm_built_in/DALL-E-Infinity-symbol.png
  caption: "Photo credit: DALL·E"
permalink: "/post/the-paradigm-of-quality-built-in.html"
authors:
- Alejandro Sanchez Giraldo
- ChatGPT
- Github Copilot
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

## The paradigm of Quality - Built-In

In our previous article, "[The paradigm of Quality](/post/the-paradigm-of-quality.html)" and "[The paradigm of Quality - Embedded](/post/the-paradigm-of-quality-embedded.html)", we discussed different maturity models and why organizations may require an independent model of Quality Engineering. In this article, we will examine various aspects of Quality Engineering in an built-in model.

In today’s fast-paced digital world, businesses are under immense pressure to release high-quality products at lightning speed. The traditional process of developing software has been replaced by a more efficient approach called DevOps. However, even with the integration of DevOps practices like Continuous Integration and Continuous Deployment, ensuring quality remains a major concern.

This is where Quality Engineering comes into play. Quality Engineering is the practice of ensuring that software products meet predefined quality standards throughout the development process. It takes a proactive approach to identify potential issues early in the software development lifecycle, making it an essential part of the DevOps culture.

The goal of this article is to take a comprehensive look at how we can built-in Quality Engineering in the development process and its role in the DevOps culture. 

By the end of this article, you’ll have a better understanding of Quality Engineering and its importance in delivering successful products quickly and efficiently. Let's dive in!

## What is DevOps?

![DEVOPS](/assets/images/2023/04/paradigm_built_in/DALL-E-Infinity-symbol.png)

Photo by <a href="https://openai.com/product/dall-e-2">DALL-E</a>

As someone who's passionate about software development, I wanted to share my thoughts on DevOps.

DevOps culture refers to a set of practices, principles, and values which emphasizes the collaboration and communication between development and operations teams. It is a software development approach that aims to automate the software delivery chain while improving the quality of products and services provided by an organization. DevOps culture emphasizes continuous integration and continuous delivery (CI/CD), infrastructure as code (IaC), monitoring, testing, and analytics. By putting these principles into practice, organizations can achieve faster time-to-market, increased efficiency, better customer experience, and reduced costs. In this article, we will explore the importance of DevOps culture in modern software development and how it can help organizations achieve their goals efficiently.

In my view, DevOps is all about breaking down the barriers between development teams and IT operations teams, and promoting collaboration, communication, and shared responsibility. By working together more closely, these teams can deliver software and services faster and with fewer errors.

Of course, DevOps is not just a set of tools; it's also a cultural shift that requires organizations to adopt a mindset of continuous improvement and learning. With DevOps, organizations can automate processes, test early and often, and prioritize feedback and iteration.

In today's fast-paced, digital world, DevOps has become increasingly important. By enabling organizations to respond quickly to changing market conditions and customer needs, DevOps can help companies stay competitive and continuously improve their products and services.

That's just my take on DevOps, but I hope it helps you understand this exciting and rapidly-evolving field a bit better.

## Difference from Testing and Quality Engineering in a DevOps Culture

The [DORA (DevOps Research and Assessment)](https://cloud.google.com/blog/products/devops-sre/dora-2022-accelerate-state-of-devops-report-now-out) report from Google identifies several key differences between testing and quality engineering in a DevOps culture. Here are a few of the key differences:

Scope: Testing typically focuses on the functional correctness of individual features or components, while quality engineering focuses on end-to-end system quality, including non-functional aspects such as performance, security, and scalability.

Timing: Testing typically occurs towards the end of the development cycle, while quality engineering is integrated throughout the entire development process, from design to deployment.

Automation: Testing is often highly automated, with a focus on creating and executing tests that can quickly identify defects. Quality engineering also involves automation, but with a focus on automating processes and workflows to improve efficiency and reduce errors.

Collaboration: Testing is often a separate function from development, while quality engineering is integrated into the development process and requires collaboration between development, testing, and operations teams.

Metrics: Testing often focuses on measuring defects found and fixed, while quality engineering focuses on measuring system quality and operational metrics such as uptime, mean time to recover, and customer satisfaction.

The difference between testing and quality engineering in a DevOps culture is that testing focuses on ensuring individual features are functionally correct, while quality engineering focuses on ensuring the entire system is of high quality, reliable, and meets customer needs. Both are important in a DevOps culture, but quality engineering is becoming increasingly important as organizations look to improve their overall software development processes and outcomes.


## How to build-in Quality Engineering in a DevOps Culture

Quality Engineering is a set of practices that help organizations ensure that software products meet predefined quality standards throughout the development process. It takes a proactive approach to identify potential issues early in the software development lifecycle, making it an essential part of the DevOps culture.

During my career I was able to work in different organizations and I have seen how Quality Engineering can be built-in in a DevOps culture. Some of the practices that I have seen are:

- Product Owner for Quality: The Product Owner for Quality  is responsible for collaborating with teams to ensure that capabilities are built to uplift an organization's quality. This has been a successful practice in organizations that have a strong focus on quality and build ownership early in the SDLC process.

- Community Building: Building community with internal and external teams to drive quality as a common goal, this helps for people to understand each other pains and work on them together.

- Metrics: Metrics to drive data-driven decisions, build scorecards for each team, and measure the success of their quality initiatives. Having a clear metric allows teams to understand where the best value can be delivered.

- Tooling: Building tools to enable self-service for quality capabilities, this helps teams to be more autonomous and reduce the dependency on other teams.

These capabilities demonstrate a strong focus on building quality into the SDLC process, including both technical and non-technical aspects such as community building, metrics, transparency, and accountability.

## Conclusion

![Community](/assets/images/2023/04/paradigm_built_in/DALL-E-community.png)

Photo by <a href="https://openai.com/product/dall-e-2">DALL-E</a>

In this article, we discussed the importance of Quality Engineering in a DevOps culture and how it can help organizations achieve their goals efficiently. We also explored the difference between testing and quality engineering in a DevOps culture and how they can be built-in in a DevOps culture.

But most important we hihglighted the importance of the mindset shift required and how it changes our approach at Quality. Building quality into the SDLC process is a journey and it requires a strong focus on building capabilities into the SDLC process, including both technical and non-technical aspects.


This article was written in collaboration with [ChatGPT](https://chat.openai.com/chat) and [Github Copilot](https://copilot.github.com/).

