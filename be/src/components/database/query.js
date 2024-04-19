const { Client } = require("pg")

//Create user
const insertUser = async (id, nickname, login_date) => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Cookie-Clicker",
    password: process.env.DB_PASS,
    port: "5432",
  });
  try {
    await client.connect();
    await client.query(
      `INSERT INTO users (id, nickname, login_date) 
             VALUES ($1, $2, $3)`,
      [id, nickname, login_date]
    )
    return true
  } catch (error) {
    console.error(error.stack)
    return false
  } finally {
    await client.end()
  }
}

//Get users email from DB
const getUser = async (id) => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Cookie-Clicker",
    password: process.env.DB_PASS,
    port: "5432",
  })
  try {
    await client.connect()
    userData = await client.query(
      `SELECT nickname, login_date, id FROM users 
              WHERE id=($1)`,
      [id]
    )
    return userData
  } catch (error) {
    return error.stack
  } finally {
    await client.end()
  }
}

module.exports = { insertUser, getUser }