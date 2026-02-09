import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./User";

export const Contacts = sequelize.define("Contacts", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
