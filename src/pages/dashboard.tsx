"use client";

import { useAuth } from "../context/authContext";
import { useLoginStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, checkSession } = useAuth();

  useEffect(() => {
    checkSession();
  }, []);

  return <p>Hello! {user?.email}</p>;
}
