import Paragraph from "./Paragraph";
import ButtonPlan from "./ButtonPlan";

const CardPlans = ({}) => {
  return (
    <div className="flex flex-col items-center gap-6 py-8 md:flex-row md:items-start max-w-7xl ml-auto mr-auto">
      <div
        className="w-full flex flex-col items-center gap-8 "
        style={{ border: "2px solid #FF9A01", borderRadius: "20px" }}
      >
        <div
          className={`w-full bg-second-color flex flex-col items-center py-10`}
          style={{ borderRadius: "15px 15px 0 0" }}
        >
          <h4 className="text-bold text-sm text-first-color">
            <s>PRIMEIRO LOTE</s>
            <span className="pl-2 font-bold text-xl text-red-600">
              ESGOTADO
            </span>{" "}
          </h4>
          <div className="w-20 bg-first-color" style={{ height: "1px" }}></div>
          <h2 className="font-extrabold text-6xl text-first-color pt-4">
            97,00
          </h2>
        </div>
        <div className="text-center flex flex-col gap-5">
          <Paragraph textParagraph="Vagas limitadas" />
          <Paragraph textParagraph="Valor Exclusivo" />
          <Paragraph textParagraph="Café da manhã" />
          <Paragraph textParagraph="Almoço com Network" />
          <Paragraph textParagraph="Rodada de Perguntas" />
        </div>
        <ButtonPlan
          hrefBtn="https://sun.eduzz.com/2408128"
          className="bg-second-color mb-4"
        />
      </div>
      <div
        className="w-full flex flex-col items-center gap-8 "
        style={{ border: "2px solid #FF9A01", borderRadius: "20px" }}
      >
        <div
          className={`w-full bg-second-color flex flex-col items-center py-10`}
          style={{ borderRadius: "15px 15px 0 0" }}
        >
          <h4 className="text-bold text-sm text-first-color">SEGUNDO LOTE</h4>
          <div className="w-20 bg-first-color" style={{ height: "1px" }}></div>
          <h2 className="font-extrabold text-6xl text-first-color pt-4">
            147,00
          </h2>
        </div>
        <div className="text-center flex flex-col gap-5">
          <Paragraph textParagraph="Vagas limitadas" />
          <Paragraph textParagraph="Valor Exclusivo" />
          <Paragraph textParagraph="Café da manhã" />
          <Paragraph textParagraph="Almoço com Network" />
          <Paragraph textParagraph="Rodada de Perguntas" />
        </div>
        <ButtonPlan
          hrefBtn="https://sun.eduzz.com/2408128"
          className="bg-second-color mb-4"
        />
      </div>
      <div
        className="w-full flex flex-col items-center gap-8  h-full"
        style={{ border: "2px solid #6E1C03", borderRadius: "20px" }}
      >
        <div
          className={`w-full bg-third-color flex flex-col items-center py-10`}
          style={{ borderRadius: "15px 15px 0 0" }}
        >
          <h4 className="text-bold text-sm text-first-color">ACESSO VIP</h4>
          <div className="w-20 bg-first-color" style={{ height: "1px" }}></div>
          <h2 className="font-extrabold text-6xl text-first-color pt-4">
            397,00
          </h2>
        </div>
        <div className="text-center flex flex-col gap-5">
          <Paragraph textParagraph="Vagas limitadas" />
          <Paragraph textParagraph="Valor Exclusivo" />
          <Paragraph textParagraph="Café da manhã" />
          <Paragraph textParagraph="Almoço com Network" />
          <Paragraph textParagraph="Rodada de Perguntas" />
          <Paragraph textParagraph=" Jantar com palestrantes" />
          <Paragraph textParagraph=" Reunião on-line com palestrante" />
        </div>
        <ButtonPlan
          hrefBtn="https://sun.eduzz.com/2408129"
          className="bg-third-color mb-4"
        />
      </div>
    </div>
  );
};

export default CardPlans;
