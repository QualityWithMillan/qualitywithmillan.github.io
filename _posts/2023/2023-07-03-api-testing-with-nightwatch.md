---
title: "API testing with nightwatch in 15 mins"
header:
    feature: /assets/images/2023/nightwatch-js-api-00.png
    teaser: /assets/images/2023/nightwatch-js-api-00.png
permalink: "/tutorial/2023/api-testing-with-nightwatch-v3-in-15-mins.html"
date: 2023-07-03
authors:
- Millan Kaul
categories:
  - tutorial
tags:
  - nightwatch
  - api
  - end-to-end
  - automated-testing
  - javaScript
  - e2e
  - api-testing

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

{% include toc.html %}

## Introduction

The official [Nightwatch](https://nightwatchjs.org/) website states that "it's one framework for all platforms"

- Mobile web
- Native mobile
- Real desktop browsers
- Accessibility
- Visual testing


> But what caught my attention was its lightweight, quick and easy setup. For API testing in as little as 15 minutes (including setup!)


Without a wait, let me show you how easy it is set up and run your first API test withing minutes in just **2 steps**.

`set up` & `run`  _++ `HTML report` no complex configuration required.._


## Prerequisites:

Latest LTS version of NodeJS, you may download it from [here](https://nodejs.org/en/download)

and if you are in a rush, here my github repo with complete source code 👉 [nightwatch-api-automation repo](https://github.com/eaccmk/nightwatch-api-automation)

## 1. Set up ⚙️

Open your terminal and start following the steps AS-IS please.

-----

1. Create a directory named `nightwatch-api-automation` or anything you like, this is where you will setup your project + nightwatch

```
mkdir nightwatch-api-automation
```

-----

2. Install using below command or follow steps to [install nightwatchJS](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html)

```
npm init nightwatch nightwatch-api-automation
```

> Choose the config options as per below screen shot [ I kept my choice simple ]

![set up nightwatch config steps screenshot](/assets/images/2023/nightwatch-js-api-01_setup_nightwatch.png)

Now let's go inside the `nightwatch-api-automation` directory.

```
cd nightwatch-api-automation
```

And add `nightwatch apitesting` dependency to this project.

```
npm i @nightwatch/apitesting --save-dev
```

-----

**3. Update config for api test**


Let the project config know that you want to run **API test's only**, so :

Go to `nightwatch.conf.js` file and add `apitesting` as a plugin.

```javascript
Replace >> `plugins: [],`

with    >> `plugins: ['@nightwatch/apitesting'],`
```

In same config file (`nightwatch.conf.js`) add details about `api_testing{}` object like this ( 📝 copy paste is fun)

So  this  ⬇️

```javascript
    webdriver: {
        start_process: true,
        server_path: ''
      },
      
    },
    
    chrome: {
      desiredCapabilities: {
```

Becomes ⬇️

```javascript
    webdriver: {
        start_process: true,
        server_path: ''
      },
      
    },

	api_testing: {                 // start
	  start_session: false,
	    webdriver: {
	      start_process: false,
	  }
	},                             // end 
    
    chrome: {
      desiredCapabilities: {
```

That's it, end of set up step ! 🙌🏼

----


## 2. Run 🏃🏻‍♂️

Let's create a simple API test and run that.

1. Create a folder named `API` under `test` folder.
2. Then create your test file named `api-test.js` under `API` folder or simply run:

```
touch ./test/API/api-test.js
```

Copy this code in the newly crerated file `api-test.js` ( 📝 copy paste is fun again !). Reference from [nightwatch](https://github.com/nightwatchjs/nightwatch-docs/blob/versions/3.0/guide/writing-tests/api-testing.md#test-api-headers--responses)

```javascript
//api-test.js
describe('api testing', function () {
  it('get api test', async function({supertest}) {
    await supertest
      .request("https://petstore.swagger.io/v2")
      .get("/pet/findByStatus?status=available")
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function(response){
          expect(response._body.length).to.be.greaterThan(0);
      });
  });
});
```

Although it's pretty self explanatory if you have used javascript/Typescript. **TL;DR**
 
> We hit the endpoint `https://petstore.swagger.io/v2/pet/findByStatus?status=available` 
and then assert reponse code (`200`) and (`json`) response value. 


**Time to run the API test 🧑🏻‍💻**

On your terminal run this command to start your `API test` by :

```
npx nightwatch test/API/api-test.js --env api_testing
```

You should see run result like this.

![CLI run for nightwatch API tests](/assets/images/2023/nightwatch-js-api-02_cli_run.png)

**Note:** Here `api_testing` is to run API test as per our config we did above during set up. This way `nightwatch` does not mix API test's with UI tests run.


### Bonus automated HTML report 📊

Not to worry, **automated reports are already generated** and waiting for you to open.

> Go ahead and look for `index.html` file here

```
nightwatch-api-automation/tests_output/nightwatch-html-report/index.html
```

Right click & open `index.html` using any browser, for example see my html run result, report on chrome. 

![HTML report results for nightwatch API testing](/assets/images/2023/nightwatch-js-api-03_html_report.png)


And that's it! 🙌🏼

<br /> 


Have fun with 🚀 API testing and HTML reports 🟢 🌕 🔴

This post was first posted on `27.6.2023` at [Kablamo Engineering Blog](https://engineering.kablamo.com.au/posts/2023/api-testing-with-nightwatch-in-15-mins/)
