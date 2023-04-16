import React from "react";

interface Props {
  children?: string;
  type?: any;
  center?: boolean;
  className?: string;
}

const CustomButton = ({ children, type, center, className }: Props) => (
  <button
    type={type || null}
    className={`btn btn-block mt-6 bg-primary hover:bg-primary-focus border-none text-white normal-case w-full max-w-full ${
      center ? " justify-center" : " justify-start"
    }${className && ` ${className}`}
      `}
  >
    {children}
  </button>
);

export default CustomButton;
