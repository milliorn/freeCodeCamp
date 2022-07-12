# Learn NestJS by Building a CRUD API

<https://www.freecodecamp.org/news/learn-nestjs-by-building-a-crud-api/>

<https://github.com/vladwulf/nestjs-api-tutorial>

<https://youtu.be/GHTA143_b-s?t=3249>

```ps
docker-compose up dev-db

npx prisma migrate dev

npx prisma studio
```

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read <https://pris.ly/d/getting-started>
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
<https://pris.ly/d/getting-started>

⭐️ Course Contents ⭐

⌨️ (0:57:45) NestJs pipes
⌨️ (0:59:10) NestJs global pipe
⌨️ (1:02:50) Hashing user password with argon
⌨️ (1:03:20) Sign up logic
⌨️ (1:13:13) Sign in logic
⌨️ (1:16:50) Automate postgres restart & prisma migrations
⌨️ (1:27:40) NestJs config module
⌨️ (1:34:40) Using passport js & jwt module with nestJs
⌨️ (1:55:10) Get current user with access token
⌨️ (1:57:00) NestJs Guards
⌨️ (2:12:10) NestJs custom param decorator
⌨️ (2:27:10) e2e tests with pactumJs
⌨️ (2:35:10) Setting up test database
⌨️ (2:36:10) Automate test database restart & migrations
⌨️ (2:37:10) Using dotenv cli with prisma
⌨️ (2:44:30) Prisma database teardown logic
⌨️ (2:53:10) Auth e2e tests
⌨️ (3:02:01) User e2e tests
⌨️ (3:13:20) Bookmarks e2e test
