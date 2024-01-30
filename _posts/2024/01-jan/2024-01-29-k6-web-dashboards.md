---
title: "k6 - web dashboards + HTML report 📊"
header:
  feature: /assets/images/2024/01/01_overview.png
  teaser: /assets/images/2024/01/00_k6.png
permalink: "/post/2024/01/k6-with-real-time-performance-monitoring-with-web-dashboards.html"
date: 2024-01-29
authors:
- Millan Kaul
categories:
  - article
tags:
  - testing
  - automation
  - performance-testing
  - k6
  - html-reporting
  
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

> Imagine running a test and having the ability to visualize and monitor its results in real-time. That's exactly what the k6 web dashboard offers. As your test progresses, the dashboard provides a dynamic overview of the performance metrics observed by k6. This real-time feedback can be a game-changer, allowing you to identify and address potential reliability issues as they occur.

### K6

`k6' is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible. Read more at [what is k6](https://k6.io/docs/#what-is-k6)?

**Use cases of K6**
k6 users are typically Developers, QA Engineers, SDETs, and SREs. They use k6 for testing the performance and reliability of APIs, microservices, and websites. Common k6 use cases are:

- Load testing
- Browser testing
- Chaos and resilience testing
- Performance and synthetic monitoring

But this blog post is not related to that. **It is dedicated to the latest cool k6 feature** in release [v0.49.0](https://github.com/grafana/k6/releases/tag/v0.49.0). 

# ❤️ Free - real time web dashboards 📊 for performance monitoring with an option to save results as HTML report.


### What's New! in release `v0.49.0`

`k6` continues to stand out with its latest feature – a built-in web dashboard that takes real-time monitoring to a whole new level.

Let's jump straight to it.

`set K6_WEB_DASHBOARD=true` and then your k6 command, lets say `k6 run script.js` 

**Usual run results on command line**

!["Image showing port 5665 used as default for k6 web dashboards"](/assets/images/2024/01/tile.png){: .align-center}

-----

#### Web (HTML) Dashboards

There are mainly 3 tabs:

**1. Overview**

!["Image showing port 5665 used as default for k6 web dashboards"](/assets/images/2024/01/04_overview.png){: .align-center}

-----

**2. Timings**

!["Image showing port 5665 used as default for k6 web dashboards"](/assets/images/2024/01/04_Timings.png){: .align-center}

-----
**3. Summary**

This one is very close to what the `json` report result would usually look like

!["Image showing port 5665 used as default for k6 web dashboards"](/assets/images/2024/01/04_summary.png){: .align-center}

-----

<br /> 

### Configurable port for web dashbord

By default, the web dashboard is accessible on localhost port `5665`. 

!["Image showing port 5665 used as default for k6 web dashboards"](/assets/images/2024/01/01_port.png){: .align-center}

However, k6 is flexible, and you can customize the host and port according to your preferences. 
using `K6_WEB_DASHBOARD_PORT`	you can use your choice of port number to bind the web dashboard to.

-----


### HTML repport

This adaptability extends to features like `K6_WEB_DASHBOARD_EXPORT`. 
You can use that by specifying a filename to automatically export the `HTML test report` at the end of the test run.

> It's worth noting that the default value is empty, meaning the report isn't exported unless configured otherwise.

for example `K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js`

So enabling the web dashboard with `K6_WEB_DASHBOARD=true`. Simultaneously, specifying the export feature with `K6_WEB_DASHBOARD_EXPORT=html-report.html`, for HTML test report generation at the end of the test run.

-----




<hr>

Want to learn more❓ Follow my hashtag.[#QualityWithMillan](https://www.linkedin.com/feed/hashtag/?keywords=qualitywithmillan) on or just follow [me on linkedIn](https://www.linkedin.com/in/millankaul/)
