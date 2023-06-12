module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", '0.0.0.0'),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME"),
      schema: env("DATABASE_SCHEMA", "public"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      "ssl": { "rejectUnauthorized": false }
    },
  },
});
