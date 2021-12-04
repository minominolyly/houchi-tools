import React, { useState } from "react";

import Accordion from "../components/Accordion";
import BasicLayout from "../layouts/BasicLayout";
import Container from "../components/Container";
import KeikokuMessageGenerator from "../components/KeikokuMessageGenerator";
import Seo from "../components/Seo";
import TwitterShareButton from "../components/TwitterShareButton";

const initialState: ChatPageState = {
  isOpenKeikokuGunyuuMessageGenerator: true,
};

export default function StrategistToolsPage(): JSX.Element {
  const [state, setState] = useState(initialState);
  return (
    <BasicLayout>
      <Seo title="軍師ツール" />
      <div className="hero bg-secondary">
        <div className="hero-body">
          <Container className="grid-xl">
            <h1>{"軍師ツール"}</h1>
            <p>{"軍師が使うコピペツールです"}</p>
          </Container>
        </div>
      </div>
      <Container className="grid-xl">
        <section>
          <TwitterShareButton url="https://houchi-tools.firebaseapp.com/strategist-tools" />
        </section>
        <div>
          <div className="hero hero-sm bg-primary p-1">
            <div className="hero-body">
              <h2>{"傾国・群雄メッセージジェネレーター"}</h2>
              <p>{"傾国・群雄の指示をコピペできるツールです。"}</p>
            </div>
          </div>
          <div className="bg-secondary p-1">
            <div>
            </div>
            <KeikokuMessageGenerator />
          </div>
        </div>
      </Container>
    </BasicLayout>
  );
}

interface ChatPageState {
  isOpenKeikokuGunyuuMessageGenerator: boolean;
}
