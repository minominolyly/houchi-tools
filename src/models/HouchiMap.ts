import HouchiCastle from "./HouchiCastle";

export default interface HouchiMap {
  code: string;
  name: string;
  yomi: string;
  houchiCastles: HouchiCastle[];
}
