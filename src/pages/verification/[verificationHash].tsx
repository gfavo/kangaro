import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  console.log(router.query)
  const verifyUser = async () => {
    const response = await fetch(
      "http://localhost:5000/api/user/verificateUser",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(router.query),
      }
    );

    const data = await response.json();
  };

  useEffect(() => {
    
  }, []);
  verifyUser();

  return <div>{router.query.verificationHash}</div>;
}
