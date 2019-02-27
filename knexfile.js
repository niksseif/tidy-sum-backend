'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tidysum',
    migrations: {
      directory: __dirname +'/db/migrations'
    },
    seeds: {
      directory: __dirname +'/db/seeds'
    },
  },
  

  test: {
    client: 'pg',
    connection: 'postgres://localhost/tidysum_dv',
    migrations: {
      directory: __dirname +'/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    },
  },
  

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname +'/db/seeds'
    },
  },

};