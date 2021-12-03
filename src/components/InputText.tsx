import React from "react";

export default function InputText(props: InputTextProps): JSX.Element {
  const className = props.className ? `form-input ${props.className}` : "form-input";
  return <input {...props} className={className} />;
}

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
