"use client";
import { ConvertCurrency } from "@/components/convert-currency";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
      <ConvertCurrency />
    </main>
  );
}
