[![Waffle.io - Columns and their card count](https://badge.waffle.io/Seolhun/vue-type-graphql-example.png?columns=all)](https://waffle.io/Seolhun/vue-type-graphql-example?utm_source=badge) [![Greenkeeper badge](https://badges.greenkeeper.io/Seolhun/vue-type-graphql-example.svg)](https://greenkeeper.io/)
# Book Management System.
- Author : [Seolhun](https://github.com/Seolhun)
- Date : 2017.10.19

## Used Stacks
1. `TypeScript`
2. `NodeJS`, `Express`
3. `Vue-Cli`
4. `GraphQL`
6. `Apollo Client`
7. `Sequelize`

## Commit Convention
- Server : [Server] - Contents
- Client : [Cient] - Contents
- Android : [Android] - Contents
- Contents
  - GraphQL
  - Vue
  - Test
  - ...

## How to run
- Run All Server
  - `npm install -g concurrently`
  1. `npm run all`

- Server
  - `npm install -g ts-node vue-cli typescript`
  1. `npm run dev`
  2. [http://localhost:4000/graphql](http://localhost:4000/graphql)

- DB
  1. Create Default database using Raw SQL.
    - `/src/config/db/default.sql`
  2. Set Database configuration.
    - `/server/src/config/database/index.ts`
  3. Set `Sync` Database config
    - `sequelize.sync()` - create & update
    - `sequelize.sync({force: true})` - create & drop

- Client
  1. `npm run dev`
  2. [http://localhost:7000/](http://localhost:7000/)

## Reference
- `Server`
  - [NodeJS - Express](http://expressjs.com/)
  - [Express Session](https://github.com/expressjs/session#options)
  - [GraphQL](http://graphql.org/learn/)
  - [Express GraphQL](https://github.com/graphql/express-graphql)
  - [Sequelize](http://docs.sequelizejs.com/)
  
- `Client`
  - [Vue](https://vuejs.org/)
  - [Vue Apollo Client](https://github.com/akryum/vue-apollo)
