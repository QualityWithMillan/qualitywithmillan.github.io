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

It was also a turning point in the personal gadgets industry, with several groundbreaking advancements that changed the way we interact with digital devices. The introduction of the iPod revolutionized the way we listen to music, with its intuitive interface and massive storage capacity. We also saw the debut of Mac OS X, a powerful and versatile operating system that laid the foundation for many of the innovations that we enjoy today. And of course, we cannot forget the launch of the first-ever Apple retail store, which created a whole new way for customers to experience and purchase technology products. These developments marked a significant step forward in the evolution of technology and helped to shape the digital world we know today.

In the space of software delivery, the [Agile Manifesto](https://agilemanifesto.org/) was published in 2001, which laid the foundation for the Agile software development methodology. The manifesto was written by a group of software developers who wanted to create a more efficient and effective way of developing software. The manifesto outlined four core values that would guide the development of software: 

- individuals and interactions over processes and tools
- working software over comprehensive documentation
- customer collaboration over contract negotiation
- responding to change over following a plan.

##  Role of the Quality Engineering team

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


##  Evolution of executable documentation - integrating documentation and test automation

Agile development emphasizes the importance of delivering working software to customers as early as possible, with the aim of getting feedback and incorporating it into the development process. This approach is known as the "build-measure-learn" cycle, which involves building a working version of the software, measuring its performance, and learning from the feedback to improve the software.

The challenge with this approach is that it requires a high level of collaboration between team members, as well as a high degree of transparency and communication. This is because the team needs to be able to quickly identify and resolve issues, and to incorporate feedback from customers and other stakeholders into the development process. In order to achieve this, the team needs to be able to share information and insights with each other, and to work together to resolve issues and deliver high-quality software.

Working software was a critical outcome of agile development. Executable documentation, such as Behavior Driven Development (BDD), emerged as a way to ensure that software met business requirements. BDD was a collaborative approach that involved developers, quality engineers, and stakeholders in the creation of a shared understanding of the expected behavior of the software. By using a common language, such as Gherkin, teams created executable specifications that could be automated and used as tests. BDD also helped teams to identify and prioritize the most critical scenarios and to avoid scope creep. As a result, BDD improved software quality, reduced rework, and increased stakeholder satisfaction. BDD also helped with the evolution of the software by making it easier to maintain and update the tests as the software changed. By combining BDD with continuous testing and delivery, teams ensured that the software remained aligned with business needs and delivered value to users.

Cucumber was a tool that emerged to tackle the challenge of creating executable documentation, particularly in the context of Behavior Driven Development (BDD). Cucumber allows teams to write executable specifications in plain language, using a Gherkin syntax that is easily understandable by all stakeholders. These specifications can be used as tests and automated using various testing frameworks. Cucumber also provides a framework for generating reports that show the results of tests and highlight any discrepancies between the expected and actual behavior of the software. By using Cucumber, teams can ensure that the software meets the business requirements and is aligned with the expectations of all stakeholders. Cucumber also helps teams to identify and prioritize the most critical scenarios, collaborate effectively, and reduce the risk of defects. By using Cucumber in conjunction with other agile practices such as continuous testing and delivery, teams can ensure that the software is of high quality, remains aligned with business needs, and delivers value to users.

Unfortunately, from my experience, many people misused the tool, turning it into a burden for teams. Instead of using the tool to create executable documentation, it was often used to write scripts. As a result, the tool lost its effectiveness and became a source of confusion for the team. To avoid this, it is important to ensure that all team members are properly trained in what BDD is and the benefits of executable documentation. 


One of my absolute favorite articles is [Specification by Example: A Love Story](https://alisterbscott.com/wp-content/uploads/2021/08/Specification-by-Example-a-love-story.pdf); this article provides a vivid illustration of the four stages in which their tests evolved from scripts into living documentation. It resonates with many people and businesses, and effectively highlights the consequential differences between each stage.

## significance of continuous integration and delivery. 

TODO //

## Maturing from independent to Embedded

<hr>

![Maturing](/assets/images/suzanne-d-williams-VMKBFR6r_jg-unsplash.jpg)

Photo by <a href="https://unsplash.com/de/@scw1217?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Suzanne D. Williams</a> on <a href="https://unsplash.com/photos/VMKBFR6r_jg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
<hr>

Throughout my career, I have been fortunate to have been given opportunities to grow and evolve with the software testing industry, thanks to supportive leads. However, not everyone has the same fortune, which is why I believe it's important to share some key takeaways that have helped me mature in an embedded model of quality. These takeaways include:

- Attend Agile ceremonies, even when not on the team:

  - By attending Agile ceremonies such as daily stand-ups, sprint reviews, and retrospectives, you can gain a deeper understanding of how Agile processes work and the challenges faced by teams.
  - Attending Agile ceremonies also allows you to build relationships with team members and demonstrate your interest in and commitment to the team's success.
  - This can lead to opportunities to collaborate with Agile teams, providing valuable experience and exposure to Agile methodologies and practices.

- Take risks and learn new tools, even if you did not use them afterward:

  - Trying out new tools and technologies, even if they are not ultimately used, can help you stay current with the latest trends and advancements in the industry.
  - Experimenting with new tools can also lead to insights and solutions that can be applied to other projects.
  - This mindset of continual learning and growth is highly valued in the software testing industry and can set you apart as a valuable asset to any team.

- Experiment with processes:

  - By taking the initiative to experiment with new processes, you can uncover more efficient and effective ways of working and identify areas for improvement.
  - This approach can also demonstrate your leadership and problem-solving skills, as you take ownership of your work and seek out opportunities to make positive changes.
  - Of course, it's important to communicate your plans and progress with your team and seek feedback and support along the way to ensure the best possible outcome.


## Conclusion

In this article, we have explored the evolution of software testing and the role of the Agile Tester. We have also looked at some key takeaways that can help you grow and evolve as a software tester. I hope you have found this article useful and that it has provided you with some valuable insights and inspiration for your own career.

To gain further insights on how you can progress and enhance your abilities as a software tester, consider the following resources and individuals that I have personally found valuable in expanding my skillset. Here are some of the resources that I have found most helpful:

### Resources

- [Anne-Marie Charrett](https://www.linkedin.com/in/testingtimes/): Anne-Marie  is a prominent figure in the field of Quality Coaching in Australia. Her online subscription service is a great resource for anyone looking to enhance their understanding of quality coaching methodologies. You can find more information on her subscription servic [here](https://www.annemariecharrett.com/tag/book/).

- [TAU](https://testautomationu.applitools.com/) also know as Testing automaiton University. Is a great resource for anyone looking to learn more about test automation.

- [Software Testing for Serious People](https://www.satisfice.com/): This is a great resource for anyone looking to challenge their current understanding of software testing.


This article was written in collaboration with [ChatGPT](https://chat.openai.com/chat) and [Github Copilot](https://copilot.github.com/).

