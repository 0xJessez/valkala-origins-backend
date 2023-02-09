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
  const { loggedInUserId } = req.body
  // console.log("hi")
  Orc
    .findByUserId(loggedInUserId)
    // .then(orc => console.log(orc))
    .then(orcSummoned => {
      if (orcSummoned) {
        res.json(orcSummoned)
      } else {
        res.json(null)
      }
    })
})

router.put('/energy', (req, res) => {
  const { energy, loggedInUserId } = req.body

  Orc
    .restoreEnergy(energy, loggedInUserId)
})


module.exports = router