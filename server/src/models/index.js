const fs = require('fs') // to read through file system
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

//below is for connectiing to the db
const sequelize = new Sequelize(  // grabbing info from config and passing it to the structure
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// read all files in the models folder that are not called index.js
fs
  .readdirSync(__dirname)
  .filter((file) => 
      file !== 'index.js'
  )
  .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file)) //load the files into sequelize
      db[model.name] = model
  })

  db.sequelize = sequelize
  db.Sequelize = sequelize

  module.exports = db
