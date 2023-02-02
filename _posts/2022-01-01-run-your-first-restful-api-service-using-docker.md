---
title: "Run your first RESTful API service using docker"
permalink: "/tutorial/run-your-first-restful-api-service-using-docker.html"
date: 2022-01-01T21:43:00-00:00
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

```
Did you always wanted to run your API using docker 🐋 ❓
```

**run your own micro-service** or REST API's 
 handling : `GET` , `POST` , `PUT` / `PATCH` , `DELETE` i.e all **CRUD** operations ❓

<p align="center"> ---------- or ---------- </p>

You always ran them locally, and wanted to **run them inside** `docker` / dockrized with `docker` images  ❓ ❓

<p align="center"> ---------- or ---------- </p>

You wanted a service to **run locally and do the API testing** , by hitting a API running (_inside_) a `docker` container ❓ ❓ ❓


## This article is 💯 for you. 

### I will be calling it as node-app-http-docker

I am also going to share the complete source code with you as well.

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

# Table of Contents


1. [What is this project](#what-is-this-project)
2. [Project setup](#project-setup-)
3. [Running docker](#running-docker-)
   * [Verify docker Image](#verify-docker-image)
4. [Running docker Image](#running-docker-image-)
5. [Testing (is it working)](#testing-is-it-working--)
6. [STOPPING docker (running container)](#stopping-docker-docker-container-)


## What is this project❓

`node-app-http-docker` is a working project (non Prod use)

For getting started with a RESTFUL api server locally using [docker](https://docs.docker.com/)

- It 🏃runs a server (docker) using `nodejs` [v16] 
- Exposes following  RESTFUL endpoints ( no database required) with all **CRUD** operations

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



## Project setup 💼

Clone the repository on your machine (_Source code_)

|**Using** | **Comand** |
|:---:|:---:|
|via **https**|`git clone https://github.com/eaccmk/node-app-http-docker.git` |
|via **ssh**|`git clone git@github.com:eaccmk/node-app-http-docker.git` |

```shell
cd node-app-http-docker
```

💡 Prequisite / Assumption
- You have`docker` installed and running on your machine.

If not, its highly recommended to [Get docker](https://docs.docker.com/get-docker/)


back to [top](#table-of-contents)


## Running docker 🐋

```
docker build . -t node-app-http-docker
```

> To know why we used `-t Allocate a pseudo-TTY` read this [stackoverflow thread](https://stackoverflow.com/a/40026942)

### Verify docker Image

After `docker build` is completed, verify if a docker image is created and listed

run `docker images`

```shell
docker images
REPOSITORY                      TAG         IMAGE ID      CREATED         SIZE
localhost/node-app-http-docker  latest      8f74146744df  18 minutes ago  928 MB
```
 > You may have more than one row in result, but make sure you have the one with  **REPOSITORY** `localhost/node-app-http-docker`

also see you got a random (uniqie) **IMAGE ID** assigned to the image you just created, in my case it was `8f74146744df`


back to [top](#table-of-contents)



## Running docker Image 🎽

Now that you have a **IMAGE ID**, lets run that image


```shell
docker run -p 8080:8080 8f74146744df
```

`docker run -p <your-port-external>:<docker-internal-port-exposed-for-access> IMAGE_ID`

For more details on `-p`  read [**Publish or expose port (-p, --expose)**🔗](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose) 

❗ open a new tab on terminal and verify this docker (running)

```shell
docker ps
```

back to [top](#table-of-contents)



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
|**GET**|![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/415gmquvyzfoemy8jyzz.png)|
|**POST**|![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pwzfwiwuz2hf10ju7zlq.png) |
|**PATCH**| ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ldj9vy2hywhrung5fzjd.png)|
|**DELETE**|![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p5eh1vqw858s605kacvm.png)|

back to [top](#table-of-contents)


## STOPPING docker (docker container) 🛑

First lets find the running one
`docker ps`

```ruby
CONTAINER ID  IMAGE                                  COMMAND      CREATED            STATUS                 PORTS                   NAMES
a5a149a53466  localhost/node-app-http-docker:latest  node app.js  About an hour ago  Up About a minute ago  0.0.0.0:8080->8080/tcp  ecstatic_cray
```

Notice **STATUS** column says

```
Up About a minute ago
```

**Stop using :**

```ruby
# if you have only 1 docker container
docker stop

# stop using CONTAINER ID
docker stop a5a149a5346

# stop using image name
docker stop ecstatic_cray
```

> In case you want to confirm ---->> run `docker ps` it should show no running image 

```
docker ps
CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES

```


Go back to [top](#table-of-contents)



[back to home page](/)
