export const config = {
  db: {
    type: process.env.DB_TYPE || 'mysql',
    synchronize: false,
    logging: true,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3307,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'say-better',
    extra: {
      connectionLimit: 10,
    },
    autoLoadEntities: true,
  },
};
