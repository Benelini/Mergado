import Image from "next/image";
import { Combobox } from "@/components/ui/combobox";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
      <Combobox />
    </main>
  );
}
