import React from "react";

export default function Container(props: ContainerProps): JSX.Element {
  const className = props.className
    ? `container ${props.className}`
    : "container";
  return <div className={className}>{props.children}</div>;
}

export interface ContainerProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}
