"use client";
import Button from "./components/Button";
import CardAbout from "./components/CardAbout";
import SecondTitle from "./components/SecondTitle";
import CardPlans from "./components/CardPlans";
import Programation from "./components/Programation";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ThirdTitle from "./components/ThirdTitle";

export default function Home() {
  const [banner, setBanner] = useState<boolean>(false);

  useEffect(() => {
    const handleSize = () => {
      window.innerWidth < 900 ? setBanner(true) : setBanner(false);
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <>
      <main className="mb-10">
        <section
          className={`${
            banner ? "banner-home-mobile" : "banner-home-desktop"
          } w-full h-screen `}
        >
          <div className="w-full h-full px-2 flex flex-col justify-end items-center  gap-4 pb-20 md:items-start md:justify-center max-w-7xl ml-auto mr-auto pb-0">
            <div className="hidden md:flex flex-col gap-2">
              <ThirdTitle
                className="text-first-color "
                textThirdTitle="Workshop"
              />
              <h1
                className="font-bold text-first-color text-5xl"
                style={{ maxWidth: "400px" }}
              >
                O Poder de Relacionar-se
              </h1>
            </div>
            <Button
              className="bg-first-color text-fourt-color"
              textBtn="COMPRAR INGRESSOS"
              href="#plans"
            />
            <Button
              className="bg-transparent text-first-color"
              textBtn="VER PALESTRANTES"
              href="#programation"
            />
          </div>
        </section>
        <section className="px-6 ">
          <div
            className={`${
              banner ? "banner-about-mobile" : "banner-about-desktop"
            } w-full  rounded-xl -mt-6 md:-mt-24`}
          ></div>
          <div className="flex flex-col gap-11 py-10">
            <div className="flex flex-col items-center gap-2">
              <SecondTitle
                clasName="text-fourt-color text-center px-30"
                textSecondTitle="PORQUE IR NESSE"
                textSpan="WORKSHOP?"
              />
              <div className="w-44 h-2 bg-second-color"></div>
            </div>
            <div className="flex flex-col items-center gap-12 md:flex-row justify-center max-w-7xl ml-auto mr-auto">
              <CardAbout
                urlImg="/icone-vendas.webp"
                titleCard="Técnicas De Vendas"
                paragraphCard="Aprender métodos e estratégias para fechamentos e efetivação de vendas"
              />
              <CardAbout
                urlImg="/icone-negociacao.webp"
                titleCard="Negociação"
                paragraphCard="Melhorar habilidade de negociação para alcançar acordos mutuamente benéficos"
              />
              <CardAbout
                urlImg="/icone-network.webp"
                titleCard="Network"
                paragraphCard="Oportunidade de conhecer pessoas e formar conexões valiosas para o seu negócio"
              />
            </div>
          </div>
        </section>
        <section className="px-6" id="plans">
          <div className="flex flex-col items-center gap-2">
            <SecondTitle
              clasName="text-center"
              textSecondTitle="PREÇOS E PLANOS"
            />
            <div className="w-44 h-2 bg-second-color"></div>
          </div>
          <CardPlans />
        </section>
        <Programation />
      </main>
      <Footer />
    </>
  );
}
