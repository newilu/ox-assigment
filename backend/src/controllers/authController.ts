import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import users from "../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  if (user) {
    const accessToken = sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "60m",
    });
    const refreshToken = sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ accessToken, refreshToken });
  } else {
    res.sendStatus(401);
  }
};

export const refreshToken = (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);
  verify(refreshToken, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    const accessToken = sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "60m",
    });
    res.json({ accessToken });
  });
};
