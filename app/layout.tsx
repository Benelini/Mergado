import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/providers/react-query-provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Currency converter",
  description:
    "This is a currency converter built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header className="self-center text-center text-4xl bg-black text-white font-medium pt-10">
          Currency Converter
        </header>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
