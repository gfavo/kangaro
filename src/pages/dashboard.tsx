"use client";

import { useLoginStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { loggedIn, setLoggedIn } = useLoginStore();
  const router = useRouter();
  if (!loggedIn) {
    useEffect(() => {
      router.push("/initialview");
    }, [router]);
    return null;
  } else {
    return <p>Dashboard</p>;
  }

}
