import Sequelize from "sequelize";

const database = new Sequelize("l2_ig", "root", "mysql2000", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorAliases: false,
});

export default database;
