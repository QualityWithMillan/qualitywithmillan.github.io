---
title: "Is Open Banking just another API❓"
header:
  image: /assets/images/ob_graph_criteria.png
  teaser: /assets/images/ob_hero.png
  caption: "Openbanking vs API ( search Trends — Google )"
permalink: "/post/Open-banking-just-another-api.html"
date: 2023-01-01T09:00:00-00:00
authors:
- Millan Kaul
categories:
  - article
tags:
  - openBanking
  - banking
  - api
  - CDR
  - dataSharing
  - fintech
  - finance
  
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

If you follow fintech news, banking news or similar streams you most probably have come across these buzzwords `#API`  `#OpenBanking`  `#CDR`  `#dataSharing` …


![Gooogle search trends Openbanking vs API in 2021](/assets/images/ob_graph_criteria.png)
<figcaption align = "center">Openbanking vs API ( search Trends - Google ) as of 2021</figcaption> 

Before we try to understand **"Is Open Banking just another API ?"** . 

It is really important that we understand the difference and relation between both.
Here is my attempt to explain it in the easiest possible way that I could…

<br>

### "API" ( Application Programming Interface)
This term was first coined even before 1968.. as per wiki its simplest possible definition goes ..

> API is an interface that defines interactions between multiple software applications or mixed hardware-software intermediaries.
To make it simple for you: Just think of an API as an language interpreter who can make two different people talk to each other… and that's the skill of an interpreter or you can say that's the beauty of APIs.


<br>

### Open Banking

It's a relatively younger term, [first used in 2015](https://en.wikipedia.org/wiki/Open_banking#History) . 

_As per investopedia.com …_

> Open banking also known as "open bank data." Open banking is a banking practice that provides third-party financial service providers open access to consumer banking, transaction, and other financial data from banks and non-bank finincial institutions through the use of APIs

Let's take an example of **Australia**, a legislation was passed on <ins>26 November 2017</ins> to implement Open banking which has been generalised and rather called as [Consumer data right (CDR)](https://www.accc.gov.au/focus-areas/the-consumer-data-right).

The reason being, in future the data rights of consumer will apply to sectors other than banking such as energy, telecommunications…
So with that background , let me ask this question again:

<br>

### Is Open Banking just another API ?


![Data analysis form Google trends](/assets/images/ob_graph_man.png)
<figcaption align = "center">Data analysis form Google trends (pic: unDraw)</figcaption> 


Answer is **Yes** and **No** both !

**No** : Because API is a very vast team and open banking is just one of its several use case.
<br>

**Yes** : Open Banking is a collection of new APIs.
As per [data from Google Trends](https://trends.google.com/trends/explore?cat=37&q=open%20banking,api) this is how the web search has surged in Banking for last 12 months worldwide


![Fig: Result as per search criteria with filters](/assets/images/ob_graph_criteria.png)
<figcaption align = "center">Fig: Result as per search criteria with filters</figcaption> 


![Description on how the interest over the time has changed in searches](/assets/images/ob_desc_time_changed.png)
<figcaption align = "center">Description on how the interest over the time has changed in searches</figcaption> 


# Worldwide - country wise this is how it looks



![Fig: Global search trends](/assets/images/ob_global_trends.png)
<figcaption align = "center">Fig: Global search trends</figcaption> 

The Interesting thing in this complete new game of banks getting to expose data using APIs. Banks sharing the data on request of customers ( after taking their consent) is going to revolutionise the market as it's just not banks obliged to share data "only with other banks" but to any third party or fintech if they have user consent.

<br>

There are new players in the market specially new fintech lead by banking industry leaders who are taking this perfect opportunity to innovate and work with either banks or users to make most use of the Data Sharing a.k.a OpenBanking.

**There are may use cases for that, for example:**

- Banks with limited infrastructure capability are reaching out to fintechs and startups to help them build their developer portal, expose banking APIs and more..

- Companies using data build new and easy tools to compare banking products across banks, just imaging with capability of API, you get to know cheapest Residential Mortgage with lowest fees in less than a minute , does that sound fast ?

- A payment startup offering you the best rates on a savings account just by accessing transaction data from two different accounts as per your consent ?

- There are more such innovative ideas which are yet to unfold.


I personally ended up building a fitbit app. **yes a fitbit watch app** ! 

A app that displays the following banking products offered by selected Australian banks. 
Which means while you walk you can see product name and description/offering within seconds.

- 💰 Transaction and Savings Accounts
- 💳 Cards
- 🏠 Mortgage (residential)

<br>

### my Bank-AU - fitbit app


![Fitbit app my Bank-AU](/assets/images/ob_fitbit_my-bank-au.png)
<figcaption align = "center">Image : Fitbit app my Bank-AU</figcaption> 

 
<div markdown="0"><a href="https://gallery.fitbit.com/details/5cc641b2-86d5-4962-97f1-e39a7a83165b" target="_blank" class="btn btn--info">Download Now</a></div>

<hr>

![Fitbit my Bank-AU app display sample](/assets/images/ob_image_gif.png)
<figcaption align = "center">Fitbit my Bank-AU app display sample - GIF</figcaption> 


<hr>

Hope you enjoyed my attempt to clarify that API and Open Banking are not same but related terms. 👍️

> Originally published at my LinkedIn account on Jun 11, 2021.



