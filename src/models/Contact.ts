import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./User";
import { ContactPayload } from "../types/contact";


interface ContactAttributes extends ContactPayload {
  userId?: string | number;
  createdAt?: Date;
  updatedAt?: Date
}

export class Contacts extends Model<ContactAttributes> implements ContactAttributes {
  public name!: string;
  public id!: string | number;
  public role!: string;
  public email!: string;
  public phoneNumber!: string;
  public socialLinks!: string[];

}

Contacts.init(


  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    socialLinks: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },

  }, {
  sequelize,
  timestamps: true,
  modelName: "Contact",
  tableName: "Contacts"
}

)

