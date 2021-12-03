import React from "react";

export default function Textarea(props: TextareaProps): JSX.Element {
  const className = props.className ? `form-input ${props.className}` : "form-input";
  return <textarea {...props} className={className} />;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}