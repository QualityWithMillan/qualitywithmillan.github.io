---
search : "false"
title: "What is 𝗻𝘃𝗺 ❓️ - ⓝⓥⓜ 𝟭𝟬𝟭 in 5 minutes !"
header:
  image: /assets/images/nvm_hero.png
  teaser: /assets/images/nvm_hero.png
  caption: "nvm with multiple versions"
permalink: "/post/what-is-nvm--in-5-minutes.html"
date: 2023-01-12T18:00:00-00:00
authors:
- Millan Kaul
categories:
  - blog
tags:
  - javascript
  - node
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

### What is nvm ❓️
> nvm allows you to quickly install and use different versions of node via the command line.

<br>

#### How to install nvm ❓️
>  1. using CURL

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

> 2. using wget

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

**The script clones the nvm repository to ~/.nvm**

<br>

#### How to verify installation of nvm❓️

>  1. nvm way

```javascript
$ command -v nvm
nvm
```

👆 which should output `nvm` if the installation was successful.

<br>

#### If you get nvm: command not found or see nothing as 👆 simply close your current terminal, open a new terminal, and try verifying again.

>  2. Traditional way

```javascript
$ nvm -v
0.39.1
```

<br>

## 💚💚💚💚💚💚 NODE 💚💚💚💚💚💚


<br>

#### How to Install the latest version of node ❓️ [Feb 2022]
>  nvm install node

```javascript
$ nvm install node 
Downloading and installing node v17.5.0...
```

<br>

#### How to list `node` versions (-> shows default version in use ) ❓️
>  nvm ls

```javascript
$ nvm ls
->    v16.8.0  
      v17.5.0
```

<br>

#### How to update / change / default a specific node version❓️
>  nvm use v17.5.0

```javascript
$ nvm use v17.5.0
Now using node v17.5.0 ....
```

<br>

#### How to confirm if new defaulted version is set correctly❓️
>  nvm ls

```javascript
$ nvm ls
       v16.8.0  
->     v17.5.0
```

<br>

#### How to run `app.js` using a non default version ( lets say 16.8.0)❓
>  nvm run 16.8.0 app.js

```javascript
$ nvm run 16.8.0 app.js
```

<br>

#### How to remove a specific / broken `node version` using `nvm`❓️
>  nvm uninstall v16.8.0

```javascript
$ nvm uninstall v16.8.0 

Uninstalled node v16.8.0
```

<br>

#### How to confirm if that was removed successfully❓️
>  nvm ls

```javascript
$ nvm ls
->     v17.5.0
```

<br><hr>

🙏Reference nvm-sh github [README](https://github.com/nvm-sh/nvm/blob/master/README.md)
