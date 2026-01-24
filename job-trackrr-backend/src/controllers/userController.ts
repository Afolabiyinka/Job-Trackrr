import { Response } from "express";
import { AuthenticatedRequest } from "../types/request/types";
import { User } from "../models/User";

const getUser = async (req: AuthenticatedRequest, res: Response) => {
  const id = req.user?.id;

  if (!id) {
    return res.status(400).json({
      message: "User Id is required",
    });
  }

  try {
    const user = await User.findByPk(id);
    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    res.status(200).json({
      user: {
        username: user.getDataValue("username"),
        email: user.getDataValue("email"),
        profilePic: user.getDataValue("profilePic"),
      },
    });
  } catch (err) {}
};
export { getUser };
