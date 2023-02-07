const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

// routes
// checking if user is logged in
router.get('/', (req, res) => {

  console.log(req.session)
  User
    .findById(req.session.userId)
    .then(user => {
      if (user) {
        res.json(user.username)
      } else {
        res.json(null)
      }
    })
})

// user log in
router.post('/', (req, res) => {
  const { name, password } = req.body

  User
    .findByUsername(name)
    .then(user => {
      if (name === '' || password === '') {
        res.status(400).json({ error: 'email and/or password cannot be blank' })
      } else {
        const isValidPassword = bcrypt.compareSync(password, user.password_digest)
        if (user && isValidPassword) {
          req.session.userId = user.id
          res.json(user.username)
        }
      }
    })
})

// user log out
router.delete('/', (req, res) => {
  req.session.userId = null
  res.json(req.session.userId)
})

module.exports = router