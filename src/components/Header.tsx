import { Link } from "gatsby";
import React from "react";

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <Link className="navbar-brand text-bold mr-2" to="/">
          {"放置少女ツール"}
        </Link>
        <Link className="btn btn-link" to="/strategist-tools">
          {"軍師ツール"}
        </Link>
        {/* <Link className="btn btn-link" to="/onigiri-manager">
          {"おにぎりマネージャー"}
        </Link> */}
        {/* <Link className="btn btn-link" to="https://github.com/minominolyly/houchi-tools" rel="noopener noreferrer">
          GitHub
        </Link> */}
      </section>
    </header>
  );
}

export interface HeaderProps {
  children?: React.ReactNode | undefined;
}
