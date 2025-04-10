"use client";

import type { AppProps } from "next/app";
import { AuthProvider, useAuth } from "../context/authContext";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
        {" "}
        <Component {...pageProps} />{" "}
    </AuthProvider>
  );
}
