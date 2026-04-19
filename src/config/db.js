import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "prueba",
  host: "localhost",
  database: "carddesk",
  password: "1234", // 👈 tu contraseña real
  port: 5433,
});

export default pool;