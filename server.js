require('./config')
const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.listen(3000)
require('mongoose').connection.once('open', () =>app.listen(3001))