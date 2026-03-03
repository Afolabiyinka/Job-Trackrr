import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./User";

export const Resume = sequelize.define("Resume", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  resumeText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  suggestions: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});
