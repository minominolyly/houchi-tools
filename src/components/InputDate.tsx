import React from "react";

export default function InputDate(props: InputDateProps): JSX.Element {
  const className = props.className
    ? `form-input ${props.className}`
    : "form-input";
  return <input type="date" {...props} className={className} />;
}

interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {}
