import React from "react";

export default function FormLabel(props: FormLabelProps): JSX.Element {
  const className = props.className ? `form-label ${props.className}` : "form-label";
  return <label {...props} className={className}>{props.children}</label>;
}

interface FormLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}
