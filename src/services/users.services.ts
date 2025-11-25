import { userRepository } from "../repositories/users.repositories";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/users.controller";
import { User } from "../types/user.types";

export class UserService {
  getAllUsers(): User[] {
    return userRepository.getAll();
  }

  getUserById(id: string): User | undefined {
    return userRepository.getById(id);
  }

  createUser(data: CreateUserDTO): User | string {
    const { id, username, email } = data;

    if (userRepository.getById(id)) return "User ID already exists";
    if (userRepository.findByEmail(email)) return "Email already exists";
    if (userRepository.findByUsername(username)) return "Username already exists";

    return userRepository.create(data);
  }

  updateUser(id: string, data: UpdateUserDTO): User | string | undefined {
    const existing = userRepository.getById(id);
    if (!existing) return undefined;

    if (userRepository.findByEmail(data.email) && userRepository.findByEmail(data.email)?.id !== id)
      return "Email already exists";

    if (userRepository.findByUsername(data.username) && userRepository.findByUsername(data.username)?.id !== id)
      return "Username already exists";

    const updatedUser: User = { ...existing, ...data };
    return userRepository.update(id, updatedUser);
  }

  deleteUser(id: string): boolean {
    return userRepository.delete(id);
  }
}

export const userService = new UserService();
