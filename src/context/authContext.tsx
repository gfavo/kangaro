import { User } from "@/models/user";
import { useRouter } from "next/router";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextType {
  user: any | User;
  loading: boolean;
  checkSession: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: {},
  loading: true,
  checkSession: () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const router = useRouter();


  const checkSession = async () => {
    if(router.pathname === '/verification/[verificationHash]') {
      const response = await fetch("http://localhost:5000/api/checkVerification", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      
    } else {
    try {
      const response = await fetch("http://localhost:5000/api/session", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
        router.replace(`/`);
      }
    } catch (e) {
      setUser(null);
      router.replace(`/`);
    } 
    setIsLoading(false);
  }
}
  useEffect(() => {
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, checkSession }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
