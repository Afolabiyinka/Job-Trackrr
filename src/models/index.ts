import { sequelize } from "../config/db";
import { TrackedJobs } from "./TrackedJobs";
import { User } from "./User";

export const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } in development to drop and recreate tables
    console.log("All models synchronized successfully.");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
};

//Associations

User.hasMany(TrackedJobs, { as: "job", foreignKey: "userId" });

TrackedJobs.belongsTo(User, { as: "user", foreignKey: "userId" });
