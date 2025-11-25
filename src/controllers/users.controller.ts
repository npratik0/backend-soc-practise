import { Request, Response } from "express";
import { userService } from "../services/users.services";

export class UserController {
  
  getAllUsers(req: Request, res: Response) {
    const users = userService.getAllUsers();
    return res.json(users);
  }

  getUserById(req: Request, res: Response) {
    const user = userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  }

  createUser(req: Request, res: Response) {
    const result = userService.createUser(req.body);

    if (typeof result === "string") {
      return res.status(409).json({ error: result });
    }

    return res.status(201).json(result);
  }

  updateUser(req: Request, res: Response) {
    const result = userService.updateUser(req.params.id, req.body);

    if (result === undefined) {
      return res.status(404).json({ error: "User not found" });
    }

    if (typeof result === "string") {
      return res.status(409).json({ error: result });
    }

    return res.json(result);
  }

  deleteUser(req: Request, res: Response) {
    const success = userService.deleteUser(req.params.id);
    if (!success) return res.status(404).json({ error: "User not found" });
    return res.status(204).send();
  }
}

export const userController = new UserController();
