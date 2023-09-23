"use client"
import "./globals.css";
import type {
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "./modules/header";
import Footer from "./modules/footer";
import clsx from "clsx";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import createApolloClient from "../../apollo-client";

const IS_SERVER = typeof window === "undefined";

const grotesk = localFont({
  src: [
    {
      path: "./font/cabinet-grotesk/CabinetGrotesk-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "./font/cabinet-grotesk/CabinetGrotesk-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "./font/cabinet-grotesk/CabinetGrotesk-Black.woff2",
      style: "normal",
      weight: "900",
    },
  ],
  variable: "--font-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(grotesk.className, "bg-white")}>
      <body className="max-w-screen bg-white bg-none">
        <ApolloProvider client={createApolloClient()}>
          <Header />
          {children}
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
