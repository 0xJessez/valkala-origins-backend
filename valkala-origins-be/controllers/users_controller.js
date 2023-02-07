const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

// routes
router.post('/', (req, res) => {
  const { name, password } = req.body

  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  User
    .create(name, passwordDigest)
    .then(userName => res.json(userName))
})

router.get('/', (req, res) => {
  const { name, password } = req.body

  User
    .findByUsername(name)
    .then(user => {
      if (user) {
        res.json(user.username)
      } else {
        res.json(null)
      }
    })
})


module.exports = router