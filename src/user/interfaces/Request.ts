import { Request } from "express";
import { User } from "./User";

export interface CustomRequest extends Request {
  user: {
    email: string;
    sub: number;
    role: string;
    iat: number;
    exp: number;
  };
}
