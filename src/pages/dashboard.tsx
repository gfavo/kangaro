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
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex-1 flex">
        <SideMenu />
        <div className="flex flex-col items-center pt-10 h-full w-full">
          <h2 className="font-barlow text-4xl">
            <span className="text-gray-600">Hello, </span>
            <span className="">{(user as User)?.name}</span>!
          </h2>
          <span>
            Role: 
            <label className="text-green-500"> {(user as User)?.role}</label>
          </span>
        </div>
      </div>
    </div>
  );
}
