import React, { useState } from "react";

export default function HeroAccordion(props: HeroAccordionProps) {
  const className = props.className
    ? `accordion ${props.className}`
    : "accordion";
  const headerClassName = props.headerClassName
    ? `accordion-header ${props.headerClassName}`
    : "accordion-header";
  const bodyClassName = props.bodyClassName
    ? `accordion-body ${props.bodyClassName}`
    : "accordion-body";
  return (
    <div className={className}>
      <input
        type="checkbox"
        id={props.id}
        name="accordion-checkbox"
        hidden={true}
        checked={props.checked}
        onChange={props.onChange ? props.onChange : () => {}}
      />
      <label className={headerClassName} htmlFor={props.id}>
        <i className="icon icon-arrow-right mr-1"></i>
        {props.title}
      </label>
      <div className={bodyClassName}>{props.children}</div>
    </div>
  );
}

interface HeroAccordionProps {
  id: string;
  checked?: boolean;
  className?: string | undefined;
  headerClassName?: string | undefined;
  bodyClassName?: string | undefined;
  title: JSX.Element | string;
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
