import { createContext, useState, useContext, useEffect, Dispatch, SetStateAction } from "react";

interface AuthContextType {
    user: any; 
    setUser: Dispatch<SetStateAction<any>>;
    checkSession: () => Promise<void>;
  }
  
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
