import React from "react";

export default function Columns(props: ColumnsProps): JSX.Element {
  const className = props.className ? `columns ${props.className}` : "columns";
  return <div className={className}>{props.children}</div>;
}

interface ColumnsProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}
