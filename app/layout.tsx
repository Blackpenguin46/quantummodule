import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import type React from "react"; // Import React

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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen`}>
        {/* Header */}
        <Header />

        {/* Main Content Wrapper */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <main className="w-full max-w-6xl px-6 py-8">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </div>
      </body>
    </html>
  );
}
