import OperationOption from "./OperationOption";
import Turn from "./Turn";

export default interface HouchiOperation {
  id: string;
  houchiCastleCode: string;
  turn: Turn;
  minutes: number | "";
  seconds: number | "";
  operationOption: OperationOption;
  note: string;
}
