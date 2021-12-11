import {
  HOUCHI_GUNYU_MAPS,
  HOUCHI_KEIKOKU_MAPS,
} from "../constants/DataList";
import React, { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import HouchiCastle from "../models/HouchiCastle";
import HouchiMap from "../models/HouchiMap";
import InputDate from "./InputDate";
import Select from "react-select";
import Textarea from "./Textarea";
import { format } from "date-fns";

const initialState = {
  note: "",
  dateString: format(new Date(), "yyyy-MM-dd"),
  houchiKeikokuMap: HOUCHI_KEIKOKU_MAPS[0],
  houchiKeikokuCastles: [],
  houchiGunyuMap: HOUCHI_GUNYU_MAPS[0],
  houchiGunyuCastles: [],
};

export default function DeclarationMessageGenerator(props) {
  const [state, setState] =
    useState<DeclarationMessageGeneratorState>(initialState);
  const commands: string[] = [];
  commands.push(`【宣戦】${state.dateString}`);
  if (state.houchiKeikokuCastles.length > 0) {
    commands.push(`《傾国》: ${state.houchiKeikokuCastles.map(c => c.name).join("、")}`);
  }
  if (state.houchiGunyuCastles.length > 0) {
    commands.push(`《群雄》: ${state.houchiGunyuCastles.map(c => c.name).join("、")}`);
  }

  const command = `${commands.join("")}${state.note}`;

  const groupedHouchiKeikokuCastles: {label: string, options: HouchiCastle[]}[] = [];
  state.houchiKeikokuMap.houchiCastles.forEach((houchiCastle: HouchiCastle) => {
    const group = groupedHouchiKeikokuCastles.find(g => g.label === houchiCastle.level.toString());
    if (group) {
      group.options.push(houchiCastle);
    } else {
      groupedHouchiKeikokuCastles.push({
        label: houchiCastle.level.toString(),
        options: [houchiCastle],
      });
    }
  });

  const groupedHouchiGunyuCastles: {label: string, options: HouchiCastle[]}[] = [];
  state.houchiGunyuMap.houchiCastles.forEach((houchiCastle: HouchiCastle) => {
    const group = groupedHouchiGunyuCastles.find(g => g.label === houchiCastle.level.toString());
    if (group) {
      group.options.push(houchiCastle);
    } else {
      groupedHouchiGunyuCastles.push({
        label: houchiCastle.level.toString(),
        options: [houchiCastle],
      });
    }
  });

  return (
    <section>
      <div>
        <FormGroup>
          <FormLabel className="text-bold">{"日付"}</FormLabel>
          <InputDate
            value={state.dateString}
            onChange={event => {
              setState({
                ...state,
                dateString: format(new Date(event.currentTarget.value), "yyyy-MM-dd"),
              });
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel className="text-bold">{"傾国マップ"}</FormLabel>
            <Select
              value={state.houchiKeikokuMap}
              options={HOUCHI_KEIKOKU_MAPS}
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={(houchiMap: HouchiMap) => {
                setState({
                  ...state,
                  houchiKeikokuMap: houchiMap,
                  houchiKeikokuCastles: [],
                });
              }}
            />
            <FormLabel className="text-bold">{"城"}</FormLabel>
            <Select
              value={state.houchiKeikokuCastles}
              options={groupedHouchiKeikokuCastles}
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
              getOptionValue={(option) => option.id}
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
              blurInputOnSelect={false}
              onChange={(houchiCastles) => {
                setState({
                  ...state,
                  houchiKeikokuCastles: Object.assign([], houchiCastles),
                });
              }}
            />
        </FormGroup>
      </div>
      <div className="divider"></div>
      <div>
        <FormGroup>
          <FormLabel className="text-bold">{"群雄マップ"}</FormLabel>
            {/* <Select
              value={state.houchiGunyuMap}
              options={HOUCHI_GUNYU_MAPS}
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={(houchiMap: HouchiMap) => {
                setState({
                  ...state,
                  houchiGunyuMap: houchiMap,
                  houchiGunyuCastles: [],
                });
              }}
            /> */}
            <FormLabel className="text-bold">{"城"}</FormLabel>
            <Select
              value={state.houchiGunyuCastles}
              options={groupedHouchiGunyuCastles}
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
              getOptionValue={(option) => option.id}
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
              blurInputOnSelect={false}
              onChange={(houchiCastles) => {
                setState({
                  ...state,
                  houchiGunyuCastles: Object.assign([], houchiCastles),
                });
              }}
            />
        </FormGroup>
      </div>
      <div className="divider"></div>
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

interface DeclarationMessageGeneratorState {
  note: string;
  dateString: string;
  houchiKeikokuMap: HouchiMap;
  houchiKeikokuCastles: HouchiCastle[];
  houchiGunyuMap: HouchiMap;
  houchiGunyuCastles: HouchiCastle[];
}
interface DeclarationMessageGeneratorProps {
}
