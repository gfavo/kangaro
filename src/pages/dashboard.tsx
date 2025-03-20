"use client";

import { Header } from "@/components/header";
import { useAuth } from "../context/authContext";
import { useLoginStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, checkSession } = useAuth();
  const router = useRouter();

  useEffect(() => {
    checkSession();
  }, []);

  const logout = async () => {
    const response = await fetch("http://localhost:5000/api/session/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if(response.ok) {
      router.replace('/');
    }
  };

  return (
    <>
    <Header />
      <button onClick={logout}>Logout</button> <p>Hello! {user?.email}</p>;
    </>
  );
}
