## About The Project

This project is a monorepo of React NextJS with NestJS using TypeOrm and Postgress

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Nest][Nest.js]][Nest-url]
- [![TypeORM][TypeOrm.io]][Typeorm-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Yarn - We are using [Yarn](https://nodejs.org/en/download/) as our package management.
- Postgres - [Download & Install PostgreSQL](https://www.postgresql.org/download/)

### Quick Install

1. On root of this project, run this command:

```bash
 yarn install
```

2. Create `.env` file in root of this project and and insert your key/value pairs in the following format of `KEY=VALUE`:

```shell
DATABASE_HOST=YOURDBHOST
DATABASE_PORT=YOURDBPORT
DATABASE_USERNAME=YOURDBUSERNAME
DATABASE_PASSWORD=YOURDBPASSWORD
DATABASE_NAME=YOURDBNAME
```

3. Check the database connection by run `dev` script with:

```bash
yarn dev
```

Error database connection should not be display if database config is correct.

4. After database connection setup success, Run `seed` script with:

```bash
yarn seed
```

This will generate 15 items on each table in database.

5. After all step above success run `dev` script and open browser with `http://localhost:3000`

Enjoy!

### TODO

- Add category table.
- Swagger Setup.
- Order Feature.
- Auth Feature.
- Payment Feature.
- Testing.
- CI with github action.
- Docker.
- CD with AWS or Digital Ocean.
- Jira Integration.
- GraphQL
- Real Time.
- SEO.
- Other FE framwork/library (Angular/Vue/Svelte).
- Other ORM library (Sequelize/Prisma/Knex).
- Other BE framwork/library (Express/Sails/Fastify/FeatherJS/Hapi).

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Nest.js]: https://img.shields.io/badge/nest.js-000000?style=for-the-badge&logo=nestjs&logoColor=e0234e
[Nest-url]: https://nestjs.com/
[Typeorm.io]: https://img.shields.io/badge/typeorm.io-000000?style=for-the-badge&logo=typeorm&logoColor=e0234e
[Typeorm-url]: https://typeorm.io/
[PostgreSQL]: https://img.shields.io/static/v1?style=for-the-badge&message=PostgreSQL&color=4169E1&logo=PostgreSQL&logoColor=FFFFFF&label=
[PostgreSQL-url]: https://www.postgresql.org
