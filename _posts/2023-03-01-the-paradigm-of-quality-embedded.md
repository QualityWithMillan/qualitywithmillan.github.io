---
title: "The paradigm of Quality - Embedded"
header:
  image: /assets/images/sylvain-mauroux-WI8phMvAEMI-unsplash.jpg
  teaser: /assets/images/sylvain-mauroux-WI8phMvAEMI-unsplash.jpg
  caption: "Photo credit: Unplash"
permalink: "/post/the-paradigm-of-quality-embedded.html"
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

## The paradigm of Quality - Embedded

In our previous article, "[The paradigm of Quality](/post/the-paradigm-of-quality.html)", we discussed different maturity models and why organizations may require an independent model of Quality Engineering. In this article, we will examine various aspects of Quality Engineering in an embedded model.

Quality Engineering is crucial for organizations that strive to deliver high-quality software products to their clients. However, it can be challenging to establish a Quality Engineering practice that integrates into the software development life cycle.

In an embedded Quality Engineering model, the Quality Engineering team collaborates with development teams to ensure that quality is built into the software from the beginning. By being embedded in the software development process, the Quality Engineering team can better understand the development environment, identify areas for improvement, and help the team to deliver quality software products.

In this article, we will discuss the different aspects of an embedded Quality Engineering model, such as the role of the Quality Engineering team, the importance of test automation, and the significance of continuous integration and delivery. We will also explore how an embedded Quality Engineering model can benefit organizations and help them to achieve their goals.

Join us in the next section as we delve deeper into the world of embedded Quality Engineering and learn how to build a successful Quality Engineering practice that delivers high-quality software products.

![Agile](/assets/images/eden-constantino-agile-unsplash.jpg)


## History

In 2001, we saw a significant leap in technology that changed the way we work and communicate. The introduction of Windows XP was a major milestone, offering improved stability, security, and multimedia capabilities for personal computers. It made computing more accessible to a wider audience and provided a platform for the next generation of software applications. Additionally, the rise of the internet and the advent of broadband connectivity enabled people to access information and services from anywhere in the world, revolutionizing the way we learn, communicate, and conduct business.

It was also a turning point in the technology industry, with several groundbreaking advancements that changed the way we interact with digital devices. The introduction of the iPod revolutionized the way we listen to music, with its intuitive interface and massive storage capacity. We also saw the debut of Mac OS X, a powerful and versatile operating system that laid the foundation for many of the innovations that we enjoy today. And of course, we cannot forget the launch of the first-ever Apple retail store, which created a whole new way for customers to experience and purchase technology products. These developments marked a significant step forward in the evolution of technology and helped to shape the digital world we know today.

In the space of software delivery, the Agile Manifesto was published in 2001, which laid the foundation for the Agile software development methodology. The manifesto was written by a group of software developers who wanted to create a more efficient and effective way of developing software. The manifesto outlined four core values that would guide the development of software: 

- individuals and interactions over processes and tools
- working software over comprehensive documentation
- customer collaboration over contract negotiation
- responding to change over following a plan.

## People over process - Embbed the QA

<hr>

![People](/assets/images/sylvain-mauroux-WI8phMvAEMI-unsplash.jpg)

<hr>


Agile brought about significant changes to software delivery, particularly in the area of team structures and the value placed on individual perspectives. By emphasizing the importance of cross-functional teams and promoting collaboration between team members, Agile has encouraged a more inclusive and dynamic approach to software development. Additionally, Agile has underscored the value of listening to and incorporating the insights and feedback of individual team members, thereby fostering a more democratic and effective approach to delivering high-quality software.

Let's look closer at just some of the skills required by an Agile Tester in 2001:

- Familiarity with Agile methodologies: The Agile Tester would need to have a good understanding of Agile principles and methodologies, including the Agile Manifesto and its associated values and principles.

- Collaboration and communication: As Agile development emphasizes collaboration and communication between team members, the Agile Tester would need to be an effective communicator, able to work closely with other team members and share insights and feedback.

- Test automation: With the need to rapidly and iteratively develop and test software, the Agile Tester would need to be proficient in test automation tools and techniques to help ensure timely and accurate testing.

- Continuous integration and deployment: The Agile Tester would need to be familiar with continuous integration and deployment practices, including automated builds, testing, and deployment, to ensure that software is delivered quickly and efficiently.

- User experience (UX) testing: As Agile development is focused on delivering high-quality software that meets user needs, the Agile Tester would need to have an understanding of user experience testing and be able to identify opportunities for improvement.

- Technical skills: The Agile Tester would need to be familiar with technical aspects of software development, such as software design, coding practices, and database management, to effectively work with developers on identifying and resolving issues.

- Analytical and problem-solving skills: The Agile Tester would need to have strong analytical and problem-solving skills to identify and resolve issues in a fast-paced, iterative environment.

These are just some examples of the skills that an Agile Tester in 2001 might have needed. As Agile methodologies have evolved over the years, the specific skills and tools required by Agile Testers have also evolved, with a greater focus on areas such as DevOps, security testing, and more advanced automation and testing techniques.



This article was written in collaboration with [ChatGPT](https://chat.openai.com/chat) and [Github Copilot](https://copilot.github.com/).

