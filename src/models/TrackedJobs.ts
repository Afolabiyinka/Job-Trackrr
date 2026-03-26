import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./User";
import { InterviewType, Job, JobType, Status, WorkType } from "../types/job";
import { models } from "../types/models";


interface JobAttributes extends Job {
  userId?: string | number;
  createdAt?: Date;
  updatedAt?: Date;
}


export class TrackedJobs extends Model<JobAttributes> implements JobAttributes {
  public id!: string | number;
  public company!: string;
  public role!: string;
  public appliedAt!: string | Date;
  public status!: Status;
  public interviewType!: InterviewType;
  public jobType!: JobType;
  public workType!: WorkType;
  public interviewDate!: string | Date;
  public companyEmail!: string;
  public salaryRange!: number;
  public feedback!: string;

  static associate(models: models) {
    this.belongsTo(models.User, {
      as: "user", foreignKey: "userId"
    })
  }

}

TrackedJobs.init(
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
    salaryRange: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    feedback: {
      type: DataTypes.STRING,
      allowNull: true
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
    sequelize,
    modelName: "User",
    tableName: "Users"
  },
)
