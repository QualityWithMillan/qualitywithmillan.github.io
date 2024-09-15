---
title: "How to Shift-Left without writing Code 👩‍💻"
header:
  teaser: /assets/images/2023/06/shift_Left/shift-left.png
  caption: "How to Shift-Left without writing Code "
permalink: "/post/how-to-shift-left-without-writing-code.html"
date: 2023-06-03
authors:
- Millan Kaul
categories:
  - blog
tags:
  - shift-left
  - qualityAndTesting
  - collaboration
  - EarlyFeedback
  
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

<hr>

From one of my connection [Dennis Nyawira](https://www.linkedin.com/in/gituto/) on this [LinkedIn Post](https://www.linkedin.com/feed/update/urn:li:activity:7068990608341635072)

> I'm talking about "Shift-Left Testing" - not just a phrase, but a mindset. This is us, saying "**Hapana**" to last-minute testing hassles and "**Karibu**" to integrating QA right from the start of our development process.
 
<br><br>
For this post, I will keep the definition of `shift-left` or `Karibu` as:
<br>

> Think of `shift-left` as the _practice_ of "emphasizing early involvement in various aspects of the development process to deliver high-quality software."


I will share the best practices _from my personal experience_ and success stories ⭐️⭐️⭐️⭐️⭐️ on "How we can achieve that without writing code or getting involved in code writing" (unit tests, mock tests, etc.) 

I have made my best effort to limit this post to selected sections to save both our time, focusing only on proven pointers 🎯.

<br><br>

![shift-left](/assets/images/2023/06/shift_Left/shift-left.png)
Image credits : vijay verma 🙌🏼

<br><br>

In this article, I will share four _simple techniques_ that will allow you to experience and implement `shift-left` practices firsthand, without needing to write code.

<br>

- [Collaborating with Designers](#collaborating-with-uiux-designers)
 
- [Managing Multi-Vendor Expectations](#managing-and-setting-multi-vendor-expectations-and-delivery-plan)

- [Contributing to Architecture Design Decisions](#involvement-in-platform-and-architecture-design-decisions)
 
- [Early Feedback & Culture Change](#early-feedback-through-cultural-and-mindset-changes)


<br><br>

## Collaborating with UI/UX Designers

If your work involves front-end development, such as mobile apps, web apps, internal portals, or technical interfaces, it is essential to identify the design team or your user experience (UX) colleague and actively engage with them as soon as they start gathering requirements.

Your involvement can take the form of a casual coffee chat, one-on-one sessions, or joining their requirement gathering meetings as a silent listener. 
By working closely with designers, you gain an early platform to share your experience-based feedback, which can be immensely valuable. 

Many system design defects can be identified and resolved during this phase, preventing them from becoming production bugs in the future.

⭐️ _Example from my own experience:_ ⭐️ 
A few years back, I was working on a banking project where a new product was being developed that included a fancy fund transfer feature. 
Our UX team had done a great job designing it. However, once I started actively collaborating with them, 

I realized that they hadn't considered transfers from joint accounts. 
Questions arose about whether multi-person approval was required, if this feature needed to be excluded, and the special reporting and auditing requirements for joint accounts as per banking regulations (in this case, specific to Australia). 

By raising these considerations early on, we were able to address them and avoid potential issues down the line.

The **second** technique ⏩

<br><br>

## Managing and Setting Multi-Vendor Expectations and Delivery Plan

In today's fast-paced software development landscape, companies often leverage existing products or engage multiple partners (vendors) to integrate various components. As a non-technical professional, you can play a crucial role in managing expectations and creating a cohesive delivery plan in such scenarios.

Acting as a bridge between vendors, you can facilitate communication, align goals, and ensure a shared understanding of project requirements. By addressing potential conflicts and streamlining collaboration, you can save valuable time and prevent delays in delivery and testing phases.

⭐️ _Here's how I have successfully managed multi-vendor projects in the past:_ ⭐️

I have employed a documentation-driven approach. By creating detailed documentation and inviting all stakeholders to review and provide their feedback. 
That way we were able to ensure clarity and consensus on project requirements. 

This iterative process of reviewing and incorporating corrections helped eliminate potential misunderstandings and minimized back-and-forth communication later in the project. 

As a result, we achieved smoother collaboration, reduced delays, and improved overall efficiency in the development process.


Next, **third** technique  ⏩

<br><br>

## Involvement in Platform and Architecture Design Decisions

Remember, even if you're not writing code, you can still actively participate in design decisions to contribute to the shift-left approach.

Engage with stakeholders, particularly the development team, during the early stages of a project to provide your perspective on design choices. 

Ensure factors such as usability and scalability are given due consideration. 

By doing so, you can help shape the direction of the product, ensuring it aligns with business objectives and requirements. 
Your early involvement allows for the identification and rectification of potential issues, ultimately reducing the cost of fixing them later.

⭐️ _Here's a memorable example:_ ⭐️

I once worked on a pure API project where the development team was highly skilled. However, they had designed everything assuming that only one API would be accessed at a time. I had to intervene and inform them that I would be running a parallel load test using k6 with at least 500 users, which would likely expose the limitations of their design. To address this, I suggested implementing a smart solution such as queuing (using SQS) or utilizing async/await functionality. 
By providing this insight early on, we were able to address scalability concerns and avoid potential performance issues.


Last one 👇🏼 for this post.

<br><br>

## Early Feedback through Cultural and Mindset Changes:

While I have touched upon this point earlier, I would like to provide some specific advice if you are planning to introduce shift-left practices to your team for the first time.

Always start actively seek opportunities to provide early feedback on prototypes, wireframes, and mockups. 
Don't hesitate to share your insights on user experience, visual design, and functionality. 
Become an advocate for quality in the product you are building.

That way you achieve clear alignment within the team. 👈

<br><br>

⭐️ Remember, _shift-left is not just a methodology_; it **requires a cultural and mindset change**. ⭐️

- It should be approached iteratively. 
- Your early feedback empowers the team to make informed decisions, leading to a more refined end product.


By embracing this cultural shift, you encourage a collaborative and proactive approach to development. 
It fosters a sense of ownership and responsibility among team members, ultimately leading to improved quality and customer satisfaction 🙌🏼 .

<br><br> 

Make a note of these **keywords** to remember this post : 
<br>

`#️⃣ Collaboration`

`#️⃣ UXDesign`

`#️⃣ MultiVendorManagement`

`#️⃣ ArchitectureDecisions`

`#️⃣ EarlyFeedback`



<br><br>
I'm sure you have something new and even better than my top _**How to Shift-Left without Writing Code 👩‍💻**_  techniques. 

I invite you to share your ideas and experiences in thread under this post: [On LinkedIn : How to Shift-Left without Writing Code](https://www.linkedin.com/posts/millankaul_how-to-shift-left-without-writing-code-activity-7071208899739070464--fIw)

Follow my hash tag [#QualityWithMillan](https://www.linkedin.com/feed/hashtag/?keywords=qualitywithmillan) for more posts and Quality updates.
