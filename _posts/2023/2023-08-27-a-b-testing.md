---
title: "A/B Tetsing - in 5 steps"
header:
  feature: /assets/images/2023/08/a-b-testing-feature.jpg
  teaser: /assets/images/2023/08/a-b-testing-teaser.png
permalink: "/post/a-b-testing.html"
date: 2023-08-27
authors:
- Millan Kaul
categories:
  - article
tags:
  - testing
  - usertesting
  - alpha
  - beta
  
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

### So waht is A/B tetsing ?

> "A/B testing" is a shorthand for a simple randomized controlled experiment, in which a number of samples (e.g. A and B) of a single vector-variable are compared 
~ from [Wiki](https://en.wikipedia.org/wiki/A/B_testing#Overview)

Also known as bucket testing, split-run testing, or split testing. It is a user experience research methodology where randomized experiment usually involves two variants (A and B).

GOLA 🎯 Determining which of the variants is more effective.

I will explain to you **A/B testing** process in 5 steps - for continuous testing and improvement.



!["Image showing 5 key point for A B tetsing"](/assets/images/2023/08/a-b-testing-feature.jpg){: .align-center}

<hr>

Follow these 5 steps in sequence :

1. [𝗗𝗲𝗳𝗶𝗻𝗲 g𝗼𝗮𝗹](#-𝟬𝟭-𝗗𝗲𝗳𝗶𝗻𝗲-g𝗼𝗮𝗹-𝗰𝗼𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻--)
2. [𝗕𝗿𝗮𝗶𝗻𝘀𝘁𝗼𝗿𝗺/g𝗲𝗻𝗲𝗿𝗮𝘁𝗲 I𝗱𝗲𝗮](#-𝟬𝟮-𝗕𝗿𝗮𝗶𝗻𝘀𝘁𝗼𝗿𝗺g𝗲𝗻𝗲𝗿𝗮𝘁𝗲-𝗱𝗲𝗮-%EF%B8%8F)
3. [𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 c𝗵𝗮𝗻𝗴𝗲𝘀](#-𝟬𝟯-𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁-c𝗵𝗮𝗻𝗴𝗲𝘀-)
4. [𝗖𝗿𝗼𝘄𝗻 𝘁𝗵𝗲 n𝗲𝘄 c𝗵𝗮𝗺𝗽𝗶𝗼𝗻 ](#-𝟬𝟰-𝗖𝗿𝗼𝘄𝗻-𝘁𝗵𝗲-n𝗲𝘄-c𝗵𝗮𝗺𝗽𝗶𝗼𝗻-)
5. [𝗧𝗲𝘀𝘁 it](#-𝟬𝟱-𝗧𝗲𝘀𝘁-it-)

<br> 
<hr>


### 🔷 𝟬𝟭 𝗗𝗲𝗳𝗶𝗻𝗲 g𝗼𝗮𝗹 (𝗰𝗼𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻) 🏹... 🎯

Before your create a test, your need to know what, exactly, you’re hoping to accomplish.

A gola can be :

▸ Increasing click-through rates

▸ Boosting sales

▸Improving user engagement


A well-defined goal means focus and direction for your experimentation that's Aaa-Bee test.

> Real life example 🎯 : Goal to increase product page conversion rate from 2% to 5% within 3 months.

<br> 
<hr>


### 🔷 𝟬𝟮 𝗕𝗿𝗮𝗶𝗻𝘀𝘁𝗼𝗿𝗺/g𝗲𝗻𝗲𝗿𝗮𝘁𝗲 !𝗱𝗲𝗮 🤔🗯️

Once you’ve determined a goal you want to accomplish, you’ll need to generate ideas by use of qualitative and quantitative data to identify potential areas for improvement or innovation.

> Real life example 🎯 : Analyzing user feedback and heatmaps to identify friction points in the checkout process.

<br> 
<hr>


### 🔷 𝟬𝟯 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 c𝗵𝗮𝗻𝗴𝗲𝘀 🔄

You will be need to implement changes with highest potential, intuition and best practices.
Maybe develop and execute variations of the original element, such as different headlines, layouts, or calls-to-action.

> Real life example 🎯 : Creating two versions of a website's homepage with different hero images and CTAs to test user engagement.

<br> 
<hr>


### 🔷 𝟬𝟰 𝗖𝗿𝗼𝘄𝗻 𝘁𝗵𝗲 n𝗲𝘄 c𝗵𝗮𝗺𝗽𝗶𝗼𝗻 👑

Once you’ve launched your test, you need to let it run for a long enough period of time. Basically compare the performance of the control and variant using statistical analysis to determine the winner. Here you can use tools such as LaunchDarkley, two test environments, free vs preemium user account.

> Real life example 🎯 : After running an A/B test on a e-commerce website, the variant with a prominent "Buy Now" button outperformed the control in terms of both click-through rate and conversion rate. The new design is implemented as the winner based on statistical significance.

<br> 
<hr>

### 🔷 𝟬𝟱 𝗧𝗲𝘀𝘁 it !

**𝗧𝗲𝘀𝘁 u𝗻𝘁𝗶𝗹 s𝘁𝗮𝘁𝗶𝘀𝘁𝗶𝗰𝗮𝗹𝗹𝘆 s𝗶𝗴𝗻𝗶𝗳𝗶𝗰𝗮𝗻𝘁**

By this point, you’ve set a goal, select a page and determine what you want to test. However I would suggest to keep running the test until you achieve statistically significant results to ensure reliable conclusions or reach the goal you would have set above (#1)


!["Image showing A B tetsing example"](/assets/images/2023/08/a-b-testing-exampl.jpg){: .align-center}

> Real life example's 🎯 : 

▸  __Examlpe 1 :__ A website's A/B test showed inconclusive results initially. After increasing the sample size, the variant's higher click-through rate became statistically significant.

▸  __Examlpe 2 :__ A social media platform with two versions of a user sign-up form. The version with simplified form fields and clearer instructions resulted in a 15% increase in completed sign-ups over a month.

▸  __Examlpe 3 :__ A mobile app with two variations of its onboarding process. The version with a step-by-step tutorial had a 25% higher user retention rate after one week.

▸  __Examlpe 4 :__ An online news website with two variations of its headline font size. The version with larger font size increased the time users spent on the page by 10%.


▸  __Examlpe 5 :__ A website with two versions of its online forms, one with enhanced color contrast and larger fonts. The version with improved accessibility features resulted in a 15% decrease in form abandonment and a higher completion rate among users with visual impairments.

Hope these examples and overall blog would have provided you some insights into A/B testing. You can also tailor your experimentation strategy to your unique goals in your projects.


<hr>

Want to learn more❓ Follow my hashtag.[#QualityWithMillan](https://www.linkedin.com/feed/hashtag/?keywords=qualitywithmillan) on or just follow [me on linkedIn](https://www.linkedin.com/in/millankaul/)
