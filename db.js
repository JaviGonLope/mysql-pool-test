const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "127.0.0.1",
    username: "root",
    password: "",
    database: "test",
    port: 3306,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 20 * 1000,
      acquire: 90000 // default = 60000
    },
  });

module.exports = sequelize