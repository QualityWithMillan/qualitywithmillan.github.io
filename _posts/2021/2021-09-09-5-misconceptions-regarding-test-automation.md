---
title: "5 misconceptions regarding Test Automation"
header:
  teaser: /assets/images/2021/09/five-misc/5-misconceptions.png
  caption: "Photo credit: [**Zan**](https://unsplash.com/@zanilic)"
permalink: "/post/5-misconceptions-regarding-test-automation.html"
date: 2021-09-09T18:00:00-00:00
authors:
- Millan Kaul
categories:
  - article
tags:
  - testing
  - automation
  
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


These are the top five things you should remember about software testing and quality assurance when it comes to **test automation**.

### TL;DR

[1. Automation can replace 100% manual testing](#1-automation-can-replace-100-manualtesting)

[2. Automation Testing is a rare and hard skill](#2-automation-testing-is-a-rare-and-hardskill)

[3. Automation makes your job easy ..easily](#3-automation-makes-your-job-easyeasily)

[4. More automation means less bugs](#4-more-automation-means-lessbugs)

[5. Manual testing is a dead skill, Test automation holds the future](#5-manual-testing-is-a-dead-skill-test-automation-holds-thefuture)




> A super quick background

I used to think that **_test automation_** is a some magical capability and 100% automation meant :

##### No more Bugs !

##### No more checks !!

##### No more manual Testing !!!

> Very soon did I realised, not only that I was mistaken but also wrong to a larger extent….

![a man showing his hand with five fingers to camera ](/assets/images/2021/09/five-misc/5-misconceptions.png)

<br/>


### Why ?

**Flash-back:** A decade ago somewhere around 2011. When software used to be released annually also called as **waterfall model**. ( _in some companies it still exists, depending on the nature of project such as long term Gov projects_ ).

I was a junior test engineer back then. And I always thought that one day I will get the chance, a golden chance to learn testing tools with hands on. And to change the world of software testing.

> Which meant: testing with tool that costs to the company. And only handful of senior engineers used to do test automation ( HP QTP) or performance testing (Load Runner).

Well I did it. I mean not **_change the world_** kind of thing but in next few years I got hands on with :

  
```ruby
1. Web using selenium Java

2. Mobile using Appium

3. REST API with Hibernate, newman in CI..

4. Performance testing with LR/K6  
```  

_and many more…._

It was exciting and I really enjoyed the learning phase _( I still do...)_

But with my experience I realised many things that I understood early were proving me wrong.

### With that said here are the top “5 misconceptions on test automation”

#### 1. Automation can replace 100% manual testing

Handful of companies can run test automation in production. Few due to limitation of test data and some due to legal and compliance . So you usually do testing manually.

For example if you are a part of banking project, you login to bank account ( web/app ) using your own account.

\# _Do you run automation in such cases ?_ **_NO_**

#### 2. Automation Testing is a rare and hard skill

> ..the average adult human brain has the ability to store the equivalent of _2.5 million gigabytes_ digital memory. Reference [this](https://www.cnsnevada.com/what-is-the-memory-capacity-of-a-human-brain/) article

While that is a Hard-disk comparison. If we talk about memorising power or computing, its much higher. At least much higher than test automation currently available. AI + Test automation would be an interesting future article.

I guess that argument is enough to cover the fact.

_\# Automation Testing is a rare and hard skill. ?_ **_NO_**

#### 3. Automation makes your job easy ..easily

**_May be yes_** only when it comes to **re-testing.** Regression testing.

But **NO** when:

*   We are building test automation framework itself
*   We are maintaining test frameworks
*   When test environments are not stable
*   When test data is a root issue.
*   When your projects needs more exploratory testing of new features.

So,

_\# Automation makes your job easy ..easily ?_ **_NO_**

#### 4. More automation means less bugs

This is a big one !

Usually such misconceptions surfaces from management expectation. Where everything is celebrated on percentage (%) of coverage rather than quality of coverage.

While having more and more automation is not a bad idea, But what if we have 100% automation and that covers zero (0) negative scenarios.

Once again unscripted testing such as exploratory testing is a best tool. With that you have the independence to test fast and get results on negative scenarios.

_\# More automation means less bugs_ **_NO_**

#### 5. Manual testing is a dead skill, Test automation holds the future

This will never happen and ideally this should not happen.

Over the time test first approach such as #TDD ( Test driven development) approach where:

*   You decide on a test ( business scenario)
*   Write a test first , which fails right away
*   Then you write development code to achieve it and mark as PASS ✅
*   Again you pick another test and develop..

Another great example is #accessibility testing of web and mobile apps.

Successful teams maintain the balance of trusted manual testers and automation testers. But remember manual testing has its own charm and why not , its a critical thinking skill.

_\# Manual testing is a dead skill, Test automation holds the future ?_ **_NO_** ❌

**Key takeaway :**

> Automation is a compliment to manual testing not a substitution !


<hr>
I originally posted this via my [medium](https://millankaul.medium.com/5-misconceptions-on-test-automation-2fa2c26385ec) account in Sep 2021 
