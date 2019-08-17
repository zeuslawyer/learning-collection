# A HACKERNEWS CLONE

### Technologies

....

### Absolute import config:...

In `jsconfig.json` 👍

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2016",
    "jsx": "preserve",
    "checkJs": true,
    "baseUrl": "./src"
  },
  "exclude": ["node_modules", "**/node_modules/*"],
  "include": ["src"]
}
```

in `package.json`

```json
"eslintConfig": {
    "extends": [
      "react-app",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    "settings": {
      "import/resolver": {
        "node": {
          "moduleDirectory": [
            "node_modules",
            "src/"
          ]
        }
      }
    }
  },
```

### Tutorial origin

- fire up docker app, then in the terminal do the following: `docker pull prismagraphql/prisma:<<tag version>>`. get the latest tags from [here](https://hub.docker.com/r/prismagraphql/prisma/tags).

[howtographql](https://www.howtographql.com/react-apollo/1-getting-started/).

### DOCKER - needed for the prisma server instance to be deployed locally

[Prisma tute on setting up a local prisma server with docker](<https://www.prisma.io/docs/1.13/tutorials/deploy-prisma-servers/local-(docker)-meemaesh3k>)
[prisma & docker setup](https://www.prisma.io/docs/prisma-server/deployment-environments/docker-rty1/)

**Updating Docker Images**
The Docker CLI and Docker Compose CLI are used to manage the Prisma servers.

Here's a quick rundown of the most important commands:

`docker-compose up -d`: Start a new Prisma server to which you can deploy your Prisma services.
`docker-compose stop`: Stops the Prisma server.
`docker-compose pull`: Downloads the latest Prisma images from Docker Hub
`docker logs`: Shows the logs of the Prisma server (helpful for debugging).

**_Note that these commands need to be executed in the directory where the Docker Compose file for your Prisma server is available._**

### UNDERSTANDING THE SERVER CODE + PRISMA

- **prisma**: This directory holds all the files that relate to your Prisma setup. The Prisma client is used to access the database in your GraphQL resolvers (similar to an ORM).

  - **prisma.yml** : is the root configuration file for your Prisma project.

  - **datamodel.prisma**: 👉 _the DB Data Schema_. It defines your data model in the GraphQL Schema Definition Language (SDL). When using Prisma, the datamodel is used to describe the database schema.

- **src**: This directory holds the source files for your GraphQL server.

  - **schema.graphql**: 👉 _the Schema for operations intended on the data_. It contains your **operations** aka **application** schema. The application schema defines the GraphQL operations you can send from the frontend. It **also** contains the custom types that are part of the application/operations schema, for example a `User` object type.

  - **generated/prisma-client** contains the auto-generated Prisma client, a type-safe database access library (similar to an ORM).
    resolvers contains the resolver functions for the operations defined in the application schema.
    index.js is the entry point for your GraphQL server.

🔥 Remember that the prisma project / server needs to be **deployed first** before the server can be started.

Here is the sequence of steps:

_Inside the `/server` folder..._

1. `docker-compose up -d`: Start a new Prisma server to which you can deploy your Prisma services.

2. `[yarn] prisma deploy [--force]`

_Docker Commands_

1. `docker ps` to list active containers
2. `docker stop [CONTAINER ID]` to stop container
3. `docker rm [CONTAINER ID]` to remove a container
4. `docker-compose up -d` to run the `docker-compose.yml` file in a given project (the prisma server in this case)
