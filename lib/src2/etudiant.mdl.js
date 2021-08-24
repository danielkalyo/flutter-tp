import { DataTypes } from "sequelize";
import database from "./database";

const Etudiant = database.define(
  "etudiant",
  {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postnom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addresse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Etudiant;
