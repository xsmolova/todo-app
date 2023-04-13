import React from "react";

interface Props {
  children?: string;
  type?: any;
  center?: boolean;
}

const CustomButton = ({ children, type, center }: Props) => (
  <button
    type={type || null}
    className={`btn btn-block mt-6 bg-primary hover:bg-primary-focus border-none text-white normal-case w-full max-w-xs ${
      center ? " justify-center" : " justify-start"
    }`}
  >
    {children}
  </button>
);

export default CustomButton;
