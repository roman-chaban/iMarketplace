import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";

interface AuthProvider {
  children: ReactNode;
}

export interface User {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare, @typescript-eslint/no-unused-vars
export const AuthProvider = ({ children }: AuthProvider) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = (newUser: User, callback: () => void) => {
    setIsSignedIn(true);
    setUser(newUser);
    callback();
  };
  const signOut = (callback: () => void) => {
    setIsSignedIn(false);
    setUser(null);
    callback();
  };

  const value = { user, signIn, signOut, isSignedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
