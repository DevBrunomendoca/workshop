import { FunctionComponent } from "react";

interface ParagraphProps {
  textParagraph: string;
  className?: string;
}

const Paragraph: FunctionComponent<ParagraphProps> = ({
  textParagraph,
  className,
}) => {
  return (
    <p className={` text-base font-normal ${className}`}>{textParagraph}</p>
  );
};

export default Paragraph;
