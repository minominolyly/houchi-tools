import HouchiMap from "../models/HouchiMap";
import OperationOption from "../models/OperationOption";
import Turn from "../models/Turn";

export const HOUCHI_KEIKOKU_MAPS: HouchiMap[] = [
  {
    code: "kiyuushuu",
    name: "冀幽州",
    yomi: "きゆうしゅう",
    houchiCastles: [
      {
        code: "kiyuushuu-joutou",
        level: 3,
        name: "上党",
        yomi: "じょうとう",
      },
      {
        code: "kiyuushuu-gyoujou",
        level: 2,
        name: "ギョウ城",
        yomi: "ぎょうじょう",
      },
      {
        code: "kiyuushuu-kyoroku",
        level: 2,
        name: "巨鹿",
        yomi: "きょろく",
      },
      {
        code: "kiyuushuu-kanto",
        level: 2,
        name: "官渡",
        yomi: "かんと",
      },
      {
        code: "kiyuushuu-heigen",
        level: 2,
        name: "平原",
        yomi: "へいげん",
      },
      {
        code: "kiyuushuu-daigun",
        level: 2,
        name: "代郡",
        yomi: "だいぐん",
      },
      {
        code: "kiyuushuu-jouhei",
        level: 2,
        name: "襄平",
        yomi: "じょうへい",
      },
      {
        code: "kiyuushuu-kyuugen",
        level: 1,
        name: "九原",
        yomi: "きゅうげん",
      },
      {
        code: "kiyuushuu-shinyou",
        level: 1,
        name: "晋陽",
        yomi: "しんよう",
      },
      {
        code: "kiyuushuu-kokan",
        level: 1,
        name: "壺関",
        yomi: "こかん",
      },
      {
        code: "kiyuushuu-kouzan",
        level: 1,
        name: "恒山",
        yomi: "こうざん",
      },
      {
        code: "kiyuushuu-seiga",
        level: 1,
        name: "清河",
        yomi: "せいが",
      },
      {
        code: "kiyuushuu-kaikyou",
        level: 1,
        name: "界橋",
        yomi: "かいきょう",
      },
      {
        code: "kiyuushuu-nanpi",
        level: 1,
        name: "南皮",
        yomi: "なんぴ",
      },
      {
        code: "kiyuushuu-hakuba",
        level: 1,
        name: "白馬",
        yomi: "はくば",
      },
      {
        code: "kiyuushuu-enshin",
        level: 1,
        name: "延津",
        yomi: "えんしん",
      },
      {
        code: "kiyuushuu-hanyou",
        level: 1,
        name: "范陽",
        yomi: "はんよう",
      },
      {
        code: "kiyuushuu-houkuhei",
        level: 1,
        name: "北平",
        yomi: "ほくへい",
      },
      {
        code: "kiyuushuu-rinshi",
        level: 1,
        name: "臨シ",
        yomi: "りんし",
      },
      {
        code: "kiyuushuu-keijou",
        level: 1,
        name: "薊城",
        yomi: "けいじょう",
      },
      {
        code: "kiyuushuu-ryoutou",
        level: 1,
        name: "遼東",
        yomi: "りょうとう",
      },
      {
        code: "kiyuushuu-hokkai",
        level: 1,
        name: "北海",
        yomi: "ほっかい",
      },
      {
        code: "kiyuushuu-rakurou",
        level: 1,
        name: "楽浪",
        yomi: "らくろう",
      },
      {
        code: "kiyuushuu-seikyuu",
        level: 1,
        name: "青丘",
        yomi: "せいきゅう",
      },
    ],
  },
  {
    code: "seiyoshuu",
    name: "青豫州",
    yomi: "せいよしゅう",
    houchiCastles: [
      {
        code: "seiyoshuu-kyoshou",
        level: 3,
        name: "許昌",
        yomi: "きょしょう",
      },
      {
        code: "seiyoshuu-jushun",
        level: 2,
        name: "寿春",
        yomi: "じゅしゅん",
      },
      {
        code: "seiyoshuu-shouken",
        level: 2,
        name: "ショウ県",
        yomi: "しょうけん",
      },
      {
        code: "seiyoshuu-bokuyou",
        level: 2,
        name: "濮陽",
        yomi: "ぼくよう",
      },
      {
        code: "seiyoshuu-eisen",
        level: 2,
        name: "潁川",
        yomi: "えいせん",
      },
      {
        code: "seiyoshuu-kahi",
        level: 2,
        name: "下ヒ",
        yomi: "かひ",
      },
      {
        code: "seiyoshuu-chinryuu",
        level: 1,
        name: "陳留",
        yomi: "ちんりゅう",
      },
      { code: "seiyoshuu-jonan", level: 1, name: "汝南", yomi: "じょなん" },
      { code: "seiyoshuu-sekitei", level: 1, name: "石亭", yomi: "せきてい" },
      { code: "seiyoshuu-gouhi", level: 1, name: "合肥", yomi: "ごうひ" },
      { code: "seiyoshuu-taizan", level: 1, name: "泰山", yomi: "たいざん" },
      { code: "seiyoshuu-shouhai", level: 1, name: "小沛", yomi: "しょうはい" },
      { code: "seiyoshuu-houjou", level: 1, name: "彭城", yomi: "ほうじょう" },
      { code: "seiyoshuu-rokou", level: 1, name: "蘆江", yomi: "ろこう" },
      {
        code: "seiyoshuu-jushukou",
        level: 1,
        name: "濡須口",
        yomi: "じゅしゅこう",
      },
      { code: "seiyoshuu-waiin", level: 1, name: "淮陰", yomi: "わいいん" },
      { code: "seiyoshuu-kouryou", level: 1, name: "広陵", yomi: "こうりょう" },
      { code: "seiyoshuu-hourai", level: 1, name: "蓬莱", yomi: "ほうらい" },
      { code: "seiyoshuu-rouya", level: 1, name: "琅ヤ", yomi: "ろうや" },
    ],
  },
  {
    code: "keiyoushuu",
    name: "荆揚州",
    yomi: "けいようしゅう",
    houchiCastles: [
      {
        code: "keiyoushuu-jouyou",
        level: 3,
        name: "襄陽",
        yomi: "じょうよう",
      },
      {
        code: "keiyoushuu-kouryou",
        level: 2,
        name: "江陵",
        yomi: "こうりょう",
      },
      { code: "keiyoushuu-chousa", level: 2, name: "長沙", yomi: "ちょうさ" },
      { code: "keiyoushuu-kouka", level: 2, name: "江夏", yomi: "こうか" },
      {
        code: "keiyoushuu-kengeyou",
        level: 2,
        name: "建業",
        yomi: "けんぎょう",
      },
      { code: "keiyoushuu-kenan", level: 2, name: "建安", yomi: "けんあん" },
      { code: "keiyoushuu-koshi", level: 1, name: "交趾", yomi: "こうし" },
      { code: "keiyoushuu-iryo", level: 1, name: "夷陵", yomi: "いりょう" },
      { code: "keiyoushuu-buryo", level: 1, name: "武陵", yomi: "ぶりょう" },
      { code: "keiyoushuu-eian", level: 1, name: "永安", yomi: "えいあん" },
      { code: "keiyoushuu-reiryo", level: 1, name: "零陵", yomi: "れいりょう" },
      { code: "keiyoushuu-bakujo", level: 1, name: "麦城", yomi: "ばくじょう" },
      { code: "keiyoushuu-keiyo", level: 1, name: "桂陽", yomi: "けいよう" },
      { code: "keiyoushuu-koyo", level: 1, name: "衡陽", yomi: "こうよう" },
      { code: "keiyoushuu-shinya", level: 1, name: "新野", yomi: "しんや" },
      { code: "keiyoushuu-yosho", level: 1, name: "豫章", yomi: "よしょう" },
      { code: "keiyoushuu-kayo", level: 1, name: "華容", yomi: "かよう" },
      { code: "keiyoushuu-saiyo", level: 1, name: "柴桑", yomi: "さいよう" },
      { code: "keiyoushuu-sogo", level: 1, name: "蒼梧", yomi: "そうご" },
      { code: "keiyoushuu-kyokua", level: 1, name: "曲阿", yomi: "きょくあ" },
      { code: "keiyoushuu-gogun", level: 1, name: "呉郡", yomi: "ごぐん" },
      { code: "keiyoushuu-rinkai", level: 1, name: "臨海", yomi: "りんかい" },
      { code: "keiyoushuu-kaikei", level: 1, name: "会稽", yomi: "かいけい" },
    ],
  },
  {
    code: "ryouekishuu",
    name: "涼益州",
    yomi: "りょうえきしゅう",
    houchiCastles: [
      {
        code: "ryouekishuu-chouan",
        level: 3,
        name: "長安",
        yomi: "ちょうあん",
      },
      { code: "ryouekishuu-chinso", level: 2, name: "陳倉", yomi: "ちんそう" },
      { code: "ryouekishuu-kenkaku", level: 2, name: "剣閣", yomi: "けんかく" },
      { code: "ryouekishuu-furyo", level: 2, name: "フ陵", yomi: "ふりょう" },
      { code: "ryouekishuu-seito", level: 2, name: "成都", yomi: "せいと" },
      { code: "ryouekishuu-seihei", level: 1, name: "西平", yomi: "せいへい" },
      { code: "ryouekishuu-bui", level: 1, name: "武威", yomi: "ぶい" },
      { code: "ryouekishuu-gaitei", level: 1, name: "街亭", yomi: "がいてい" },
      {
        code: "ryouekishuu-gojogen",
        level: 1,
        name: "五丈原",
        yomi: "ごじょうげん",
      },
      { code: "ryouekishuu-fufu", level: 1, name: "扶風", yomi: "ふふう" },
      { code: "ryouekishuu-tensui", level: 1, name: "天水", yomi: "てんすい" },
      { code: "ryouekishuu-antei", level: 1, name: "安定", yomi: "あんてい" },
      { code: "ryouekishuu-buto", level: 1, name: "武都", yomi: "ぶと" },
      { code: "ryouekishuu-kizan", level: 1, name: "岐山", yomi: "きざん" },
      {
        code: "ryouekishuu-menchikukan",
        level: 1,
        name: "綿竹関",
        yomi: "めんちくかん",
      },
      { code: "ryouekishuu-shito", level: 1, name: "梓潼", yomi: "しとう" },
      { code: "ryouekishuu-kanka", level: 1, name: "漢嘉", yomi: "かんか" },
      { code: "ryouekishuu-kennei", level: 1, name: "建寧", yomi: "けんねい" },
      { code: "ryouekishuu-koshu", level: 1, name: "江州", yomi: "こうしゅう" },
      { code: "ryouekishuu-eisho", level: 1, name: "永昌", yomi: "えいしょう" },
      { code: "ryouekishuu-unnan", level: 1, name: "雲南", yomi: "うんなん" },
      { code: "ryouekishuu-koko", level: 1, name: "興古", yomi: "こうこ" },
    ],
  },
  {
    code: "outoken",
    name: "王都圈",
    yomi: "おうとけん",
    houchiCastles: [
      {
        code: "outoken-rakuyou",
        level: 3,
        name: "洛陽",
        yomi: "らくよう",
      },
      { code: "outoken-kanchu", level: 2, name: "漢中", yomi: "かんちゅう" },
      { code: "outoken-joyo", level: 2, name: "上庸", yomi: "じょうよう" },
      {
        code: "outoken-kankokukan",
        level: 2,
        name: "函谷関",
        yomi: "かんこくかん",
      },
      { code: "outoken-bukan", level: 2, name: "武関", yomi: "ぶかん" },
      {
        code: "outoken-shisuikan",
        level: 2,
        name: "汜水関",
        yomi: "しすいかん",
      },
      { code: "outoken-korokan", level: 2, name: "虎牢関", yomi: "ころうかん" },
      { code: "outoken-kazan", level: 1, name: "崋山", yomi: "かざん" },
      { code: "outoken-seijo", level: 1, name: "西城", yomi: "せいじょう" },
      { code: "outoken-kato", level: 1, name: "河東", yomi: "かとう" },
      { code: "outoken-dokan", level: 1, name: "潼関", yomi: "どうかん" },
      { code: "outoken-keiyo", level: 1, name: "ケイ陽", yomi: "けいよう" },
      { code: "outoken-kono", level: 1, name: "弘農", yomi: "こうのう" },
      { code: "ryouekishuu-kadai", level: 1, name: "河内", yomi: "かだい" },
      { code: "ryouekishuu-enjo", level: 1, name: "宛城", yomi: "えんじょう" },
      { code: "ryouekishuu-hanjo", level: 1, name: "樊城", yomi: "はんじょう" },
      { code: "ryouekishuu-suzan", level: 1, name: "嵩山", yomi: "すうざん" },
      { code: "ryouekishuu-royo", level: 1, name: "魯陽", yomi: "ろよう" },
    ],
  },
];

export const HOUCHI_GUNYU_MAPS: HouchiMap[] = [
  {
    code: "gunyuu",
    name: "群雄争覇",
    yomi: "ぐんゆうそうは",
    houchiCastles: [
      {
        code: "gunyuu-rakuyou",
        level: 3,
        name: "洛陽",
        yomi: "らくよう",
      },
      {
        code: "gunyuu-chouan",
        level: 2,
        name: "長安",
        yomi: "ちょうあん",
      },
      {
        code: "gunyuu-joutou",
        level: 2,
        name: "上党",
        yomi: "じょうとう",
      },
      {
        code: "gunyuu-jouyou",
        level: 2,
        name: "襄陽",
        yomi: "じょうよう",
      },
      {
        code: "gunyuu-kyoshou",
        level: 2,
        name: "許昌",
        yomi: "きょしょう",
      },
      { code: "gunyuu-heigen", level: 1, name: "平原", yomi: "へいげん" },
      { code: "gunyuu-shohai", level: 1, name: "小沛", yomi: "しょうはい" },
      { code: "gunyuu-kanchu", level: 1, name: "漢中", yomi: "かんちゅう" },
      { code: "gunyuu-roko", level: 1, name: "盧江", yomi: "ろこう" },
      { code: "gunyuu-antei", level: 1, name: "安定", yomi: "あんてい" },
      { code: "gunyuu-tensui", level: 1, name: "天水", yomi: "てんすい" },
      { code: "gunyuu-koshu", level: 1, name: "江州", yomi: "こうしゅう" },
      { code: "gunyuu-shinyo", level: 1, name: "晋陽", yomi: "しんよう" },
      { code: "gunyuu-hokuhei", level: 1, name: "北平", yomi: "ほくへい" },
      { code: "gunyuu-chosa", level: 1, name: "長沙", yomi: "ちょうさ" },
      { code: "gunyuu-kengyo", level: 1, name: "建業", yomi: "けんぎょう" },
      { code: "gunyuu-nanhi", level: 1, name: "南皮", yomi: "なんひ" },
      { code: "gunyuu-bui", level: 1, name: "武威", yomi: "ぶい" },
      { code: "gunyuu-hokkai", level: 1, name: "北海", yomi: "ほっかい" },
      { code: "gunyuu-seito", level: 1, name: "成都", yomi: "せいと" },
      { code: "gunyuu-gogun", level: 1, name: "呉都", yomi: "ごぐん" },
    ],
  },
];

export const HOUCHI_MAPS: HouchiMap[] = [
  ...HOUCHI_KEIKOKU_MAPS,
  ...HOUCHI_GUNYU_MAPS,
];

export const TURN_LIST: Turn[] = [
  {
    code: "offence",
    name: "攻城",
    text: "攻城",
  },
  {
    code: "deffence",
    name: "防衛",
    text: "防衛",
  },
  {
    code: "counterattack",
    name: "反攻",
    text: "反攻",
  },
  {
    code: "offence-without-time",
    name: "攻城（時間指示なし）",
    text: "攻城",
  },
  {
    code: "deffence-without-time",
    name: "防衛（時間指示なし）",
    text: "防衛",
  },
  {
    code: "counterattack-without-time",
    name: "反攻（時間指示なし）",
    text: "反攻",
  },
  {
    code: "relinquish",
    name: "捨て",
    text: "捨て",
  },
  {
    code: "salted",
    name: "塩漬け",
    text: "塩漬け",
  },
  {
    code: "ignore",
    name: "放置",
    text: "放置",
  },
  {
    code: "free",
    name: "フリー入力",
    text: "",
  },
];

export const OPERATION_OPTION_LIST: OperationOption[] = [
  {
    code: "no-options",
    text: "オプションなし",
  },
  {
    code: "with-debuff",
    text: "デバフあり",
  },
  {
    code: "without-debuff",
    text: "デバフなし",
  },
  {
    code: "with-mainstay",
    text: "主力あり",
  },
  {
    code: "without-mainstay",
    text: "主力なし",
  },
];

const DataList = {
  HOUCHI_KEIKOKU_MAPS,
  HOUCHI_GUNYU_MAPS,
  HOUCHI_MAPS,
  TURN_LIST,
  OPERATION_OPTION_LIST,
};

export default DataList;
