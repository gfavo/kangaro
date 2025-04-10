"use client";

import { Header } from "@/components/Header";
import { useAuth } from "../context/authContext";
import { useLoginStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "@/models/user";
import SideMenu from "@/components/SideMenu";
import { DashboardRouter } from "@/components/DashTabs/DashboardRouter";

export default function Dashboard() {
  const { user, checkSession } = useAuth();
  const router = useRouter();

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex-1 flex ">
        <SideMenu />
        <div className="flex w-full justify-center">
          {" "}
          <DashboardRouter />
        </div>
      </div>
    </div>
  );
}
