import { createContext, useState, useContext, useEffect, Dispatch, SetStateAction } from "react";
// Define the expected shape of the context
interface AuthContextType {
    user: any; // Change 'any' to a specific type if you know the user structure
    setUser: Dispatch<SetStateAction<any>>;
    checkSession: () => Promise<void>;
  }
  
  // Create context with default value as 'null' (safer approach)
  const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
    checkSession: async () => {},
  });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  const checkSession = async () => {
    const response = await fetch("http://localhost:5000/api/session", {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json()
    console.log(data);
    setUser(data.user);

  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, checkSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
