'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      User.hasMany(models.Wallet, { foreignKey: 'user_id', as: 'user_wallet' })
      User.hasMany(models.WalletTransaction, { foreignKey: 'id', as: 'user_transaction' })
      User.hasMany(models.WalletWithdrawals, { foreignKey: 'id', as: 'user_withdrawals' })
    }
  }
  User.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    security_code: DataTypes.STRING,
    photo: DataTypes.STRING,
    email_verified: DataTypes.BOOLEAN,
    phone_verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  })
  return User
}
