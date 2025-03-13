"use client";

import { useAuth } from "../context/authContext"
import { useLoginStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { loggedIn } = useLoginStore();
  const router = useRouter();
  const { user } = useAuth();
  console.log(user);
  if (!loggedIn) {
    useEffect(() => {
      router.push("/initialview");
    }, [router]);
    return null;
  } else {
    return <p>Hello {user.email}</p>;
  }

}
