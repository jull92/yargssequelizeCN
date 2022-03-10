require("dotenv").config();

const {Sequelize} = require("sequelize");
console.log(process.env.MYSQL_URI)
exports.sequelize = new Sequelize(process.env.MYSQL_URI);