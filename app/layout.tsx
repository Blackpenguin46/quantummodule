import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quantum Learning Module",
  description: "Learn quantum computing concepts interactively",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-16">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}