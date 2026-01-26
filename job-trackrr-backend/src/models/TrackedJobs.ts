import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./User";

export const TrackedJobs = sequelize.define(
  "TrackedJobs",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("applied", "interview", "offer", "rejected"),
    },
    interviewType: {
      type: DataTypes.ENUM("Virtual", "In_Person"),
      allowNull: true,
    },
    companyEmail: {
      type: DataTypes.STRING,
    },
    salaryExpectation: {
      type: DataTypes.INTEGER,
    },
    personalRating: {
      type: DataTypes.STRING,
    },
    appliedAt: {
      type: DataTypes.DATE,
    },
    interviewDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    jobType: {
      type: DataTypes.ENUM("Full_Time", "Part_Time", "Contract", "Internship"),
    },
    workType: {
      type: DataTypes.ENUM("Remote", "Hybrid", "On-Site"),
    },
  },
  {
    timestamps: true,
  },
);
