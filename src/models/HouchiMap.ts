import HouchiCastle from "./HouchiCastle";

export default interface HouchiMap {
  id: string;
  name: string;
  yomi: string;
  houchiCastles: HouchiCastle[];
}
