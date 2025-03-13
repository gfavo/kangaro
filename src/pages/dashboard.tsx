"use client";

import { useAuth } from "../context/authContext";
import { useLoginStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, checkSession } = useAuth();
  const [loading, setLoading] = useState(true); 
  const router = useRouter();
  useEffect(() => {
    const pullSession = async () => {
      await checkSession();
      setLoading(false);
    };
    pullSession();
  }, []);

  useEffect(() => {
    if (!loading && user == null) {
      router.replace("/");
    }
  }, [user, loading]);

  if(loading) return <p></p>;

  return <p>Hello {user.email}!</p>;
}
