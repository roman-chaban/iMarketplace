import { createContext } from "react";
import { User } from "./AuthProvider";

interface AuthContextType {
   user: User | null;
   signIn: (newUser: User, callback: () => void) => void;
   signOut: (callback: () => void) => void;
 }

export const AuthContext = createContext<AuthContextType>({
   user: null,
   signIn: () => {},
   signOut: () => {},
 });
 