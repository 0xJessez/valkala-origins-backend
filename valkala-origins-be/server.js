const express = require('express')
const dotenv = require('dotenv').config()

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const orcsController = require('./controllers/orcs_controller')

const app = express()
const PORT = 3001

// start web server
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))

// middleware functions passed into app.use
app.use(logger)
app.use(express.static('client'))
app.use(express.json())
app.use(sessions)

// middleware for controller routes
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
app.use('/api/orcs', orcsController)

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}