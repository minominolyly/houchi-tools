import React from "react";

export default function Menu(props: MenuProps): JSX.Element {
  const className = props.className ? `menu ${props.className}` : "menu";
  return <ul className={className}>{props.children}</ul>;
}

interface MenuProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}
