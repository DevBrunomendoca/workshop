import Image from "next/image";
import SecondTitle from "./SecondTitle";
import Paragraph from "./Paragraph";
import React, { useEffect, useState } from "react";

interface dataProgramationProps {
  id: string;
  titleCard: string;
  hoursCard: string;
  nameCard: string;
  subtitleCard?: string;
  paragraphCard: string;
}

const dataProgramationMatutino: dataProgramationProps[] = [
  {
    id: "1",
    titleCard: "Abertura",
    hoursCard: "8h30",
    nameCard: "ABERTURA",
    subtitleCard: "CAFÉ DA MANHÃ",
    paragraphCard: "Networking e credenciamento",
  },
  {
    id: "2",
    titleCard: "Abertura",
    hoursCard: "9h30",
    nameCard: "APRESENTAÇÃO DE ABERTURA",
    subtitleCard: "INICIO DO EVENTO",
    paragraphCard: "Entrada do evento",
  },
  {
    id: "3",
    titleCard: "Palestra",
    hoursCard: "9h45",
    nameCard: "BRUNNA ARUDA",
    subtitleCard: "DE ONDE NASCEM OS VENDEDORES",
    paragraphCard:
      "História das vendas, os diferentes tipos de vendedores, os desafios e oportunidades da profissão e as habilidades essenciais para o sucesso, a importância do vendedor para as empresas.",
  },
  {
    id: "4",
    titleCard: "Palestra",
    hoursCard: "10h05",
    nameCard: "ÉRICO GERMANO",
    subtitleCard: "PROCESSO DE VENDAS",
    paragraphCard:
      "Etapas do processo de vendas, desde a prospecção até o fechamento. Isso ajudará os iniciantes a entenderem a jornada completa.",
  },
  {
    id: "5",
    titleCard: "Palestra",
    hoursCard: "10h25",
    nameCard: "DIEGO OLIVEIRA",
    subtitleCard: "VENDAS, PERFORMANCE E STORYTELLING",
    paragraphCard:
      "Exploraremos como o storytelling impacta as vendas, estratégias para melhorar o desempenho dos vendedores e a integração entre vendas e marketing.",
  },
  {
    id: "6",
    titleCard: "Palestra",
    hoursCard: "10h45",
    nameCard: "FLÁVIA SANTOS",
    subtitleCard:
      "POSICIONAMENTO ESTRATÉGICO, IMAGEM E COMUNICAÇÃO: O IMPACTO NAS VENDAS",
    paragraphCard:
      "Exploraremos sobre como a imagem e posicionamento do vendedor influencia diretamente nos seus resultados",
  },
  {
    id: "7",
    titleCard: "Palestra",
    hoursCard: "11h05",
    nameCard: "BRUNNA ARUDA",
    subtitleCard: "DE ONDE NASCEM OS VENDEDORES",
    paragraphCard:
      "História das vendas, os diferentes tipos de vendedores, os desafios e oportunidades da profissão e as habilidades essenciais para o sucesso, a importância do vendedor para as empresas.",
  },
  {
    id: "8",
    titleCard: "Palestra",
    hoursCard: "11h25",
    nameCard: "ÉRICO GERMANO",
    subtitleCard: "PROCESSO DE VENDAS",
    paragraphCard:
      "Etapas do processo de vendas, desde a prospecção até o fechamento. Isso ajudará os iniciantes a entenderem a jornada completa.",
  },
  {
    id: "9",
    titleCard: "Palestra",
    hoursCard: "11h45",
    nameCard: "YASMIM MACEDO",
    subtitleCard: "COMO PROSPECTAR CLIENTES",
    paragraphCard:
      "Aborde estratégias para encontrar e atrair leads qualificados",
  },
  {
    id: "10",
    titleCard: "Roda de perguntas",
    hoursCard: "12h05",
    nameCard:
      "RODADA DE PERGUNTAS E RESPOSTAS COM OS PALESTRANTES DO PRIMEIRO BLOCO",
    subtitleCard: "Abertura para enquetes",
    paragraphCard: "Tire dúvidas e faça perguntas",
  },
];
const dataProgramationVespertino: dataProgramationProps[] = [
  {
    id: "1",
    titleCard: "Almoço",
    hoursCard: "13h05",
    nameCard: "INTERVALO ALMOÇO",
    subtitleCard: "FINGER FOOD - NERTWORKING",
    paragraphCard: "Pausa e intervalo para o almoço no local",
  },
  {
    id: "2",
    titleCard: "Reabertura",
    hoursCard: "14h05",
    nameCard: "RETORNO DAS PALESTRAS",
    subtitleCard: "Reabertura",
    paragraphCard: "Retorno das palestrar para após o almoço",
  },
  {
    id: "3",
    titleCard: "Palestra",
    hoursCard: "14h15",
    nameCard: "JOKASTHA MOURA",
    subtitleCard: "GERANDO UMA MENTALIDADE DE VENDEDOR",
    paragraphCard:
      "Porque vendedores precisam ter uma mentalidade forte e determinada, movido por ambições e propósitos.",
  },
  {
    id: "4",
    titleCard: "Palestra",
    hoursCard: "14h35",
    nameCard: "LUCAS MACIEL",
    subtitleCard: "COMO SE TORNAR UM GRANDE VENDEDOR ATRAVÉS DAS REDES SOCIAIS",
    paragraphCard:
      "Discuta habilidades essenciais e comportamentos esperados de vendedores.",
  },
  {
    id: "5",
    titleCard: "Palestra",
    hoursCard: "14h55",
    nameCard: "MARCO AURÉLIO",
    subtitleCard: "NÃO VENDA O PRODUTO, VENDA A EXPERIÊNCIA",
    paragraphCard:
      "Mostre como focar na experiência do cliente pode aumentar as vendas.",
  },
  {
    id: "6",
    titleCard: "Palestra",
    hoursCard: "15h15",
    nameCard: "EDSON BANDEIRA",
    subtitleCard: "PRODUTIVIDADE E ORGANIZAÇÃO:",
    paragraphCard:
      "Dicas para manter uma rotina produtiva, gerenciar leads e otimizar o tempo.",
  },
  {
    id: "7",
    titleCard: "Palestra",
    hoursCard: "15h35",
    nameCard: "ARTHUR MÁXIMO ",
    subtitleCard: "INVESTIDORES, COMO ALCANÇÁ-LOS",
    paragraphCard:
      "Estratégias para negociar com sucesso e fechar vendas significativas.",
  },
  {
    id: "8",
    titleCard: "Palestra",
    hoursCard: "15h55",
    nameCard: "ADRIANO CAMARGO",
    subtitleCard: "INTELIGÊNCIA ARTIFICIAL (IA) FERRAMENTAS NA PRÁTICA",
    paragraphCard:
      "Uma visão geral sobre IA, suas aplicações e como ela está transformando o cenário de vendas.",
  },
  {
    id: "9",
    titleCard: "Palestra",
    hoursCard: "16h15",
    nameCard: "RODADA DE PERGUNTAS E RESPOSAS",
    subtitleCard: "Início do bate-papo com todos os palestrantes da roda",
    paragraphCard: "Rodada de perguntas com todos os plaestrantes do bloco.",
  },
  {
    id: "10",
    titleCard: "Palestra",
    hoursCard: "17h30",
    nameCard: "ENCERRAMENTO",
    subtitleCard: "",
    paragraphCard: "",
  },
  {
    id: "11",
    titleCard: "JANTAR",
    hoursCard: "19h00",
    nameCard: "ENCERRAMENTO",
    subtitleCard: "JANTAR NA CABANA DO LAGO",
    paragraphCard: "Jantar para os palestrantes e convidados VIP.",
  },
];

const Programation: React.FC = () => {
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
    <section
      id="programation"
      className={`${
        banner ? "banner-programation-mobile" : "banner-programation-desktop"
      } h-full py-10 px-2`}
    >
      <div>
        <SecondTitle
          clasName="text-2xl text-first-color text-center "
          textSecondTitle="PROGRAMAÇÃO MATUTINO"
        />
        <div className="grid grid-cols-2 gap-5 py-8 md:grid-cols-3 max-w-7xl ml-auto mr-auto">
          {dataProgramationMatutino.map((item) => (
            <div
              className="flex flex-col items-start gap-2 px-2 py-4 w-full rounded-xl "
              style={{ backgroundColor: "rgba(110, 28, 3, 0.2)" }}
              key={item.id}
            >
              <h4 className="text-first-color font-extrabold">
                {item.titleCard}
              </h4>
              <div className="flex items-center gap-1">
                <Image
                  width={15}
                  height={15}
                  alt="icone horario"
                  src="/pace.webp"
                />
                <span className="text-first-color">{item.hoursCard}</span>
              </div>
              <h4 className="text-first-color font-extrabold">
                {item.nameCard}
              </h4>
              <h4 className="text-first-color font-extrabold">
                {item.subtitleCard}
              </h4>
              <Paragraph
                className="text-first-color"
                textParagraph={item.paragraphCard}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <SecondTitle
          clasName="text-2xl text-first-color text-center "
          textSecondTitle="PROGRAMAÇÃO VESPERTINO"
        />
        <div className="grid grid-cols-2 gap-5 py-8 md:grid-cols-3 max-w-7xl ml-auto mr-auto">
          {dataProgramationVespertino.map((item) => (
            <div
              className="flex flex-col items-start gap-2 px-2 py-4 w-full rounded-xl "
              style={{ backgroundColor: "rgba(110, 28, 3, 0.2)" }}
              key={item.id}
            >
              <h4 className="text-first-color font-extrabold">
                {item.titleCard}
              </h4>
              <div className="flex items-center gap-1">
                <Image
                  width={15}
                  height={15}
                  alt="icone horario"
                  src="/pace.webp"
                />
                <span className="text-first-color">{item.hoursCard}</span>
              </div>
              <h4 className="text-first-color font-extrabold">
                {item.nameCard}
              </h4>
              <h4 className="text-first-color font-extrabold">
                {item.subtitleCard}
              </h4>
              <Paragraph
                className="text-first-color"
                textParagraph={item.paragraphCard}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programation;
