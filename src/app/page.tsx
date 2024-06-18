import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="">
      <section className="w-full h-screen banner-home-mobile flex flex-col items-center justify-end pb-10">
        <div className="px-2 flex flex-col items-center gap-4">
          <Button
            className="bg-first-color text-fourt-color"
            textBtn="COMPRAR INGRESSOS"
          />
          <Button
            className="bg-transparent text-first-color"
            textBtn="VER PALESTRANTES"
          />
        </div>
      </section>
    </main>
  );
}
