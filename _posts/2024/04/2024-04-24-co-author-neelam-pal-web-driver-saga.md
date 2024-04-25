---
title: "WebDriver Saga"
header:
  # image: /assets/images/2024/04/webdriver/
  teaser: /assets/images/2024/04/webdriver/webdriver-saga.jpg
permalink: "/post/web-driver-saga.html"
search : true
date: 2024-03-22
authors: 
  - Neelam Pal
categories:
  - blog
tags:
  - selenium
  - webdriver
  - Testing
---

<p>
 Written by -
{% if page.authors == nil or page.authors.size == 0 %}
   {{ page.author }}
{% else %}
    {% assign result = "" %}
    {% for author in page.authors %}
        {% if author != nil and author != "" %}
            {% if forloop.first %}
                {% assign result = author %}
            {% elsif forloop.last %}
                {% assign result = result | append: " and " | append: author %}
            {% else %}
                {% assign result = result | append: ", " | append: author %}
            {% endif %}
        {% endif %}
    {% endfor %}
    {% if result != "" %}
        <strong>{{ result }}</strong>
    {% endif %}
{% endif %}
</p>

<hr style="border: none; height:2px; background-color: #A9F1E4; position: relative;">

Once upon a time, there existed a powerful tool known as **WebDriver**, in software test automation
world of [Selenium](https://www.selenium.dev/documentation/webdriver) Its journey begins with method known as **`get(String url)`** , a magical journey that
navigated the **WebDriver** to distant URLs, opening the door to a grand adventure in testing.


Like a magician's wand 🪄 , the method **`sendKeys(CharSequence... keysToSend)`** cast a spell, sending
keystrokes to web elements, allowing testers to interact with input fields and forms with effortless
grace.


With a simple click 🖱️, the method **`click()`** invoked the element's click event, unleashing the power to
simulate user interactions and trigger button clicks and link navigations.


Ah, but the journey 🏞️ did not end there! The method **`getText()`** emerged as a beacon of truth, retrieving
the visible inner text of web elements, offering valuable insights for verification and assertion.


As our quest unfolded, **`findElement(By by)`** became our steadfast guide, leading us to the first web
element within the page using intricate locator strategies, while **`findElements(By by)`** expanded our
horizons, revealing a plethora of matching elements to explore and conquer.


Like a treasure map 🌎 , **`getAttribute(String name)`** unlocked hidden insights, revealing the secrets encoded
within the attributes of web elements.



> But amidst the glory, challenges emerged. 

The method **`isDisplayed()`** became our lantern in the
darkness, illuminating the visibility of web elements, while **`isEnabled()`** acted as a vigilant gatekeeper,
verifying the accessibility of interactive elements.

And so, **`isSelected()`** stood as our guide through the maze of checkboxes ☑️ and dropdowns, confirming the
user's choices with unwavering certainty. 😌


In moments of uncertainty, **`navigate().refresh()`** refreshed ♻️ our spirits, renewing the canvas of our testing
odyssey, while **`navigate().to(String url)`** charted a course to new lands within the same browser window.

When unexpected perils arose, **`switchTo().alert()`** beckoned us to face them head-on, guiding the
WebDriver's focus to handle pop-up alerts with grace and composure. 🧘🏻‍♀️


As we ventured deeper, **`switchTo().frame(int index)`** and **`switchTo().frame(String nameOrId)`** extended
our reach, allowing us to interact with embedded content within iframes 🖼️ , while
**`switchTo().window(String windowHandle)`** orchestrated seamless transitions between browser
windows.


And like expanding our view, **`manage().window().maximize()`** bestowed upon us the power to maximize
browser windows, providing ample space to conduct our testing endeavors with clarity and focus. 🔍


In moments of anticipation, **`manage().timeouts().implicitlyWait()`** instilled stability and reliability,
setting a global timeout ⏰ for the WebDriver to patiently await the appearance of elements. 


With Actions, we danced with finesse, as **`moveToElement(WebElement toElement)`** guided the mouse
cursor with intuition, and **`clickAndHold(WebElement onElement)`** held web elements with steady
resolve, paving the way for intricate interactions and drag-and-drop operations.

And when the need arose, **`release()`** set our captives free, concluding our mouse-related actions with
grace and 🎯 precision. 

But amidst the earthly realms, **`keyDown(Keys theKey)`** and **`keyUp(Keys theKey)`** bestowed upon us the
power of keyboard-driven interactions, enabling us to simulate pressing and releasing specific keys with
finesse and control.

In moments of unparalleled power, **`JavascriptExecutor`** cast its spell, executing JavaScript code with
unparalleled flexibility and power ⚙️ , transforming our testing rituals into a symphony of digital magic. 🔮

And so, our journey with WebDriver, adorned with challenges and triumphs, continued to unfold, as we
embraced the tools and techniques that paved the way for a glorious testing adventure......




You can folow **Neelam** on [LinkedIn](https://www.linkedin.com/in/palneelam)

**Swaroop** started [this post](https://www.linkedin.com/posts/swaroopnadella_swaroopnadella-selenium-activity-7186197149745909762-Ypqd) on LinkedIn and based upon that **Neelam** came up with an [interesting version of it](https://www.linkedin.com/posts/palneelam_testautomation-testing-activity-7187767031474114560-d4UW) further that go converted to this full-fledged blog.


<br>
<br>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">

Want to learn more❓
<br> 
Follow [Quality With Millan](https://www.linkedin.com/company/quality-with-millan) or <a href="https://www.linkedin.com/shareArticle?url=https://qualitywithmillan.github.io{{ page.url }}&title=I+came+through+this+awesome+blogs+on+%0A%23QualityWithMillan" title="I came through this awesome blogs on #QualityWithMillan" target="_blank">Share it on LinkedIn</a>

<hr style="border: none; height:1px; background-color: #0F4CCC; position: relative;">

