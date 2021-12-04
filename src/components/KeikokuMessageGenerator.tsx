import { DropdownList, Multiselect } from "react-widgets/cjs";
import {
  HOUCHI_MAPS,
  OPERATION_OPTION_LIST,
  TURN_LIST,
} from "../constants/DataList";
import React, { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import HouchiCastle from "../models/HouchiCastle";
import HouchiMap from "../models/HouchiMap";
import HouchiOperation from "../models/HouchiOperation";
import InputText from "./InputText";
import OperationOption from "../models/OperationOption";
import Textarea from "./Textarea";
import Turn from "../models/Turn";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";

const initialState: KeikokuMessageGeneratorState = {
  note: "",
  houchiMap: HOUCHI_MAPS[0],
  houchiCastles: [],
  houchiOperations: [],
};

export default function KeikokuMessageGenerator(
  props: KeikokuMessageGeneratorProps
) {
  const [state, setState] =
    useState<KeikokuMessageGeneratorState>(initialState);

  const houchiCastleElements: JSX.Element[] = [];
  const commands: string[] = [];

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

    let subElement: JSX.Element = <React.Fragment />;
    switch (houchiOperation.turn.code) {
      case "offence":
      case "deffence":
      case "counterattack":
        subElement = (
          <div className="">
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
            </div>
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
        );
        break;
      case "free":
        subElement = (
          <div className="">
            <div className="input-group">
              <span className="input-group-addon">{"→"}</span>
              <InputText
                value={houchiOperation.note}
                maxLength={50}
                onChange={(event) => {
                  const ho = houchiOperation;
                  ho.note = event.currentTarget.value;

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
              <span className="input-group-addon">{"。"}</span>
            </div>
          </div>
        );
        break;
      default:
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
            {subElement}
          </div>
        </FormGroup>
      </div>
    );

    switch (houchiOperation.turn.code) {
      case "offence":
      case "deffence":
      case "counterattack":
        commands.push(
          `${houchiCastle.name}→残り${houchiOperation.minutes}分から${
            houchiOperation.operationOption.code !== "no-options"
              ? houchiOperation.operationOption.text
              : ""
          }${houchiOperation.turn.text}。`
        );
        break;
      case "free":
        commands.push(`${houchiCastle.name}→${houchiOperation.note}。`);
        break;
      default:
        commands.push(`${houchiCastle.name}→${houchiOperation.turn.text}。`);
        break;
    }
  });

  const command = `【お知らせ】${commands.join("")}${state.note}`;

  return (
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
            textField={(houchiCastle: any) => {
              switch (houchiCastle.level) {
                case 3:
                  return `🟨${houchiCastle.name}`;
                case 2:
                  return `🟦${houchiCastle.name}`;
                case 1:
                  return `🟥${houchiCastle.name}`;
                default:
                  return `${houchiCastle.name}`;
              }
            }}
            groupBy={(houchiCastle) => {
              switch (houchiCastle.level) {
                case 3:
                  return "金城";
                case 2:
                  return "青城";
                case 1:
                  return "赤城";
                default:
                  return "";
              }
            }}
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
                    note: "",
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
                  note: "",
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
      <FormGroup>
        <FormLabel className="text-bold">{"補足事項"}</FormLabel>
        <Textarea
          value={state.note}
          rows={2}
          onChange={(event) => {
            setState({ ...state, note: event.currentTarget.value });
          }}
          maxLength={100}
        />
      </FormGroup>
      <div className="divider"></div>
      <FormGroup>
        <FormLabel className="text-bold">{"結果"}</FormLabel>
        <div className="input-group">
          <Textarea value={command} rows={7} readOnly={true} />
          <CopyToClipboard text={command}>
            <button className="btn btn-primary input-group-btn">Copy!</button>
          </CopyToClipboard>
        </div>
      </FormGroup>
    </section>
  );
}

interface KeikokuMessageGeneratorState {
  note: string;
  houchiMap: HouchiMap;
  houchiCastles: HouchiCastle[];
  houchiOperations: HouchiOperation[];
}

interface KeikokuMessageGeneratorProps {}
