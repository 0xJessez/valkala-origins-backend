const db = require('../db/db')

const Orc = {

  create: (userId, energy, level, exp, hp, mainhand, offhand, helm, mainhandTier, offhandTier, helmTier, orc) => {
    const sql = `
      INSERT INTO orcs(user_id, energy, level, exp, hp, mainhand, offhand, helm, mainhand_tier, offhand_tier, helm_tier, orc)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *
      `

    return db
      .query(sql, [userId, energy, level, exp, hp, mainhand, offhand, helm, mainhandTier, offhandTier, helmTier, orc])
      .then(dbRes => dbRes.rows[0].orc)
  },

  findByUsername: (username) => {
    const sql = `
        SELECT
          u.id as user_id
          ,username
          ,orc
        FROM users as u
        INNER JOIN orcs as o ON u.id = o.user_id
        WHERE username = $1;
      `
    return db
      .query(sql, [username])
      // .then(dbRes => console.log(dbRes))
      .then(dbRes => {
        if (dbRes.rows.length > 0) {
          return dbRes.rows[0]
        } else {
          return null
        }
      })
  }
}

module.exports = Orc