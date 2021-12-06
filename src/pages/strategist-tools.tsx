import React, { useState } from "react";

import Accordion from "../components/Accordion";
import BasicLayout from "../layouts/BasicLayout";
import ConquestMessageGenerator from "../components/ConquestMessageGenerator";
import Container from "../components/Container";
import DeclarationMessageGenerator from "../components/DeclarationMessageGenerator";
import PreStationingMessageGenerator from "../components/PrestationingMessageGenerator";
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
        <div className="mb-2">
          <Accordion
            id={"conquest-message-generator"}
            headerClassName="hero hero-sm bg-primary"
            title={
              <div className="hero-body">
                <h2>{"征伐指示メッセージ"}</h2>
                <p>{"傾国・群雄の征伐指示をコピペできるツールです。"}</p>
              </div>
            }
          >
            <div className="bg-secondary p-1">
              <ConquestMessageGenerator />
            </div>
          </Accordion>
        </div>
        <div className="mb-2">
          <Accordion
            id={"declaration-message-generator"}
            headerClassName="hero hero-sm bg-primary"
            title={
              <div className="hero-body">
                <h2>{"宣戦メッセージ"}</h2>
                <p>{"傾国・群雄の宣戦指示をコピペできるツールです。"}</p>
              </div>
            }
          >
            <div className="bg-secondary p-1">
              <DeclarationMessageGenerator />
            </div>
          </Accordion>
        </div>
        <div className="mb-2">
          <Accordion
            id={"prestationing-message-generator"}
            headerClassName="hero hero-sm bg-primary"
            title={
              <div className="hero-body">
                <h2>{"事前駐屯メッセージ"}</h2>
                <p>{"傾国・群雄の事前駐屯指示をコピペできるツールです。"}</p>
              </div>
            }
          >
            <div className="bg-secondary p-1">
              <PreStationingMessageGenerator />
            </div>
          </Accordion>
        </div>
      </Container>
    </BasicLayout>
  );
}

interface ChatPageState {
  isOpenKeikokuGunyuuMessageGenerator: boolean;
}
