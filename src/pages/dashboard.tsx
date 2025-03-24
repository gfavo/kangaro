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


  return (
    <div>
    <Header />
    <div className="flexbox h-full w-full bg-gray-500/6"></div>
    </div>
  );
}
