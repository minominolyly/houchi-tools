import React from "react";

export default function FormGroup(props: FormGroupProps): JSX.Element {
  const className = props.className ? `form-group ${props.className}` : "form-group";
  return <div className={className}>{props.children}</div>;
}

interface FormGroupProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}
