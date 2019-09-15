module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'database_name',
  synchronize: false,
  logging: true,
  entities: ['/path/to/entities/*.ts'],
  migrations: ['/path/to/migrations/*.ts'],
  cli: {
    migrationsDir: '/path/to/migrations',
  },
}