import { faCookie, faCopyright } from "@fortawesome/free-solid-svg-icons";

import Column from "./Column";
import Columns from "./Columns";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer(props: FooterProps): JSX.Element {
  return (
    <footer className="footer">
      <Container className="grid-xl">
        {props.children}
        <Columns>
          <Column>
            <span className="text text-cookie">
              <span className="">
                <FontAwesomeIcon icon={faCookie} />
              </span>
              {"このサイトはCookieを使用しています"}
            </span>
          </Column>
        </Columns>
        <Columns>
          <Column>
            <span className="text text-copyright">
              <span className="">
                <FontAwesomeIcon icon={faCopyright} />
              </span>
              {"minominolyly"}
            </span>
          </Column>
        </Columns>
      </Container>
    </footer>
  );
}

export interface FooterProps {
  children?: React.ReactNode | undefined;
}
