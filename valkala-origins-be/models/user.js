const db = require('../db/db')

const User = {

  create: (username, passwordDigest) => {
    const sql = `
        INSERT INTO users(username, password_digest)
        VALUES ($1, $2)
        RETURNING *
        `

    return db
      .query(sql, [username, passwordDigest])
      .then(dbRes => dbRes.rows[0].username)
  },

  findByUsername: username => {
    const sql = 'SELECT * FROM users WHERE username = $1'

    return db
      .query(sql, [username])
      .then(dbRes => dbRes.rows[0])
  },

  findById: id => {
    const sql = 'SELECT * FROM users WHERE id = $1'

    return db
      .query(sql, [id])
      .then(dbRes => {
        if (dbRes.rows.length > 0) {
          return dbRes.rows[0]
        } else {
          return null
        }
      })
  }

}

module.exports = User