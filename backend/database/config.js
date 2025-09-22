import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10
})

export default pool
