import { NextFunction, Request, Response } from "express";
import { CreateUserRequest, LoginUserRequest } from "../models/userModel";
import { UserService } from "../services/userService";

export class UserController {
  // === REGISTER ===
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.register(request);
      res.status(201).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }

  // === LOGIN ===
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const request: LoginUserRequest = req.body as LoginUserRequest;
      const response = await UserService.login(request);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
}
