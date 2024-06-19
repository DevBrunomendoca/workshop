import Image from "next/image";
import { FunctionComponent } from "react";
import ThirdTitle from "./ThirdTitle";
import Paragraph from "./Paragraph";

interface CardAboutProps {
  urlImg: string;
  titleCard: string;
  paragraphCard: string;
}

const CardAbout: FunctionComponent<CardAboutProps> = ({
  urlImg,
  titleCard,
  paragraphCard,
}) => {
  return (
    <div className="flex flex-col items-center gap-5 px-20 md:px-6">
      <Image width={86} height={86} alt="Imagem Card" src={urlImg} />
      <ThirdTitle className="text-center" textThirdTitle={titleCard} />
      <Paragraph className="text-center" textParagraph={paragraphCard} />
    </div>
  );
};

export default CardAbout;
