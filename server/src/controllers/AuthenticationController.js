const {User} = require('../models') // can use models difinde in the models folder in callbacks

module.exports = {
  async register (req, res) { //register endpoint
    try {
    const user = await User.create(req.body) // try to create a user
    res.send(user.toJSON()) // send user object back to client who requested endpoint
    } catch (err) {
      // email already exists
        res.status(400).send({
          error: 'this email account is already in use.'
        })
      }
  }
}
