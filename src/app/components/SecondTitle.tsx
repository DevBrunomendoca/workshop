import { FunctionComponent } from "react";

interface SecondTitleProps {
  textSecondTitle: string;
  clasName?: string;
  textSpan?: string;
}

const SecondTitle: FunctionComponent<SecondTitleProps> = ({
  textSecondTitle,
  clasName,
  textSpan,
}) => {
  return (
    <h2 className={`text-4xl font-extrabold  ${clasName}`}>
      {textSecondTitle} <span className="text-second-color">{textSpan}</span>
    </h2>
  );
};

export default SecondTitle;
