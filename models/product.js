module.exports = function(sequelize, DataTypes){
  return sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  })
}