import { DropdownList, Multiselect } from "react-widgets/cjs";
import {
  HOUCHI_MAPS,
  OPERATION_OPTION_LIST,
  TURN_LIST,
} from "../constants/DataList";
import React, { useState } from "react";

import BasicLayout from "../layouts/BasicLayout";
import Container from "../components/Container";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormGroup from "../components/FormGroup";
import FormLabel from "../components/FormLabel";
import HouchiCastle from "../models/HouchiCastle";
import HouchiMap from "../models/HouchiMap";
import HouchiOperation from "../models/HouchiOperation";
import InputText from "../components/InputText";
import OperationOption from "../models/OperationOption";
import Seo from "../components/Seo";
import Textarea from "../components/Textarea";
import Turn from "../models/Turn";
import TwitterShareButton from "../components/TwitterShareButton";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";

const initialState: ChatPageState = {
  asciiArt: "",
  houchiMap: HOUCHI_MAPS[0],
  houchiCastles: [],
  houchiOperations: [],
};

export default function StrategistToolsPage(): JSX.Element {
  const [state, setState] = useState<ChatPageState>(initialState);

  const houchiCastleElements: JSX.Element[] = [];
  const commands: string[] = [];
  commands.push("【お知らせ】");

  state.houchiCastles.forEach((houchiCastle: HouchiCastle) => {
    const houchiOperation = state.houchiOperations.find(
      (ho) => ho.houchiCastleCode === houchiCastle.code
    );
    let castleColor = "";
    switch (houchiCastle.level) {
      case 1:
        castleColor = "error";
        break;
      case 2:
        castleColor = "primary";
        break;
      case 3:
        castleColor = "warning";
        break;
    }

    houchiCastleElements.push(
      <div className="pl-2" key={houchiCastle.code}>
        <FormGroup>
          <FormLabel className="text-bold">
            <span className={`text-${castleColor}`}>
              <FontAwesomeIcon icon={faFortAwesome} />
            </span>
            {houchiCastle.name}
          </FormLabel>
          <div>
            <div className="input-group width-10rem">
              <span className="input-group-addon">{"残り"}</span>
              <InputText
                type={"number"}
                className="width-4rem"
                min={0}
                max={45}
                value={houchiOperation.minutes}
                onChange={(event) => {
                  const ho = houchiOperation;
                  if (event.currentTarget.value !== "") {
                    ho.minutes = Number(event.currentTarget.value);
                  } else {
                    ho.minutes = "";
                  }

                  const newHoList = state.houchiOperations.filter(
                    (ho) => ho.houchiCastleCode !== houchiCastle.code
                  );
                  newHoList.push(ho);

                  setState({
                    ...state,
                    houchiOperations: newHoList,
                  });
                }}
              />
              <span className="input-group-addon">{"分から"}</span>
              {/* <span className="input-group-addon">{":"}</span>
              <InputText
                type={"number"}
                className="width-4rem"
                value={houchiOperation.seconds !== undefined ? houchiOperation.seconds : ""}
                onChange={(event) => {
                  const ho = houchiOperation;
                  if (event.currentTarget.value !== "") {
                    ho.seconds = Number(event.currentTarget.value);
                  } else {
                    ho.seconds = undefined;
                  }

                  const newHoList = state.houchiOperations.filter(
                    (ho) => ho.houchiCastleCode !== houchiCastle.code
                  );
                  newHoList.push(ho);

                  setState({
                    ...state,
                    houchiOperations: newHoList,
                  });
                }}
              /> */}
            </div>
            <DropdownList
              value={houchiOperation.turn}
              data={TURN_LIST}
              textField="name"
              onChange={(turn: Turn) => {
                const ho = houchiOperation;
                ho.turn = turn;

                const newHoList = state.houchiOperations.filter(
                  (ho) => ho.houchiCastleCode !== houchiCastle.code
                );
                newHoList.push(ho);

                setState({
                  ...state,
                  houchiOperations: newHoList,
                });
              }}
            />
            <DropdownList
              value={houchiOperation.operationOption}
              data={OPERATION_OPTION_LIST}
              textField="text"
              onChange={(operationOption: OperationOption) => {
                const ho = houchiOperation;
                ho.operationOption = operationOption;

                const newHoList = state.houchiOperations.filter(
                  (ho) => ho.houchiCastleCode !== houchiCastle.code
                );
                newHoList.push(ho);

                setState({
                  ...state,
                  houchiOperations: newHoList,
                });
              }}
            />
          </div>
        </FormGroup>
      </div>
    );
    commands.push(
      `${houchiCastle.name}→残り${houchiOperation.minutes}分から${
        houchiOperation.operationOption.code !== "no-options"
          ? houchiOperation.operationOption.text
          : ""
      }${houchiOperation.turn.name}。`
    );
  });

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
        <section>
          <div>
            <FormGroup>
              <FormLabel className="text-bold">{"マップ"}</FormLabel>
              <DropdownList
                value={state.houchiMap}
                data={HOUCHI_MAPS}
                textField="name"
                onChange={(houchiMap: HouchiMap) => {
                  setState({
                    ...state,
                    houchiMap: houchiMap,
                    houchiCastles: [],
                    houchiOperations: [],
                  });
                }}
              />
              <FormLabel className="text-bold">{"城"}</FormLabel>
              <Multiselect
                value={state.houchiCastles}
                data={state.houchiMap.houchiCastles}
                textField="name"
                onChange={(houchiCastles: HouchiCastle[]) => {
                  const houchiOperations: HouchiOperation[] = [];
                  for (let i = 0; i < houchiCastles.length; i++) {
                    const houchiCastle = houchiCastles[i];
                    if (!state.houchiOperations) {
                      houchiOperations.push({
                        code: houchiCastle.code,
                        houchiCastleCode: houchiCastle.code,
                        turn: TURN_LIST[0],
                        minutes: "",
                        seconds: "",
                        operationOption: OPERATION_OPTION_LIST[0],
                      });
                      continue;
                    }
                    const houchiOperation = state.houchiOperations.find(
                      (ho) => ho.houchiCastleCode === houchiCastle.code
                    );
                    if (houchiOperation) {
                      houchiOperations.push(houchiOperation);
                      continue;
                    }
                    houchiOperations.push({
                      code: houchiCastle.code,
                      houchiCastleCode: houchiCastle.code,
                      turn: TURN_LIST[0],
                      minutes: "",
                      seconds: "",
                      operationOption: OPERATION_OPTION_LIST[0],
                    });
                  }
                  setState({
                    ...state,
                    houchiCastles: houchiCastles,
                    houchiOperations: houchiOperations,
                  });
                }}
              />
            </FormGroup>
            {houchiCastleElements}
          </div>
          <div className="divider"></div>
          <FormGroup>
            <FormLabel className="text-bold">{"結果"}</FormLabel>
            <div className="input-group">
              <Textarea value={commands.join("")} rows={7} readOnly={true} />
              <CopyToClipboard text={commands.join("")}>
                <button className="btn btn-primary input-group-btn">
                  Copy!
                </button>
              </CopyToClipboard>
            </div>
          </FormGroup>
        </section>
        <div className="height-1rem"></div>
      </Container>
    </BasicLayout>
  );
}

interface ChatPageState {
  asciiArt: string;
  houchiMap: HouchiMap;
  houchiCastles: HouchiCastle[];
  houchiOperations: HouchiOperation[];
}
