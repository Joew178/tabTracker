// sequelize model for user account
module.exports = (sequelize, DataTypes) => 
sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
})