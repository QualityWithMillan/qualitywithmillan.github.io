---
title: "Plus Ca Change in Test Automation"
header:
  # image: /assets/images/co-author/paul-maxwell-walters.png
  teaser: /assets/images/co-author/paul-maxwell-walters.png
permalink: "/post/co-author/paul/plus-ca-change-in-test-automation.html"
date: 2023-01-20T18:00:00-00:00
authors:
- Paul Maxwell-Walters
categories:
  - blog
tags:
  - testing
  -
  
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

There is a **Test Automation LinkedIn group** I have been a member of for a few years. Members mostly post marketing posts, job ads and dubious polls, however interspersed with them are occasional questions about the practice of test automation.

<br>

This week a member posted the following poll -

<br><br>



> “Do you think Manual Testers will Extinct Soon?” (sic) - True? False?

<br><br>



Reading this sent me to the edge of a fit of despair - not because I actually think “**Manual Testers**” will somehow “_extinct_” themselves but because it is the return to a nonsensical debate that I heard at testing conferences and read online at the start of my testing career in the late 2000s - at least 14 years ago. 

However despite what the automation tool vendors and evangelists may have wanted to happen since then, manual testing (_typically deemed to be testing by not programming the browser or UI to interact with itself or some tool to send off API requests and check responses automatically_) is a long way from being dead. 

Many teams throughout the world <ins>do not test using automation</ins> - that doesn’t mean that they are failing or unsuccessful in their roles. 

Much of my career has been involved in purely manual testing work. 
Even in places where test automation is mature and widespread, **testers still spend much time manually testing**, analysing and reporting on products - such that if you were not <ins>skilled enough to test without automation</ins>, you would be found out quickly.


<br><br>


Another thing I have noticed is a rise in posts and blogs evangelising test automation as a brand new concept (“_Have you heard about test automation and how it will revolutionise your QA? etc_”). 
I saw one advertising a book, with the tagline “**_Life is Too Short for Manual Testing_**”. 
If that were the case, I should start looking for a new career or find a way to win the lottery since I doubt I will be absolving myself of all manual testing any time soon. 😊😂

<br><br>

One example I saw <ins>this week</ins> is a post with the headline “**Are you ready for the future of QA?**”. 


It then described how _test automation_ is “_on the verge of impulse growth_” and that 
“automation is becoming increasingly important in the QA industry.. companies that are able to take advantage of automation tools will have a significant advantage over their competitors”...


<br><br>


Those who have been testers for any length of time will know that test automation - and people (vendors, evangelists, test automation consultants or people looking for clickbait) proselytising test automation have been around for decades. 

We already know (_or at least should_) what it is, what it can do and where it is applicable. 

Kaner, Bach and Pettichord’s “**Lessons Learned in Software Testing**” had a whole chapter devoted to it - equally as fresh and relevant now as it was then - and that was published in **2002**. 

James Bach’s brilliant, seminal critique of the promises of test automation and the reckless assumptions used to justify them, “_Test Automation Snake Oil_” was written back in **1999**. 
However the next generation comes along and makes the same promises hoping we have forgotten, for the same deleterious outcomes.

<br><br>


One of the big testing buzzwords, `codeless automation`, has had a renaissance in the last few years - promising quick and easy test case creation and execution across environments without the need to learn any of that messy `coding` stuff, with a whole suite of competing proprietary products vying for our testing budgets.

There are also a plethora of AI-powered test frameworks that can **smart** recognise UI components that have changed, ostensibly making tests more robust, less brittle. 
Similarly, _**record-and-playback**_ tools for generating tests, deemed an antipattern as early as **2002**, never took off in the industry - however they returned in later versions of Selenium IDE. 

<br><br>


Of course there is a place for them in the market however this experiment <ins>was tried more than ten years ago</ins> with tools that promised smart UI object recognition and an IDE to _create tests without the need to code_, such as TestComplete and HP UFT - yet the industry moved away from them to newer, more basic `open source frameworks` like `Selenium`. 
It seems that having to learn to code to implement our own `test automation` **for free** (although it was never for free and failures were costly) wasn’t such a burden for us after all. 
Fixating on these also mask the genuine innovations that have arrived in more recent automation, such as visual UI comparison tools and tools for data creation and automating API and security checks.

<br><br>

> **Test Automation, like fashion, works in ever shrinking concentric circles.**

<br><br>


Interestingly the test automators, who may have gloated to see <ins>fears of manual testing being made redundant by test automation</ins> in years past, have recently had their own bout of schadenfreude. 
Numerous articles, blog posts and linkedIn posts have risen speculating about the chatbot model `chatGPT`, showing `code` and sample test cases generated by the tool and making spurious claims and hand wringing that this will put (_typically UI_) test automation devs out of work. 

Nevertheless, the authors failed to figure out (_or at least ignored it_) that there is a **huge difference** between generating easy specimen code for trivial purposes in already existing public websites (_like entering text and clicking search in the Google homepage, the closest we have to a UI automation_ **“Hello World”**) and what we actually have to do - study designs and requirements, prioritising work, deciding what to automate, setting up environments, creating test data, writing complex frameworks, dealing with brittle tests, integrating them into CI/CD pipelines, reporting our work meaningfully, logging bugs, working with devs, managing testing projects, contributing to dev teams…


<br><br>


Those who really think that AI tools are imminently about to replace either manual or automated test practitioners neither understand AI, testing or software development.

<br><br>


AI will have a role to play **but** it will replace us when it replaces all of software development, which is no time soon. 

`Copying and pasting code` from `chatGPT` is about as useful currently as pasting code from `Stack Overflow` or any of the numerous tutorial articles written in the last decade. 
Fears of the <ins>end of writing test automation</ins> are greatly exaggerated. 

However chatGPT can churn out some quite convincing generic and bland tech blog articles, so I would suggest that the authors of the above should be more worried about themselves.

**We need to collectively** decide on what we want from automation in testing and put our efforts towards the future, not the past.