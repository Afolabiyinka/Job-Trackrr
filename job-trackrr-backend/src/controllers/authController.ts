import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { LoginPayload, SignupPayload } from "../types/auth";
import { User } from "../models/User";

const jwtsecret = process.env.JWT_SECRET!;

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as LoginPayload;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email & Password is required",
    });
  }

  try {
    //Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //Compare if the password matches
    const passwordMatch = await bcrypt.compare(
      password,
      user.getDataValue("password"),
    );

    if (!passwordMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const token = jwt.sign({ id: user?.getDataValue("id") }, jwtsecret, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Login Succesfull",
      token,
      user: {
        username: user.getDataValue("username"),
        email: user.getDataValue("email"),
        profilePic: user.getDataValue("profilePic"),
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

const signup = async (req: Request, res: Response) => {
  const { email, password, username } = req.body as SignupPayload;
  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ message: "Email, Username & Password is required" });
  }
  try {
    //Check if the email is already taken
    const emailTaken = await User.findOne({ where: { email } });
    if (emailTaken) {
      return res.status(400).json({ message: "Email already taken" });
    }
    //Hashing the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user?.getDataValue("id") }, jwtsecret, {
      expiresIn: "7d",
    });
    res.status(200).json({
      message: "Account created succesfully",
      token,
      user: {
        username: user.getDataValue("username"),
        email: user.getDataValue("email"),
        profilePic: user.getDataValue("profilePic"),
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

export { login, signup };
