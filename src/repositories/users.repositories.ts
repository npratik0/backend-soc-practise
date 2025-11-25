import { User } from "../types/user.types";

let users: User[] = [
  { id: "user1", username: "john_doe", email: "john@example.com", name: "John Doe", age: 30 },
  { id: "user2", username: "jane_smith", email: "jane@example.com", name: "Jane Smith", age: 25 },
];

export class UserRepository {
  getAll(): User[] {
    return users;
  }

  getById(id: string): User | undefined {
    return users.find(u => u.id === id);
  }

  create(user: User): User {
    users.push(user);
    return user;
  }

  update(id: string, updated: User): User | undefined {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return undefined;
    users[index] = updated;
    return updated;
  }

  delete(id: string): boolean {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  }

  findByEmail(email: string): User | undefined {
    return users.find(u => u.email === email);
  }

  findByUsername(username: string): User | undefined {
    return users.find(u => u.username === username);
  }
}

export const userRepository = new UserRepository();
