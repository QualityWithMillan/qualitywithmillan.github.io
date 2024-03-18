---
title: "Easiest way to understand `How Appium works`"
header:
  feature: /assets/images/2024/01/appium_24/how-appium-works-01.png
  teaser: /assets/images/2024/01/appium_24/appium.png
permalink: "/post/2024/01/how-appium-works-01.html"
date: 2024-01-08
authors:
- Millan Kaul
categories:
  - article
tags:
  - testing
  - automation
  - appium
  - mobile-automation
  
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

### APPIUM

 > In case you don't know : `Appium` is an open-source project and ecosystem of related software, designed to facilitate UI automation of many app platforms, including mobile (iOS, Android, Tizen), browser (Chrome, Firefox, Safari), desktop (macOS, Windows), TV (Roku, tvOS, Android TV, Samsung), and more! ref - [appium.io](https://appium.io)

 Although it's not required to for this article, here how to [Install Appium](https://appium.io/docs/en/2.4/quickstart/install/)

### Simplest way to explain how Appium works ?

Before you reach a point of demonstration of a straightforward login scenario in a mobile test automation demo, it's essential to recognize the intricate blend of science, mathematics, and engineering that forms the backbone of this process.

In this blog, I'll break down the intricacies and shed light on the most crucial element's, explaining it in the simplest way possible.

<br /> 

You can get a deeper understanding of "How Appium works?" form [Appium in a Nutshell](https://appium.io/docs/en/2.4/intro/), for now let me present some easy and simple steps to provide you with a clearer understanding of the role of Appium in test automation.
<br /> 
<br /> 

!["Image showing 4 steps of how appium works in mobile app automation"](/assets/images/2024/01/appium_24/how-appium-works-01.png){: .align-center}

-----

▸ **Test Script**:

This is where your testing journey begins. You have a script that defines the actions you want to perform on a mobile application. To simplify this is your test automation framework. That has to ultimately interact with `Mobile App Elements` (Step #4).

### Step 1: Test Script to Appium Server

Using your `Test Script`, you create a test that outlines the actions you want to perform on the mobile app.

And `Appium Server` serves as the bridge between your test script and the mobile app elements. Simple and easy: It's responsible for receiving commands from the test script.

<br /> 


### Step 2: Appium Server Translates Commands

Upon receiving commands, the `Appium server` translates them into a format understandable by the WebDriver protocol.

<br /> 

### Step 3: Appium Drivers Execute Commands

Specific to each platform (Android or iOS) and responsible for executing the translated commands on the mobile app elements. One of the core roles of what Appium Development community does.

<br /> 

### Step 4: Interaction with Mobile App Elements

The Appium drivers interact with the mobile app elements based on the translated commands ( coming from Test Scripts), such as clicking buttons or entering text.

> Appium acts as a mediator, translating your high-level commands (from test scripts) into actions that the mobile app can understand and execute. This simple yet powerful process allows you to emulate and automate testing scenarios efficiently.

<br /> 
 
But wait, how does that translate to the automation code? I need code to see all the above steps in reality.

Not to worry, I have you covered.

-----

Let me use the *simplest way to explain how a login scenario works for a social media app* ( with respect to the above steps ).

**Reference code** : All of the above steps can be roughly mapped to below code, using `JavaScript` syntax.


```javascript
// Step 1: Test Script - Setting Desired Capabilities
const desiredCapabilities = {
    platformName: 'Android',  // or 'iOS'
    platformVersion: '11.0',  // replace with your device version
    deviceName: 'emulator-5554',  // replace with your device name
    appPackage: 'com.example.socialmediaapp',
    appActivity: 'com.example.socialmediaapp.LoginActivity',
};

// Step 2: Creating Appium Driver Instance
const driver = await new webdriver.Builder()
    .usingServer('http://localhost:4723/wd/hub')
    .withCapabilities(desiredCapabilities)
    .build();

// Step 3: Connect to App
// (Implicitly assumes that the app is already open)

// Step 4: Execute Commands
const usernameField = await driver.findElement(By.id('username_input'));
const passwordField = await driver.findElement(By.id('password_input'));
const loginButton = await driver.findElement(By.id('login_button'));

// Step 5: Translate to UIAutomator or XCUITest (Happens behind the scenes)

// Step 6: Automation Actions
await usernameField.sendKeys('your_username');
await passwordField.sendKeys('your_password');
await loginButton.click();

```

<hr>

Want to learn more❓ Follow my hashtag.[#QualityWithMillan](https://www.linkedin.com/feed/hashtag/?keywords=qualitywithmillan) on or just follow [me on linkedIn](https://www.linkedin.com/in/millankaul/)
