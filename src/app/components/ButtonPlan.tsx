import { FunctionComponent } from "react";

interface ButtonPlanProps {
  className: string;
  hrefBtn?: string;
}

const ButtonPlan: FunctionComponent<ButtonPlanProps> = ({
  className,
  hrefBtn,
}) => {
  return (
    <a target="_blank" href={hrefBtn}>
      <button
        className={`px-20 py-3 text-first-color rounded-3xl  ${className}`}
      >
        ASSINAR
      </button>
    </a>
  );
};

export default ButtonPlan;
