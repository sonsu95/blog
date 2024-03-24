## Before to use

This template is using pnpm.
If you are using a package manager other than pnpm, please replace the pnpm-lock.yaml* part of dev.Dockerfile with the appropriate lock file for your package manager


You need to add the following code to your `.npmrc` file:
.npmrc file is in your local root directory
For example, if you use mac OS, you can find it in the following path: `/home/[USERNAME]/.npmrc`

```bash
# .npmrc  
public-hoist-pattern[]=*@nextui-org/*
```

```bash
# install dependencies in local
pnpm install
```

### Modify your dev.Dockerfile and docker-compose.yml name

#### in dev.Dockerfile
change WORKDIR to your own project name

WORKDIR /home/template => WORKDIR /home/blog

#### in docker-compose.yml
change the service name, container name, and volumes path to your own project name

```yaml
  template:
    container_name: "next-nextui"
...
  volumes:
    - ./:/home/template
    - /home/template/node_modules
```

to

```yaml
  blog:
    container_name: "my-blog"
...
  volumes:
    - ./:/home/blog
    - /home/blog/node_modules
```


## Getting Started

### in development



```bash
# copy .env.example to .env
cp .env.example .env

# install dependencies in local
pnpm install

# open docker desktop

# build and run docker container
docker compose up --build -d
```

then, have fun with your project!