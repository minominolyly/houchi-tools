import React from "react";

export default function MenuItem(props: MenuItemProps): JSX.Element {
  const className = props.className ? `menu-item ${props.className}` : "menu-item";
  return <li className={className}>{props.children}</li>;
}

interface MenuItemProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}
