const express = require('express')
const router = express.Router()

// models
const Orc = require('../models/orc')

// routes
router.post('/', (req, res) => {
  const { orcToSummon } = req.body

  const userId = req.session.userId
  const energy = 100
  const level = 1
  const exp = 0
  const hp = 100

  // console.log(userId)
  Orc
    .create(userId, energy, level, exp, hp, orcToSummon.mainhand, orcToSummon.offhand, orcToSummon.helm, orcToSummon.mainhandTier, orcToSummon.offhandTier, orcToSummon.helmTier, orcToSummon.orc)
    .then(orc => res.json(orc))
})

router.post('/check', (req, res) => {
  const { loggedInUserName } = req.body

  Orc
    .findByUsername(loggedInUserName)
    // .then(orc => console.log(orc))
    .then(orcSummoned => {
      if (orcSummoned) {
        res.json(orcSummoned.orc)
      } else {
        res.json(null)
      }
    })
})


module.exports = router