import "../sass/common.scss";

import { faGithubAlt, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import Column from "../components/Column";
import Columns from "../components/Columns";
import Firebase from "../configurations/firebase.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

export default function BasicLayout(props: BasicLayout): JSX.Element {
  const firebaseApp = Firebase.instance;

  return (
    <div className="tabula">
      <Header />
      <main className="main">{props.children}</main>
      <Footer>
        <Columns>
          <Column>
            {/* <a
              href="https://twitter.com/minominolyly"
              target="_blank"
              className="m-2"
              rel="noopener noreferrer"
            >
              <span className="">
                <FontAwesomeIcon icon={faTwitter} size={"lg"} />
              </span>
            </a>
            <a
              href="https://github.com/minominolyly"
              target="_blank"
              className="m-2"
              rel="noopener noreferrer"
            >
              <span className="">
                <FontAwesomeIcon icon={faGithubAlt} size={"lg"} />
              </span>
            </a>
            <a
              href="https://instagram.com/minominolyly"
              target="_blank"
              className="m-2"
              rel="noopener noreferrer"
            >
              <span className="">
                <FontAwesomeIcon icon={faInstagram} size={"lg"} />
              </span>
            </a> */}
          </Column>
          <Column></Column>
        </Columns>
      </Footer>
    </div>
  );
}

interface BasicLayout {
  children?: React.ReactNode | undefined;
}
