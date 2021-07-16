module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'digipremier.ppf2h.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'digipremier-cms'),
        username: env('DATABASE_USERNAME', 'Admin'),
        password: env('DATABASE_PASSWORD', 'admin'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
