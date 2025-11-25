export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  age?: number | null;
}
// import{z} from 'zod';

// export  const UserSchema = z.object({
//     id: z.string().min(1,{message: "USer ID is required"}),
//     username: z.string().min(1,{message: "Username is required"}),
//     email: z.string().min(1,{message: "Email is required"}),
//     name: z.string().min(1,{message:"Name is required"}),
//     age: z.number().optional()
// });
// export type User = z.infer<typeof UserSchema>; // TypeScript type from Zod schema
