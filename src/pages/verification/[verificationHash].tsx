import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [message, setMessage] = useState();

  console.log(router.query)
  const verifyUser = async () => {
    const response = await fetch(
      "http://localhost:5000/api/user/verificateUser",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({hash: `${router.query.verificationHash}`})
      }
    );

    const data = await response.json();
    setMessage(data);
  };

  useEffect(() => {
    verifyUser();
  }, [router]);
 

  return <div>{message}</div>;
}
