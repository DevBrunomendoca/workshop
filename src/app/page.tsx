import Image from "next/image";
import Button from "./components/Button";
import CardAbout from "./components/CardAbout";
import SecondTitle from "./components/SecondTitle";

export default function Home() {
  return (
    <main className="mb-10">
      <section className="w-full h-screen banner-home-mobile flex flex-col items-center justify-end pb-16">
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
      <section className="px-6 ">
        <div className="banner-about-mobile w-full h-40 rounded-xl -mt-5"></div>
        <div className="flex flex-col gap-11 py-10">
          <div className="flex flex-col items-center gap-2">
            <SecondTitle
              clasName="text-fourt-color text-center px-40"
              textSecondTitle="Porque ir nesse"
              textSpan="Workshop?"
            />
            <div className="w-44 h-2 bg-second-color"></div>
          </div>
          <div className="flex flex-col items-center gap-12">
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
    </main>
  );
}
