"use client";

import { useFormStore } from "@/store/store";
import { Signup } from "@/components/Signup";
import { Login } from "@/components/Login";
import Verification from "@/components/Verification";
import { useAuth } from "@/context/authContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function InitialView() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user != null) {
      router.push("/dashboard");
    }
  }, [user]);

  const { type } = useFormStore();

  const ComponentRouter = () => {
    switch(type) {
    case "login":
      return <Login />;
      break
    case "signup":
      return <Signup />
    case "verification":
      return <Verification />
    }
  }
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="flex h-screen flex-col w-1/2 h-screen">
          <div className="flex flex-col m-auto mt-20 w-100 h-100 items-center ">
            <img src="logo.png" className="w-50 h-50 mb-3" alt="" />
            <div>
              <h3 className="text-5xl font-bold">Get Started</h3>
              <span className="text-gray-800/80 font-medium">
                Log-in or create account
              </span>
            </div>
            <ComponentRouter/>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-screen relative shadow-lg shadow-gray-500">
          <img src="/login.png" className="h-screen" alt="walpapper" />
        </div>
      </div>
    </>
  );
}
