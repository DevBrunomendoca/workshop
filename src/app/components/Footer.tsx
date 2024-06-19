import Paragraph from "./Paragraph";
import SecondTitle from "./SecondTitle";

const Footer = () => {
  return (
    <footer>
      <div className="px-2 py-8 md:max-w-7xl ml-auto mr-auto">
        <SecondTitle
          clasName="text-third-color text-center"
          textSecondTitle="Não deixe escapar a chance de transformar sua carreira e negócios"
        />
        <Paragraph
          className="text-center pt-4"
          textParagraph="Volte agora e garanta seu ingresso para o WORKSHOP “O poder de relacionar-se!”"
        />
      </div>
    </footer>
  );
};

export default Footer;
