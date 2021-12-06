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
import Select from "react-select";
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
            <Select
              value={houchiOperation.operationOption}
              options={OPERATION_OPTION_LIST}
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(option) => option.text}
              getOptionValue={(option) => option.code}
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
      <div className="p-2 m-2 bg-gray" key={houchiCastle.code}>
        <FormGroup>
          <FormLabel className="text-bold">
            <span className={`text-${castleColor}`}>
              <FontAwesomeIcon icon={faFortAwesome} />
            </span>
            {houchiCastle.name}
          </FormLabel>
          <div>
            <Select
              value={houchiOperation.turn}
              options={TURN_LIST}
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.code}
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

  const groupedHouchiCastles: {label: string, options: HouchiCastle[]}[] = [];
  state.houchiMap.houchiCastles.forEach((houchiCastle: HouchiCastle) => {
    const group = groupedHouchiCastles.find(g => g.label === houchiCastle.level.toString());
    if (group) {
      group.options.push(houchiCastle);
    } else {
      groupedHouchiCastles.push({
        label: houchiCastle.level.toString(),
        options: [houchiCastle],
      });
    }
  });

  return (
    <section>
      <div>
        <FormGroup>
          <FormLabel className="text-bold">{"マップ"}</FormLabel>
            <Select
              value={state.houchiMap}
              options={HOUCHI_MAPS}
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.code}
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
            <Select
              value={state.houchiCastles}
              options={groupedHouchiCastles}
              isSearchable={false}
              isMulti={true}
              getOptionLabel={(houchiCastle) => {
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
              getOptionValue={(option) => option.code}
              formatGroupLabel={(option) => {
                switch (option.label) {
                  case "3":
                    return `🟨Lv${option.label} 金城`;
                  case "2":
                    return `🟦Lv${option.label} 青城`;
                  case "1":
                    return `🟥Lv${option.label} 赤城`;
                  default:
                    return `Lv${option.label}`;
                }
              }}
              closeMenuOnSelect={false}
              onChange={(houchiCastles) => {
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
                  houchiCastles: Object.assign([], houchiCastles),
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
