---
title: "Run your first RESTful API service using docker"
teaser: /assets/images/docker_rstful.png
image: /assets/images/docker_rstful.png
permalink: "/tutorial/run-your-first-restful-api-service-using-docker.html"
date: 2023-06-25
authors:
- Millan Kaul
categories:
  - tutorial
tags:
  - docker
  - api
  - microservices
  - development
  - java

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

❓ Did you always wanted to run your API using docker 🐋 

Run your own micro-service or REST API's
 handling :
`GET`\
`POST`\
`PUT` / `PATCH`\
`DELETE`\
i.e all **CRUD** operations.

<br>
❓❓ You always ran them locally, and wanted to run them inside a `docker` / dockrized with `docker` images 

<br>
❓❓❓You wanted a service to run locally and for **API testing** , by hitting a API running (_inside_) a `docker` container


### This article is 💯 for you. 
<br>

```
In this article you will learn:

1. How to run a RESTful service locally using `docker` 🐋 
     1.1 Code available on GitHub 
2. How to create a - docker image from your code.
2. Verify abd list image created - docker image  
3. Running a docker image - docker run
4. How to start a running docker container - docker start
5. How to stop a running docker container - docker stop

🙌 And few tricks on the way we learn all of the above...

```
<br>

## Lets call that dockrized microservice as  `node-app-http-docker`

I will explain step by step how to achieve that, as well as share the complete source code.


# Table of Contents


1. [What is this project](#what-is-this-project)
2. [Project setup](#project-setup-)
3. [Running docker](#running-docker-)
   * [Verify docker Image](#verify-docker-image)
4. [Running docker Image](#running-docker-image-)
5. [Testing (is it working)](#testing-is-it-working--)
6. [STOPPING docker (running container)](#stopping-docker-docker-container-)


## What is this project❓

⚠️ NOTE: NOT SUITABLE FOR PRODUCTION USAGE

`node-app-http-docker` is a working project.


For getting started with a RESTful api server locally using [docker](https://docs.docker.com/)

- It 🏃runs a server (docker) using `nodejs` [v18] 
- Exposes following  RESTful endpoints ( no database required) with all **CRUD** operations

|**Rest API** call          | **CRUD** operation | REST endpoints|
|:----:                 |:----:           |:----:|
|**GET**                | **R**ead        | `http://0.0.0.0:8080/` <br /> `http://0.0.0.0:8080/health`  <br /> `http://0.0.0.0:8080/api/todos`  <br /> `http://0.0.0.0:8080/api/todos/{id}`|
|**PATCH/PUT**          | **U**pdate     | `http://0.0.0.0:8080/api/todos/{id}`|
|**POST** {with body}   | **C**reate      | `http://0.0.0.0:8080/api/todos`|
|**DELETE**             | **D**elete      | `http://0.0.0.0:8080/api/todos/{id}` |

 
 > You may get 3 types of **response**

|**Response Code**  | **Response Status** |
|:-----------------:|:-------------------:|
|     **200**       |       `OK`          |
|     **201**       |     `Created`       |
|     **404**       |    `Not Found`      |
  

back to [top](#table-of-contents)
<br><br>


## Project setup 💼

1. Prequisite
[Get docker](https://docs.docker.com/get-docker/) [ I used version : `v4.20.1`]

    1.1 confirm by running `dockdocker ps`.
     > if you are using it first time you will see this

    ```
    CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
    ```
<br>

![Image-docker desktop started](/assets/images/docker_desktop_started.png)|

<br><br>
2. Clone this repository

|**Using** | **Comand** |
|:---:|:---:|
|via **https**|`git clone https://github.com/eaccmk/node-app-http-docker.git && cd node-app-http-docker` |
|via **ssh**|`git clone git@github.com:eaccmk/node-app-http-docker.git && cd node-app-http-docker`|


back to [top](#table-of-contents)
<br><br>

## Running the project using docker 🐋

It's very simple and easy to start this service/application locally :

```bash
docker build . -t node-app-http-docker
```
⚠️ This may take a some time, if you are running this command first time or with slow internet connections speed.

> Some interesting background why we use `-t` to `Allocate a pseudo-TTY` , read [this stackoverflow thread](https://stackoverflow.com/a/40026942)

### Verify docker Image

After `docker build` is completed, verify if a docker image is created and listed, run command `docker images` like :

```shell
docker images
REPOSITORY             TAG       IMAGE ID       CREATED         SIZE
node-app-http-docker   latest    ea23b8f98141   2 minutes ago   1.09GB
```
 > You may have more than one row in result, but make sure you have the one with  **REPOSITORY** `node-app-http-docker`

also you may notice that a random (uniqie) **IMAGE ID** got assigned to your docker image, in my case it was `ea23b8f98141`


back to [top](#table-of-contents)
<br><br>


## Running docker Image 🎽

Now that you have a **IMAGE ID**, lets run that image using `docker run` command like :


```shell
docker run -p 8080:8080 ea23b8f98141
```

Syntax: `docker run -p <your-port-external>:<docker-internal-port-exposed-for-access> IMAGE_ID`

For more details on `-p`  read [Publish or expose port (-p, --expose)🔗](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose) 

❗ open a new tab on terminal and verify this docker (running)

```shell
docker ps
```

![Image-docker process command](/assets/images/docker_process_command.png)

<br><br>

back to [top](#table-of-contents)
<br><br>


## Testing (is it working ✅ ❎)

Lets hit the docker image as a **client** / **User** 

|Test Type (Positive /Negative) |**CLIENT** On terminal | Response | **SERVER** (if Docker running with logs) | 
|:----:|:---:|:---:|:---:|
|✅ `Home Page` |`curl http://0.0.0.0:8080`| *Welcome, this is your Home page* | `CalledGET : /`|
|❎ `Invalid endpoint`|`curl http://0.0.0.0:8080/dascbajb` |`{"message":"Route not found"}`|`CalledGET : /dascbajb`  <br /> This endpoint is not implemented / unavailable at the moment !!|
| ✅ `health check` | `curl http://0.0.0.0:8080/health` |`{"uptime":29.560686169,` <br /> `"message":"OK","timestamp":1644057630652}`|`CalledGET : /health`|

**Some Screen shots from Postman**

|**API**| **Screen**|
|:----:|:-----|
|**GET**|![Image description](/assets/images/docker_GET.png)|
|**POST**|![Image description](/assets/images/docker_POST.png)|
|**PATCH**| ![Image description](/assets/images/docker_PATCH.png)|
|**DELETE**|![Image description](/assets/images/docker_DELETE.png)|

back to [top](#table-of-contents)
<br><br>

## STOPPING docker (docker container) 🛑

First lets find the running one `docker ps` and then stop it using `docker stop`

```ruby
CONTAINER ID  IMAGE        ....  .. . NAMES
06b6693e2e4a  ea23b8f98141 ....  .. . hardcore_black
```

```ruby
# stop using CONTAINER ID
docker stop a5a149a5346

# stop using image name
docker stop hardcore_black
```

> In case you want to confirm ---->> run again `docker ps` it should show no running image 

```
docker ps
CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES

```

Go back to [top](#table-of-contents)

# That's it !

Bookmark this blog : https://qualitywithmillan.github.io or follow me using [#QualityWithMillan](https://www.linkedin.com/feed/hashtag/?keywords=qualitywithmillan)


> This post was re-published on  `2023-06-25` (Initiallly written on/before`2022-01-01`)