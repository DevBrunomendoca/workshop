import { FunctionComponent } from "react";

interface ThirdTitleProps {
  textThirdTitle: string;
  className?: string;
}

const ThirdTitle: FunctionComponent<ThirdTitleProps> = ({
  textThirdTitle,
  className,
}) => {
  return <h3 className={`text-lg font-bold ${className}`}>{textThirdTitle}</h3>;
};

export default ThirdTitle;
