import React from "react";

export default function Column(props: ColumnProps): JSX.Element {
  const className = props.className ? `column ${props.className}` : "column";
  return <div className={className}>{props.children}</div>;
}

interface ColumnProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}
