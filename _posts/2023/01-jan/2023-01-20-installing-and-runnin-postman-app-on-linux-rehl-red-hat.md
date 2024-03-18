---
title: "Installing and running Postman app on linux (REHL 8.x)"
header:
  feature: /assets/images/2023/01/RELH/rehl_postman_hero.png
  teaser: /assets/images/2023/01/RELH/rehl_postman_hero.png
  caption: "Screenshot of REHL ( redhat OS with postman)"
permalink: "/post/installing-and-runnin-postman-app-on-linux-rehl-red-hat.html"
date: 2023-01-20
authors:
- Millan Kaul
categories:
  - blog
tags:
  - linux
  - tools
  - tutorial
  
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


## Installing and running Postman app on linux (REHL 8.x)
> in less than 5 minutes


If you are a Linux user such as Red Hat ( REHL), chances are high that you are a fan of command line (CLI / terminal).
If the answer is YES ! ✔️

Let us set up postman for you in less than 5 minutes; yes 🖐️ five !

> For simplification I will use the term `"terminal"` ⬛ in this article


![Screen shot of rehat desktop with postman app on left sidebar](/assets/images/2023/01/RELH/rehl_postman_hero.png)
<figcaption align = "center">Rehat desktop with postman app on left sidebar</figcaption> 


<hr>

# Lets get started !

Snaps are app packages for desktop, cloud and IoT….

Tip! Think of snap (snapd) as a playstore /appstore for your linux OS need more info go here

Pro Tip! - If you already have Snap installed jump to 🔗 **Step #4**

<br>

### Step 1: Install epel-release-latest

EPEL has an 'epel-release' package that includes gpg keys for package signing and repository information.More about epel here
we will use ( -q, - quiet : quiet operation) to get less noise on terminal, you can skip using -q if you like the noise :)
Open your terminal and copy paste the command and hit enter !

**so, 🏃 run on terminal ⬛**

```bash
sudo dnf -q install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

__**Something like this will happen**__

> 💡_Note_: You may have timestamp in your local time format


```bash
sudo dnf -q install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
Last metadata expiration check: 0:15:36 ago on Sat 11 Sep 2021 11:20:48 AEST.
epel-release-latest-8.noarch.rpm 20 kB/s | 23 kB 00:01
Package epel-release-8–11.el8.noarch is already installed.
Dependencies resolved.
Nothing to do.
Complete!
```


<br>

### Step 2: Update current state of your dnf

DNF or Dandified YUM is the next-generation version of the Yellowdog Updater, Modified, a package manager for .rpm-based distributions.

**🏃 run on terminal ⬛ ️**

```bash
sudo dnf -q upgrade
```

> 💡_Note_: If you see any prompt like this , have a look and type y + enter


<br>

### Step 3: Install snapd a.k.a snap
🏃 run on terminal ⬛ ️
sudo yum install snapd

<hr>

```bash
sudo yum install snapd
Last metadata expiration check: 0:56:46 ago on Sat 11 Sep 2021 11:20:48 AEST.
Package snapd-2.51.7–1.el8.x86_64 is already installed.
Dependencies resolved.
Nothing to do.
Complete!
```

<br>

#### Step 3.1: Enable systemd:

Once installed, the systemd unit that manages the main snap communication socket needs to be enabled
sudo systemctl enable - now snapd.socket

```bash
Created symlink /etc/systemd/system/sockets.target.wants/snapd.socket → /usr/lib/systemd/system/snapd.socket.
```

<br>

#### Step 3.2: verify installation of snap
Open a new terminal or if you can reboot your system for changes to take effect

**🏃 run on terminal ⬛**

```bash
snap version
snap 2.51.7–1.el8
snapd 2.51.7–1.el8
series 16
rhel 8.4
kernel 4.18.0–305.17.1.el8_4.x86_64
```

> 💡_Note_: All the details above are updated as on Mid September 2021. 
Your versions may be different for you, the idea is to get similar output successfully.

<hr>

# Finally 🎉

<br>

### Step 4: Install postman app 🎽
Tip ( you can install any app/package available on snap(d) if you are at this step

**🏃 run on terminal ⬛ ️**

```bash
sudo snap install postman
```

<hr>

```bash
sudo snap install postman
Download snap "snapd" (12883) from channel "stable" 2021–09–11T12:27:50+10:00 INFO Waiting for automatic snapd restart…
postman (v8/stable) 8.12.2 from Postman, Inc. (postman-inc✓) installed
```



<br>

### Step 4.1: verify installation of postman ✔️

**🏃 run on terminal ⬛**

`snap list`



```bash
snap list
Name Version Rev Tracking Publisher Notes
core18 20210722 2128 latest/stable canonical✓ base
postman 8.12.2 147 v8/stable postman-inc✓ -
snapd 2.51.4 12883 latest/stable canonical✓ snapd
```

👀 **That's it 👉 postman 8.12.2 147 v8/stable postman-inc✓ -**


<br>

### Step 4.2: Just verify postman specifically ! ✔️✔️

If you have a very long list of snap apps, perhaps try this:

**🏃 run on terminal ⬛** ️

`snap list postman`


```bash
snap list postman
Name Version Rev Tracking Publisher Notes
postman 8.12.2 147 v8/stable postman-inc✓ -
```



<br>

### Step 5: Running /Launching the postman app 🏃

**🏃 run on terminal ⬛** ️

```bash
postman
```

**or**

```bash
snap run postman
```



![postman app launching on linux system](/assets/images/2023/01/RELH/rehl_postman_launch.png)
<figcaption align = "center">Postman app launching on linux system</figcaption> 



![postman app runnning on linux system](/assets/images/2023/01/RELH/rehl_postman_runnning.png)
<figcaption align = "center">Postman app running on linux system</figcaption> 


### By the way, by this time you may see it installed under your apps.. 💻 type " postman"



![postman app shortcut on rehl](/assets/images/2023/01/RELH/rehl_postman_shortcut.png)
<figcaption align = "center">Postman app shortcut on rehl</figcaption> 


# Step #X: Troubleshooting 👷

Sometimes the sky is not that blue ☁️ and you may get some error 😩

You have my hand 👐 here is what I faced and worked around , hopefully will save some of your time

💥 If you start seeing some weird issues around GPU.. that I faced during my setup (  _screen: postman app launching on linux system_ ) 🚧

The disableGPU setting is set to undefined
Not disabling GPU

Don't worry its a known and open issue at postman. See my comment [here on postman support](https://github.com/postmanlabs/postman-app-support/issues/10252#issuecomment-917332351)
> probably might have been solved whne you will be reading this post.


Solution 💠 for me a simple machine reboot did the magic ♻️
