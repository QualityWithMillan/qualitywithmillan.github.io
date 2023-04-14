---
title: "The paradigm of Quality - Optimised"
header:
  image: /assets/images/optimised-quality.png
  teaser: /assets/images/optimised-quality.jpg
  caption: "Photo credit: Dreamlike Diffusion"
permalink: "/post/the-paradigm-of-quality-optimised.html"
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

## The paradigm of Quality - Optimised

As we come to the last series of the paradigm of quality, we will be looking at the last maturity stage of the quality maturity model. This maturity stage is called Optimised, and it is the highest level of maturity in the quality maturity model. The Optimised maturity stage is characterized by a culture of quality that is deeply ingrained in their operations. They are committed to continuous improvement, customer satisfaction, data-driven decision-making, employee empowerment, and strong leadership.

![The Class](/assets/images/optimised-quality.png)

Photo by <a href="https://huggingface.co/dreamlike-art/dreamlike-diffusion-1.0">Dreamlike Diffusion</a>

There are several frameworks of Optimised Quality maturity and the 2 main characteristics:

- Focus on employee empowerment and continuous improvement. This trait highlight the trust from leadership enabling teams to make decisions and take actions to improve the quality of the product.

- Enabling and coaching services to help teams improve their quality. This trait highlight the importance of coaching and training to help teams improve their quality.

### History on optimised quality

Throughout my journey to grasp the paradigm of quality, I delved into various resources, such as attending conferences and Meetups, and reading articles. These resources provided me with valuable insights into the concept of Optimised Quality, which is the highest level of maturity in the quality maturity model. By exploring different ideas and concepts, I was able to develop a better understanding of how quality has evolved over time and the key characteristics of organisations that have achieved Optimised Quality.

My first encounter with the concept of Optimised Quality was around 2015 when I was working as a QA Lead at a Media services company. I was part of a team that was responsible for the quality of the company’s digital system after a major transformation where they had adopted a DevOps culture. The company had a strong focus on quality and was committed to continuous improvement. They had a strong leadership team that was committed to empowering their employees and providing them with the necessary tools and resources to succeed. 

One of the primary challenges we faced was that the teams needed to be agile and lean, which meant that traditional models of quality assurance were not suitable for the new culture. As part of my research, I discovered that Atlassian had already started adopting a more Optimised approach to quality, which was well-suited for their agile and DevOps culture.


![The Assistant](/assets/images/QAssist.png)

Photo by <a href="https://huggingface.co/dreamlike-art/dreamlike-diffusion-1.0">Dreamlike Diffusion</a>


The model was called [Quality Assistance](https://web.archive.org/web/20171107033938/https://www.atlassian.com/inside-atlassian/software-QA-skills), and  was revolutionary because it challenged traditional notions that quality was best handled externally or separate from teams responsible for implementing change. Instead, Quality Assistance is driven by educating, inspiring, and facilitating quality within the team. This new model represents a significant shift in how quality is approached, as it emphasizes the importance of embedding quality practices and principles throughout the software development lifecycle.

Since then Atlassian has continue to modify they way they do work, and have even publish their onw [Ways of Working Playbooks](https://www.atlassian.com/team-playbook)

Fast forward to 2019, COVID hit and I was working as Principal Quality Engineer at an Aviation company. I was trying to adopt Quality Assistnace models, but found it difficoult to do in a large Enterprise with a lot of legacy systems and regulations.

I found my self looking for an other employeer and introduce an opportunity to explore other ways of working. I was lucky enough to find a company that was looking to change their ways of working and started a Role as a Test Innovation Manager. This role was a new role in the company and I was able to introduce new ways of working and new tools to help the teams improve their quality.

![The Coach](/assets/images/QualityCoach.png)

Photo by <a href="https://huggingface.co/dreamlike-art/dreamlike-diffusion-1.0">Dreamlike Diffusion</a>



I discovered that my role as a QA Lead was aligned with that of a [Quality Coach](https://www.annemariecharrett.com/). In this role, I led a team of Quality Engineers who were responsible for coaching and developing tools to help other teams improve their quality practices.

This experience inspired me to learn more about the concept of Optimised Quality and how to implement it effectively in organizations of varying sizes. I learned that there are several frameworks for achieving Optimised Quality maturity, and that there are many paths that organizations can take to reach this level of quality excellence.


## Why do I call it Optimised Quality?

After researching various quality frameworks, I found that the models that resonated with me the most were those that emphasized continuous improvement and employee empowerment, with a focus on optimizing processes for greater efficiency while maintaining high quality standards.

These models placed a strong emphasis on building a culture of quality and continuous improvement within organizations, and recognized the critical role of leadership in driving this change. By fostering a culture of collaboration and innovation.

It is Optimised Quality because this maturity stage in the quality maturity model represents the highest level of quality excellence an organization can achieve. At this stage, the organization has optimized its quality practices and processes to ensure that quality is embedded in every aspect of its operations.

Empowering

The focus on employee empowerment and continuous improvement is a key characteristic of the Optimised Quality maturity stage in the quality maturity model. This approach is founded on the belief that the employees closest to the work are in the best position to identify opportunities for improvement and take action to achieve it.

To achieve this, the leadership team of an organization must establish a culture of trust, collaboration, and innovation. The leadership must provide employees with the necessary tools, resources, and training to enable them to make informed decisions and take actions to improve quality.

In such an environment, teams are encouraged to experiment with new ideas and approaches to achieve improved quality outcomes. They are also empowered to work closely with other teams to identify and address issues and improve the overall quality of the product or service.

By fostering a culture of continuous improvement and employee empowerment, organizations can achieve a sustained improvement in their quality outcomes, ultimately leading to greater customer satisfaction and organizational success.

Coach and support

Enabling and coaching services to help teams improve their quality is another critical characteristic of the Optimised Quality maturity stage in the quality maturity model. This approach recognizes that quality improvement is an ongoing process that requires continuous learning and development.

To achieve this, organizations should provide coaching and training services to their teams. These services should be designed to help teams develop the necessary skills, knowledge, and tools to identify and address quality issues effectively.

Coaching and training services may take various forms, such as classroom training, on-the-job coaching, mentoring, and peer-to-peer learning. These services should be tailored to the specific needs of each team and should be aligned with the organization's overall quality improvement goals.

By providing coaching and training services to their teams, organizations can empower their employees to take ownership of quality improvement and drive continuous improvement throughout the organization. This approach also helps to build a culture of quality within the organization, where everyone is committed to delivering high-quality products and services to customers.

### Section 3 - how to be optimised

## Conclusion


This article was written in collaboration with [ChatGPT](https://chat.openai.com/chat) and [Github Copilot](https://copilot.github.com/).

