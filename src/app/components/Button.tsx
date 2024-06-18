import { FunctionComponent } from "react";

interface ButtonProps {
  className?: string;
  textBtn: string;
}

const Button: FunctionComponent<ButtonProps> = ({ className, textBtn }) => {
  return (
    <a href="#">
      <button
        className={`px-14 py-4 rounded-lg font-semibold text-base ${className}`}
        style={{ minWidth: "310px", border: "2px solid #FFFFFF" }}
      >
        {textBtn}
      </button>
    </a>
  );
};

export default Button;
