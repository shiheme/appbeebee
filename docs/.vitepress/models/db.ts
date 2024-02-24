import pg from "pg";
const { Pool } = pg;

let globalPool;

export function getDb() {
  if (!globalPool) {
    const connectionString = process.env.POSTGRES_URL;
    console.log("connectionString", connectionString);

    globalPool = new Pool({
      user: 'user',
      host: 'localhost',
      database: 'my_database',
      password: 'password',
      port: 5432,
    });
  }

  return globalPool;
}
