const { Client } = require("pg")

const insertUser = async (id, nickname, login_date) => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Cookie-Clicker",
    password: process.env.DB_PASS,
    port: "5432",
  })
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

const getAllUsers = async () => {
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
      `SELECT u.nickname, gs.cookie_count
        FROM users u
        JOIN game_state gs ON u.id = gs.user_id
        ORDER BY gs.cookie_count DESC
        LIMIT 10`
    )
    return userData
  } catch (error) {
    return error.stack
  } finally {
    await client.end()
  }
}

const insertGameState = async (id, userId, cookieCount, clickValue, lastUpdate) => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Cookie-Clicker",
    password: process.env.DB_PASS,
    port: "5432",
  })
  try {
    await client.connect();
    await client.query(
      `INSERT INTO game_state (id, user_id, cookie_count, click_value, last_update) 
             VALUES ($1, $2, $3, $4, $5)`,
      [id, userId, cookieCount, clickValue, lastUpdate]
    )
    return true
  } catch (error) {
    console.error(error.stack)
    return false
  } finally {
    await client.end()
  }
}

const saveGameState = async (id, cookieCount, clickValue, lastUpdate) => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Cookie-Clicker",
    password: process.env.DB_PASS,
    port: "5432",
  })
  try {
    await client.connect();
    await client.query(
      `UPDATE game_state 
       SET cookie_count = $1, click_value = $2, last_update = $3 
       WHERE id = $4`,
      [cookieCount, clickValue, lastUpdate, id]
    )
    return true
  } catch (error) {
    console.error(error.stack)
    return false
  } finally {
    await client.end()
  }
}

const createAutoClicker = async (id, gameStateId, clickerName, stats) => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Cookie-Clicker",
    password: process.env.DB_PASS,
    port: "5432",
  })
  try {
    await client.connect();
    await client.query(
      `INSERT INTO autoclicker (id, game_state_id, clicker_name, stats) 
        VALUES ($1, $2, $3, $4)`,
        [id, gameStateId, clickerName, stats]
    )
    return true
  } catch (error) {
    console.error(error.stack)
    return false
  } finally {
    await client.end()
  }
}

const getGameState = async (id) => {
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
      `SELECT * FROM game_state 
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

const getAutoClicker = async (game_state_id) => {
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
      `SELECT * FROM autoclicker
              WHERE game_state_id=($1)`,
      [game_state_id]
    )
    return userData
  } catch (error) {
    return error.stack
  } finally {
    await client.end()
  }
}

module.exports = { insertUser, getUser, getAllUsers, insertGameState, saveGameState, createAutoClicker, getGameState, getAutoClicker }