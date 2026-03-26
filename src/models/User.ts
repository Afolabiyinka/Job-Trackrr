import { DataTypes, Model } from "sequelize";
import { models } from "../types/models";
import { sequelize } from "../config/db";

interface UserAttributes {
  id?: string;
  username: string;
  password: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Extend sequelize's model 

export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: string;
  public email!: string;
  public username!: string;
  public password!: string;

  static associate(models: models) {
    this.hasMany(models.TrackedJobs, {
      as: "job", foreignKey: "userId"
    })
  }
}
//Iniatilize model
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
  timestamps: true,
  sequelize,
  modelName: "Tracked Job",
  tableName: "Tracked Jobs"
}
)

