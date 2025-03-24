"use client";

import { Header } from "@/components/Header";
import { useAuth } from "../context/authContext";
import { useLoginStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "@/models/user";
import SideMenu from "@/components/SideMenu";

export default function Dashboard() {
  const { user, checkSession } = useAuth();
  const router = useRouter();

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className="w-screen h-screen">
      <Header />
      <SideMenu />
      <div className="flex justify-center pt-10 h-full w-full bg-gray-500/6">
           
        <h2 className="font-barlow text-4xl">
          <span className="text-gray-600">Hello, </span>
          <span className="">{(user as User)?.name}</span>!
        </h2>
      </div>
    </div>
  );
}
