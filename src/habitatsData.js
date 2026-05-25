/**
 * habitatsData.js
 * ポケポコ 生息地データ（実データ版）
 *
 * 「なんでも」素材について:
 *   大きな木(なんでも)、草(なんでも) など「なんでも」と書いてあるものは
 *   カテゴリ指定素材です。materialId に "_any" サフィックスを付けて区別します。
 *   例: "大きな木(なんでも)" → id: "大きな木_any"
 *
 * リンク素材について:
 *   みず、うみのみず、高いところ、たき は独立した素材ページへのリンクが
 *   ついていたため、通常素材として扱っています。
 */

export const HABITATS = [
  {
    id: "habitat_1",
    no: 1,
    name: "緑の草むら",
    url: "https://gamewith.jp/pocoapokemon/article/show/547136",
    materials: [
      { materialId: "みどりのくさ", materialName: "みどりのくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_2",
    no: 2,
    name: "木かげの草むら",
    url: "https://gamewith.jp/pocoapokemon/article/show/547147",
    materials: [
      { materialId: "大きな木_any", materialName: "大きな木(なんでも)", quantity: 1 },
      { materialId: "みどりのくさ", materialName: "みどりのくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_3",
    no: 3,
    name: "岩かげの草むら",
    url: "https://gamewith.jp/pocoapokemon/article/show/547152",
    materials: [
      { materialId: "みどりのくさ", materialName: "みどりのくさ", quantity: 4 },
      { materialId: "おおきないし", materialName: "おおきないし", quantity: 1 },
    ],
  },
  {
    id: "habitat_4",
    no: 4,
    name: "うるおう草むら",
    url: "https://gamewith.jp/pocoapokemon/article/show/547287",
    materials: [
      { materialId: "みどりのくさ", materialName: "みどりのくさ", quantity: 4 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
    ],
  },
  {
    id: "habitat_5",
    no: 5,
    name: "波打ちぎわの草むら",
    url: "https://gamewith.jp/pocoapokemon/article/show/547212",
    materials: [
      { materialId: "みどりのくさ", materialName: "みどりのくさ", quantity: 4 },
      { materialId: "うみのみず", materialName: "うみのみず", quantity: 2 },
    ],
  },
  {
    id: "habitat_6",
    no: 6,
    name: "高台の草むら",
    url: "https://gamewith.jp/pocoapokemon/article/show/547389",
    materials: [
      { materialId: "みどりのくさ", materialName: "みどりのくさ", quantity: 4 },
      { materialId: "高いところ", materialName: "高いところ", quantity: 1 },
    ],
  },
  {
    id: "habitat_7",
    no: 7,
    name: "照らされた草むら",
    url: "https://gamewith.jp/pocoapokemon/article/show/547257",
    materials: [
      { materialId: "草_any", materialName: "草(なんでも)", quantity: 4 },
      { materialId: "明かり_any", materialName: "明かり(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_8",
    no: 8,
    name: "きれいな花畑",
    url: "https://gamewith.jp/pocoapokemon/article/show/547140",
    materials: [
      { materialId: "はらっぱのはな", materialName: "はらっぱのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_9",
    no: 9,
    name: "木かげの花畑",
    url: "https://gamewith.jp/pocoapokemon/article/show/547392",
    materials: [
      { materialId: "きのみの木_any", materialName: "きのみの木(なんでも)", quantity: 1 },
      { materialId: "はらっぱのはな", materialName: "はらっぱのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_10",
    no: 10,
    name: "うるおう花畑",
    url: "https://gamewith.jp/pocoapokemon/article/show/547361",
    materials: [
      { materialId: "はらっぱのはな", materialName: "はらっぱのはな", quantity: 4 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
    ],
  },
  {
    id: "habitat_11",
    no: 11,
    name: "花いっぱいの景色",
    url: "https://gamewith.jp/pocoapokemon/article/show/547239",
    materials: [
      { materialId: "はらっぱのはな", materialName: "はらっぱのはな", quantity: 8 },
    ],
  },
  {
    id: "habitat_12",
    no: 12,
    name: "高台の花畑",
    url: "https://gamewith.jp/pocoapokemon/article/show/547265",
    materials: [
      { materialId: "はらっぱのはな", materialName: "はらっぱのはな", quantity: 4 },
      { materialId: "高いところ", materialName: "高いところ", quantity: 1 },
    ],
  },
  {
    id: "habitat_13",
    no: 13,
    name: "花に囲まれたお墓",
    url: "https://gamewith.jp/pocoapokemon/article/show/547261",
    materials: [
      { materialId: "はらっぱのはな", materialName: "はらっぱのはな", quantity: 4 },
      { materialId: "はかいし", materialName: "はかいし", quantity: 1 },
    ],
  },
  {
    id: "habitat_14",
    no: 14,
    name: "フラワーガーデン",
    url: "https://gamewith.jp/pocoapokemon/article/show/547319",
    materials: [
      { materialId: "いけがき_any", materialName: "いけがき(なんでも)", quantity: 4 },
      { materialId: "はらっぱのはな", materialName: "はらっぱのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_15",
    no: 15,
    name: "フレッシュ野菜畑",
    url: "https://gamewith.jp/pocoapokemon/article/show/547177",
    materials: [
      { materialId: "野菜畑_any", materialName: "野菜畑(なんでも)", quantity: 8 },
    ],
  },
  {
    id: "habitat_16",
    no: 16,
    name: "あたたかな風に乗って",
    url: "https://gamewith.jp/pocoapokemon/article/show/547176",
    materials: [
      { materialId: "たきび", materialName: "たきび", quantity: 3 },
    ],
  },
  {
    id: "habitat_17",
    no: 17,
    name: "キャンプセット",
    url: "https://gamewith.jp/pocoapokemon/article/show/547184",
    materials: [
      { materialId: "たきび", materialName: "たきび", quantity: 1 },
      { materialId: "ほしくさのテーブル", materialName: "ほしくさのテーブル", quantity: 1 },
      { materialId: "ほしくさのこしかけ", materialName: "ほしくさのこしかけ", quantity: 1 },
    ],
  },
  {
    id: "habitat_18",
    no: 18,
    name: "修行の滝",
    url: "https://gamewith.jp/pocoapokemon/article/show/547226",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
      { materialId: "たき", materialName: "たき", quantity: 1 },
    ],
  },
  {
    id: "habitat_19",
    no: 19,
    name: "腹ペコダイニング",
    url: "https://gamewith.jp/pocoapokemon/article/show/547146",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_20",
    no: 20,
    name: "ピクニックな食卓",
    url: "https://gamewith.jp/pocoapokemon/article/show/547394",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 2 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "バスケット", materialName: "バスケット", quantity: 1 },
    ],
  },
  {
    id: "habitat_21", no: 21, name: "はなやかな机",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "いちりんざし", materialName: "いちりんざし", quantity: 1 },
    ],
  },
  {
    id: "habitat_22", no: 22, name: "緑のベンチ",
    materials: [
      { materialId: "いけがき_any", materialName: "いけがき(なんでも)", quantity: 2 },
      { materialId: "イス_長いもの_any", materialName: "イス(長いもの)", quantity: 1 },
    ],
  },
  {
    id: "habitat_23", no: 23, name: "照らされたベンチ",
    materials: [
      { materialId: "イス_長いもの_any", materialName: "イス(長いもの)", quantity: 1 },
      { materialId: "がいとう_any", materialName: "がいとう(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_24", no: 24, name: "ジムの休けい所",
    materials: [
      { materialId: "サンドバッグ", materialName: "サンドバッグ", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_25", no: 25, name: "かけこみ救急所",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "きゅうきゅうばこ", materialName: "きゅうきゅうばこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_26", no: 26, name: "ジムの救急所",
    materials: [
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "サンドバッグ", materialName: "サンドバッグ", quantity: 1 },
      { materialId: "きゅうきゅうばこ", materialName: "きゅうきゅうばこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_27", no: 27, name: "道案内のカンバン",
    materials: [
      { materialId: "やじるしかんばん", materialName: "やじるしかんばん", quantity: 1 },
      { materialId: "木のみち", materialName: "木のみち", quantity: 3 },
    ],
  },
  {
    id: "habitat_28", no: 28, name: "大きな荷物をのせて",
    materials: [
      { materialId: "にぐるま", materialName: "にぐるま", quantity: 1 },
      { materialId: "木ばこ", materialName: "木ばこ", quantity: 2 },
    ],
  },
  {
    id: "habitat_29", no: 29, name: "木こりの作業場",
    materials: [
      { materialId: "まるたのイス", materialName: "まるたのイス", quantity: 1 },
      { materialId: "にぐるま", materialName: "にぐるま", quantity: 1 },
      { materialId: "きりかぶ_any", materialName: "きりかぶ(なんでも)", quantity: 1 },
      { materialId: "まるたのテーブル", materialName: "まるたのテーブル", quantity: 1 },
    ],
  },
  {
    id: "habitat_30", no: 30, name: "ぬいぐるみとおやすみ",
    materials: [
      { materialId: "ベッド_any", materialName: "ベッド(なんでも)", quantity: 1 },
      { materialId: "にんぎょう_any", materialName: "にんぎょう(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_31", no: 31, name: "やさしい光でおやすみ",
    materials: [
      { materialId: "ベッド_any", materialName: "ベッド(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "ほそながキャンドル", materialName: "ほそながキャンドル", quantity: 1 },
    ],
  },
  {
    id: "habitat_32", no: 32, name: "お墓にお供えもの",
    materials: [
      { materialId: "はかいし", materialName: "はかいし", quantity: 1 },
      { materialId: "ほそながキャンドル", materialName: "ほそながキャンドル", quantity: 2 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_33", no: 33, name: "ブキミなお墓にお供えもの",
    materials: [
      { materialId: "あやしいキャンドル", materialName: "あやしいキャンドル", quantity: 2 },
      { materialId: "はかいし", materialName: "はかいし", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_34", no: 34, name: "ラッキー休けい所",
    materials: [
      { materialId: "いけがき_any", materialName: "いけがき(なんでも)", quantity: 6 },
      { materialId: "ラッキーのうえ木", materialName: "ラッキーのうえ木", quantity: 1 },
      { materialId: "イス_長いもの_any", materialName: "イス(長いもの)", quantity: 1 },
    ],
  },
  {
    id: "habitat_35", no: 35, name: "明かりと香りのユウワク",
    materials: [
      { materialId: "ツボかびん", materialName: "ツボかびん", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
      { materialId: "キノコのランプ", materialName: "キノコのランプ", quantity: 1 },
    ],
  },
  {
    id: "habitat_36", no: 36, name: "日かげでプカプカ水遊び",
    materials: [
      { materialId: "ビニールボート", materialName: "ビニールボート", quantity: 1 },
      { materialId: "ビーチパラソル", materialName: "ビーチパラソル", quantity: 1 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
    ],
  },
  {
    id: "habitat_37", no: 37, name: "さらさらな草むら",
    materials: [
      { materialId: "かれたみどりのくさ", materialName: "かれたみどりのくさ", quantity: 4 },
      { materialId: "さらさらいわ", materialName: "さらさらいわ", quantity: 1 },
    ],
  },
  {
    id: "habitat_38", no: 38, name: "工場の物置",
    materials: [
      { materialId: "がいとう_any", materialName: "がいとう(なんでも)", quantity: 1 },
      { materialId: "そうさばん", materialName: "そうさばん", quantity: 1 },
      { materialId: "ドラムかん", materialName: "ドラムかん", quantity: 1 },
      { materialId: "からまりコード", materialName: "からまりコード", quantity: 1 },
    ],
  },
  {
    id: "habitat_39", no: 39, name: "ぜいたくピヨピヨごはん",
    materials: [
      { materialId: "木のすばこ", materialName: "木のすばこ", quantity: 1 },
      { materialId: "きのみいりバスケット", materialName: "きのみいりバスケット", quantity: 1 },
    ],
  },
  {
    id: "habitat_40", no: 40, name: "きのみごちそうキャンプ",
    materials: [
      { materialId: "てるてるポワルン_晴れ", materialName: "てるてるポワルン(晴れ)", quantity: 2 },
      { materialId: "キャンプファイヤー", materialName: "キャンプファイヤー", quantity: 1 },
      { materialId: "きのみいりバスケット", materialName: "きのみいりバスケット", quantity: 1 },
      { materialId: "高いところ", materialName: "高いところ", quantity: 1 },
    ],
  },
  {
    id: "habitat_41", no: 41, name: "あまごいスポット",
    materials: [
      { materialId: "てるてるポワルン_雨", materialName: "てるてるポワルン(雨)", quantity: 2 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_42", no: 42, name: "にほんばれスポット",
    materials: [
      { materialId: "てるてるポワルン_晴れ", materialName: "てるてるポワルン(晴れ)", quantity: 2 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_43", no: 43, name: "はかせのオタカラ",
    materials: [
      { materialId: "はかせのオタカラ", materialName: "はかせのオタカラ", quantity: 1 },
      { materialId: "おとしもの_大きなもの_any", materialName: "おとしもの(大きなもの)", quantity: 4 },
      { materialId: "ベッド_any", materialName: "ベッド(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_44", no: 44, name: "丸太の温もり",
    materials: [
      { materialId: "まるたのイス", materialName: "まるたのイス", quantity: 1 },
      { materialId: "まるたのテーブル", materialName: "まるたのテーブル", quantity: 1 },
      { materialId: "まるたのベッド", materialName: "まるたのベッド", quantity: 1 },
    ],
  },
  {
    id: "habitat_45", no: 45, name: "きのみ大集合",
    materials: [
      { materialId: "きのみなイス", materialName: "きのみなイス", quantity: 1 },
      { materialId: "きのみなベッド", materialName: "きのみなベッド", quantity: 1 },
      { materialId: "きのみなテーブル", materialName: "きのみなテーブル", quantity: 1 },
      { materialId: "きのみなテーブルランプ", materialName: "きのみなテーブルランプ", quantity: 1 },
    ],
  },
  {
    id: "habitat_46", no: 46, name: "ガーデンテラス",
    materials: [
      { materialId: "はらっぱのはな", materialName: "はらっぱのはな", quantity: 4 },
      { materialId: "ガーデンライト", materialName: "ガーデンライト", quantity: 1 },
      { materialId: "ガーデンチェア", materialName: "ガーデンチェア", quantity: 1 },
      { materialId: "ガーデンテーブル", materialName: "ガーデンテーブル", quantity: 1 },
    ],
  },
  {
    id: "habitat_47", no: 47, name: "木かげでぐっすりカビゴン",
    materials: [
      { materialId: "大きな木_any", materialName: "大きな木(なんでも)", quantity: 1 },
      { materialId: "いねむりベッド", materialName: "いねむりベッド", quantity: 1 },
    ],
  },
  {
    id: "habitat_48", no: 48, name: "古きよきアンティーク",
    materials: [
      { materialId: "アンティーククローゼット", materialName: "アンティーククローゼット", quantity: 1 },
      { materialId: "アンティークベッド", materialName: "アンティークベッド", quantity: 1 },
      { materialId: "アンティークドレッサー", materialName: "アンティークドレッサー", quantity: 1 },
      { materialId: "アンティークチェア", materialName: "アンティークチェア", quantity: 1 },
    ],
  },
  {
    id: "habitat_49", no: 49, name: "モンスターボールだらけ",
    materials: [
      { materialId: "モンスターボールソファ", materialName: "モンスターボールソファ", quantity: 1 },
      { materialId: "モンスターボールベッド", materialName: "モンスターボールベッド", quantity: 1 },
      { materialId: "モンスターボールテーブル", materialName: "モンスターボールテーブル", quantity: 1 },
      { materialId: "モンスターボールライト", materialName: "モンスターボールライト", quantity: 1 },
    ],
  },
  {
    id: "habitat_50", no: 50, name: "黄色の草むら",
    materials: [
      { materialId: "きいろのくさ", materialName: "きいろのくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_51", no: 51, name: "木かげの黄色の草むら",
    materials: [
      { materialId: "大きな木_any", materialName: "大きな木(なんでも)", quantity: 1 },
      { materialId: "きいろのくさ", materialName: "きいろのくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_52", no: 52, name: "高台の黄色の草むら",
    materials: [
      { materialId: "きいろのくさ", materialName: "きいろのくさ", quantity: 4 },
      { materialId: "高いところ", materialName: "高いところ", quantity: 1 },
    ],
  },
  {
    id: "habitat_53", no: 53, name: "うるおう黄色の草むら",
    materials: [
      { materialId: "きいろのくさ", materialName: "きいろのくさ", quantity: 4 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
    ],
  },
  {
    id: "habitat_54", no: 54, name: "沼地の草むら",
    materials: [
      { materialId: "きいろのくさ", materialName: "きいろのくさ", quantity: 4 },
      { materialId: "どろみず", materialName: "どろみず", quantity: 2 },
    ],
  },
  {
    id: "habitat_55", no: 55, name: "草むらの自販機",
    materials: [
      { materialId: "きいろのくさ", materialName: "きいろのくさ", quantity: 4 },
      { materialId: "じどうはんばいき", materialName: "じどうはんばいき", quantity: 1 },
    ],
  },
  {
    id: "habitat_56", no: 56, name: "すずしげな花畑",
    materials: [
      { materialId: "うみべのはな", materialName: "うみべのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_57", no: 57, name: "南国気分",
    materials: [
      { materialId: "おおきなヤシの木", materialName: "おおきなヤシの木", quantity: 1 },
      { materialId: "うみべのはな", materialName: "うみべのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_58", no: 58, name: "風の花畑",
    materials: [
      { materialId: "風力はつでんマシン", materialName: "風力はつでんマシン", quantity: 1 },
      { materialId: "うみべのはな", materialName: "うみべのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_59", no: 59, name: "ビーチの木かげ",
    materials: [
      { materialId: "おおきなヤシの木", materialName: "おおきなヤシの木", quantity: 1 },
      { materialId: "ビーチチェア", materialName: "ビーチチェア", quantity: 1 },
    ],
  },
  {
    id: "habitat_60", no: 60, name: "トロピカルシーサイド",
    materials: [
      { materialId: "おおきなヤシの木", materialName: "おおきなヤシの木", quantity: 1 },
      { materialId: "いけがき_any", materialName: "いけがき(なんでも)", quantity: 4 },
      { materialId: "うみのみず", materialName: "うみのみず", quantity: 2 },
    ],
  },
  {
    id: "habitat_61", no: 61, name: "お休みどころ",
    materials: [
      { materialId: "だんボールのはこ", materialName: "だんボールのはこ", quantity: 1 },
      { materialId: "ほしくさのベッド", materialName: "ほしくさのベッド", quantity: 1 },
    ],
  },
  {
    id: "habitat_62", no: 62, name: "おかたづけをしよう",
    materials: [
      { materialId: "だんボールのはこ", materialName: "だんボールのはこ", quantity: 1 },
      { materialId: "おもちゃ_any", materialName: "おもちゃ(なんでも)", quantity: 2 },
    ],
  },
  {
    id: "habitat_63", no: 63, name: "ゴミ集積所",
    materials: [
      { materialId: "ゴミ入れ_any", materialName: "ゴミ入れ(なんでも)", quantity: 1 },
      { materialId: "かんばん_any", materialName: "かんばん(なんでも)", quantity: 1 },
      { materialId: "ゴミぶくろ", materialName: "ゴミぶくろ", quantity: 1 },
    ],
  },
  {
    id: "habitat_64", no: 64, name: "ゴミ箱がいっぱい",
    materials: [
      { materialId: "ゴミばこ", materialName: "ゴミばこ", quantity: 4 },
    ],
  },
  {
    id: "habitat_65", no: 65, name: "ゴミ捨て場",
    materials: [
      { materialId: "でんちゅう", materialName: "でんちゅう", quantity: 1 },
      { materialId: "ゴミぶくろ", materialName: "ゴミぶくろ", quantity: 1 },
    ],
  },
  {
    id: "habitat_66", no: 66, name: "公園のベンチ",
    materials: [
      { materialId: "イス_長いもの_any", materialName: "イス(長いもの)", quantity: 1 },
      { materialId: "ゴミばこ", materialName: "ゴミばこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_67", no: 67, name: "腹ペコレストラン",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "メニューボード", materialName: "メニューボード", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_68", no: 68, name: "お料理をお届け",
    materials: [
      { materialId: "シックなイス", materialName: "シックなイス", quantity: 2 },
      { materialId: "シックなテーブル", materialName: "シックなテーブル", quantity: 1 },
      { materialId: "いちりんざし", materialName: "いちりんざし", quantity: 1 },
      { materialId: "ワゴン", materialName: "ワゴン", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_69", no: 69, name: "ピヨピヨごはん",
    materials: [
      { materialId: "木のすばこ", materialName: "木のすばこ", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_70", no: 70, name: "カフェスペース",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 2 },
      { materialId: "はち植えの木_any", materialName: "はち植えの木(なんでも)", quantity: 1 },
      { materialId: "カウンターのだい", materialName: "カウンターのだい", quantity: 2 },
      { materialId: "マグカップ", materialName: "マグカップ", quantity: 1 },
      { materialId: "メニューボード", materialName: "メニューボード", quantity: 1 },
    ],
  },
  {
    id: "habitat_71", no: 71, name: "ビーチセット",
    materials: [
      { materialId: "ビーチチェア", materialName: "ビーチチェア", quantity: 1 },
      { materialId: "ビーチパラソル", materialName: "ビーチパラソル", quantity: 1 },
      { materialId: "サイドテーブル", materialName: "サイドテーブル", quantity: 1 },
    ],
  },
  {
    id: "habitat_72", no: 72, name: "ライトアップステージ",
    materials: [
      { materialId: "スポットライト", materialName: "スポットライト", quantity: 2 },
      { materialId: "ステージだい", materialName: "ステージだい", quantity: 1 },
    ],
  },
  {
    id: "habitat_73", no: 73, name: "しかけにご注意",
    materials: [
      { materialId: "ふうせん", materialName: "ふうせん", quantity: 2 },
      { materialId: "びっくりばこ", materialName: "びっくりばこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_74", no: 74, name: "夜のお祭り会場",
    materials: [
      { materialId: "ふうせん", materialName: "ふうせん", quantity: 2 },
      { materialId: "ライチュウかんばん", materialName: "ライチュウかんばん", quantity: 1 },
    ],
  },
  {
    id: "habitat_75", no: 75, name: "お着がえスペース",
    materials: [
      { materialId: "クローゼット_any", materialName: "クローゼット(なんでも)", quantity: 1 },
      { materialId: "かがみ_大きなもの_any", materialName: "かがみ(大きなもの)", quantity: 1 },
    ],
  },
  {
    id: "habitat_76", no: 76, name: "おめかし中は見ないで",
    materials: [
      { materialId: "ついたて_any", materialName: "ついたて(なんでも)", quantity: 2 },
      { materialId: "クローゼット_any", materialName: "クローゼット(なんでも)", quantity: 1 },
      { materialId: "ドレッサー_any", materialName: "ドレッサー(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_77", no: 77, name: "毛糸で編み物",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "あみものキット", materialName: "あみものキット", quantity: 1 },
    ],
  },
  {
    id: "habitat_78", no: 78, name: "温泉の洗い場",
    materials: [
      { materialId: "シャワー", materialName: "シャワー", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "おんせん", materialName: "おんせん", quantity: 2 },
    ],
  },
  {
    id: "habitat_79", no: 79, name: "リゾートでご飯のしたく",
    materials: [
      { materialId: "おおきなヤシの木", materialName: "おおきなヤシの木", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
      { materialId: "たきび", materialName: "たきび", quantity: 1 },
    ],
  },
  {
    id: "habitat_80", no: 80, name: "荷づくりできたよ",
    materials: [
      { materialId: "にぐるま", materialName: "にぐるま", quantity: 1 },
      { materialId: "だんボールのはこ", materialName: "だんボールのはこ", quantity: 2 },
    ],
  },
  {
    id: "habitat_81", no: 81, name: "完治までおやすみ",
    materials: [
      { materialId: "ベッド_any", materialName: "ベッド(なんでも)", quantity: 1 },
      { materialId: "ナチュラルなチェスト", materialName: "ナチュラルなチェスト", quantity: 1 },
      { materialId: "きゅうきゅうばこ", materialName: "きゅうきゅうばこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_82", no: 82, name: "目覚ましベッドスペース",
    materials: [
      { materialId: "ベッド_any", materialName: "ベッド(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "めざましどけい", materialName: "めざましどけい", quantity: 1 },
    ],
  },
  {
    id: "habitat_83", no: 83, name: "自販機ヨコで一息",
    materials: [
      { materialId: "じどうはんばいき", materialName: "じどうはんばいき", quantity: 1 },
      { materialId: "イス_長いもの_any", materialName: "イス(長いもの)", quantity: 1 },
    ],
  },
  {
    id: "habitat_84", no: 84, name: "自販機セット",
    materials: [
      { materialId: "ゴミ入れ_any", materialName: "ゴミ入れ(なんでも)", quantity: 1 },
      { materialId: "じどうはんばいき", materialName: "じどうはんばいき", quantity: 1 },
    ],
  },
  {
    id: "habitat_85", no: 85, name: "ミニゲームコーナー",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "アーケードゲームマシン", materialName: "アーケードゲームマシン", quantity: 1 },
      { materialId: "パンチングマシーン", materialName: "パンチングマシーン", quantity: 1 },
    ],
  },
  {
    id: "habitat_86", no: 86, name: "水力はつでん所",
    materials: [
      { materialId: "水力はつでんマシン", materialName: "水力はつでんマシン", quantity: 1 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
      { materialId: "たき", materialName: "たき", quantity: 1 },
    ],
  },
  {
    id: "habitat_87", no: 87, name: "火力はつでん所",
    materials: [
      { materialId: "ドラムかん", materialName: "ドラムかん", quantity: 1 },
      { materialId: "火力はつでんマシン", materialName: "火力はつでんマシン", quantity: 1 },
    ],
  },
  {
    id: "habitat_88", no: 88, name: "船着き場",
    materials: [
      { materialId: "さんばし", materialName: "さんばし", quantity: 4 },
      { materialId: "がいとう_any", materialName: "がいとう(なんでも)", quantity: 1 },
      { materialId: "うみのみず", materialName: "うみのみず", quantity: 2 },
    ],
  },
  {
    id: "habitat_89", no: 89, name: "あやしい書さい",
    materials: [
      { materialId: "ほんだな", materialName: "ほんだな", quantity: 1 },
      { materialId: "シックなソファ", materialName: "シックなソファ", quantity: 1 },
      { materialId: "ナチュラルなテーブル", materialName: "ナチュラルなテーブル", quantity: 1 },
      { materialId: "ほそながキャンドル", materialName: "ほそながキャンドル", quantity: 1 },
    ],
  },
  {
    id: "habitat_90", no: 90, name: "ふなのりごっこ",
    materials: [
      { materialId: "ふねのハンドル", materialName: "ふねのハンドル", quantity: 1 },
      { materialId: "たる", materialName: "たる", quantity: 2 },
      { materialId: "うちあげづつ", materialName: "うちあげづつ", quantity: 2 },
    ],
  },
  {
    id: "habitat_91", no: 91, name: "レジでお会計",
    materials: [
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 2 },
      { materialId: "レジ", materialName: "レジ", quantity: 1 },
    ],
  },
  {
    id: "habitat_92", no: 92, name: "ちいさなアトリエ",
    materials: [
      { materialId: "キャンバス", materialName: "キャンバス", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_93", no: 93, name: "グルメなお供え物",
    materials: [
      { materialId: "おそなえのだい", materialName: "おそなえのだい", quantity: 1 },
    ],
  },
  {
    id: "habitat_94", no: 94, name: "ピカチュウスペース",
    materials: [
      { materialId: "ピカチュウソファ", materialName: "ピカチュウソファ", quantity: 1 },
      { materialId: "ピカチュウにんぎょう", materialName: "ピカチュウにんぎょう", quantity: 1 },
    ],
  },
  {
    id: "habitat_95", no: 95, name: "ベリーキュートな空間",
    materials: [
      { materialId: "キュートなソファ", materialName: "キュートなソファ", quantity: 1 },
      { materialId: "キュートなテーブル", materialName: "キュートなテーブル", quantity: 1 },
      { materialId: "キュートランプ", materialName: "キュートランプ", quantity: 1 },
      { materialId: "キュートなベッド", materialName: "キュートなベッド", quantity: 1 },
      { materialId: "キュートなドレッサー", materialName: "キュートなドレッサー", quantity: 1 },
    ],
  },
  {
    id: "habitat_96", no: 96, name: "リゾートへようこそ",
    materials: [
      { materialId: "リゾートなソファ", materialName: "リゾートなソファ", quantity: 1 },
      { materialId: "リゾートなテーブル", materialName: "リゾートなテーブル", quantity: 1 },
      { materialId: "リゾートなハンモック", materialName: "リゾートなハンモック", quantity: 1 },
      { materialId: "リゾートなライト", materialName: "リゾートなライト", quantity: 1 },
    ],
  },
  {
    id: "habitat_97", no: 97, name: "ナチュラルなくらし",
    materials: [
      { materialId: "ナチュラルなベッド", materialName: "ナチュラルなベッド", quantity: 1 },
      { materialId: "ナチュラルなソファ", materialName: "ナチュラルなソファ", quantity: 1 },
      { materialId: "ナチュラルなテーブル", materialName: "ナチュラルなテーブル", quantity: 1 },
      { materialId: "ナチュラルなランプ", materialName: "ナチュラルなランプ", quantity: 1 },
    ],
  },
  {
    id: "habitat_98", no: 98, name: "赤い草むら",
    materials: [
      { materialId: "あかいくさ", materialName: "あかいくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_99", no: 99, name: "木かげの赤い草むら",
    materials: [
      { materialId: "大きな木_any", materialName: "大きな木(なんでも)", quantity: 1 },
      { materialId: "あかいくさ", materialName: "あかいくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_100", no: 100, name: "三角木かげに岩と草むら",
    materials: [
      { materialId: "さんかくの木", materialName: "さんかくの木", quantity: 1 },
      { materialId: "あかいくさ", materialName: "あかいくさ", quantity: 4 },
      { materialId: "おおきないし", materialName: "おおきないし", quantity: 1 },
    ],
  },
  {
    id: "habitat_101", no: 101, name: "うるおう赤い草むら",
    materials: [
      { materialId: "あかいくさ", materialName: "あかいくさ", quantity: 4 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
    ],
  },
  {
    id: "habitat_102", no: 102, name: "高台の赤い草むら",
    materials: [
      { materialId: "あかいくさ", materialName: "あかいくさ", quantity: 4 },
      { materialId: "高いところ", materialName: "高いところ", quantity: 1 },
    ],
  },
  {
    id: "habitat_103", no: 103, name: "草むらトレーニング場",
    materials: [
      { materialId: "どのう", materialName: "どのう", quantity: 2 },
      { materialId: "あかいくさ", materialName: "あかいくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_104", no: 104, name: "ゆうがな花畑",
    materials: [
      { materialId: "いわばのはな", materialName: "いわばのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_105", no: 105, name: "木かげのゆうがな花畑",
    materials: [
      { materialId: "さんかくの木", materialName: "さんかくの木", quantity: 1 },
      { materialId: "いわばのはな", materialName: "いわばのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_106", no: 106, name: "うるおうゆうがな花畑",
    materials: [
      { materialId: "みず", materialName: "みず", quantity: 2 },
      { materialId: "いわばのはな", materialName: "いわばのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_107", no: 107, name: "花畑の切り株ステージ",
    materials: [
      { materialId: "いわばのはな", materialName: "いわばのはな", quantity: 4 },
      { materialId: "きりかぶ_any", materialName: "きりかぶ(なんでも)", quantity: 1 },
      { materialId: "キノコのランプ", materialName: "キノコのランプ", quantity: 2 },
    ],
  },
  {
    id: "habitat_108", no: 108, name: "畑しごとはたいへん",
    materials: [
      { materialId: "野菜畑_any", materialName: "野菜畑(なんでも)", quantity: 4 },
      { materialId: "ておしぐるま", materialName: "ておしぐるま", quantity: 1 },
    ],
  },
  {
    id: "habitat_109", no: 109, name: "うきうきな水たまり",
    materials: [
      { materialId: "うきくさ", materialName: "うきくさ", quantity: 4 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
    ],
  },
  {
    id: "habitat_110", no: 110, name: "コケまみれ",
    materials: [
      { materialId: "コケ", materialName: "コケ", quantity: 4 },
    ],
  },
  {
    id: "habitat_111", no: 111, name: "コケまみれの岩",
    materials: [
      { materialId: "コケ", materialName: "コケ", quantity: 4 },
      { materialId: "こけいわ", materialName: "こけいわ", quantity: 1 },
    ],
  },
  {
    id: "habitat_112", no: 112, name: "コケむす温泉",
    materials: [
      { materialId: "コケ", materialName: "コケ", quantity: 4 },
      { materialId: "おんせん", materialName: "おんせん", quantity: 2 },
    ],
  },
  {
    id: "habitat_113", no: 113, name: "露天風呂",
    materials: [
      { materialId: "ゆぐち", materialName: "ゆぐち", quantity: 1 },
      { materialId: "おんせん", materialName: "おんせん", quantity: 2 },
    ],
  },
  {
    id: "habitat_114", no: 114, name: "ととのう温泉",
    materials: [
      { materialId: "ゆぐち", materialName: "ゆぐち", quantity: 1 },
      { materialId: "みずおけ", materialName: "みずおけ", quantity: 1 },
      { materialId: "おんせん", materialName: "おんせん", quantity: 2 },
    ],
  },
  {
    id: "habitat_115", no: 115, name: "マグマでアツアツ",
    materials: [
      { materialId: "アツアツいわ", materialName: "アツアツいわ", quantity: 1 },
      { materialId: "マグマ", materialName: "マグマ", quantity: 2 },
    ],
  },
  {
    id: "habitat_116", no: 116, name: "掘って燃やして",
    materials: [
      { materialId: "ておしぐるま", materialName: "ておしぐるま", quantity: 1 },
      { materialId: "ようこうろ", materialName: "ようこうろ", quantity: 1 },
      { materialId: "やまほりどうぐ", materialName: "やまほりどうぐ", quantity: 1 },
    ],
  },
  {
    id: "habitat_117", no: 117, name: "ガタゴト鉄骨工事",
    materials: [
      { materialId: "てっこつ", materialName: "てっこつ", quantity: 3 },
      { materialId: "ておしぐるま", materialName: "ておしぐるま", quantity: 1 },
      { materialId: "どのう", materialName: "どのう", quantity: 1 },
      { materialId: "やまほりどうぐ", materialName: "やまほりどうぐ", quantity: 1 },
    ],
  },
  {
    id: "habitat_118", no: 118, name: "ブキミな白い岩",
    materials: [
      { materialId: "たけのこいわ", materialName: "たけのこいわ", quantity: 1 },
      { materialId: "コケ", materialName: "コケ", quantity: 4 },
      { materialId: "木ばこ", materialName: "木ばこ", quantity: 1 },
      { materialId: "ランタン", materialName: "ランタン", quantity: 1 },
    ],
  },
  {
    id: "habitat_119", no: 119, name: "荷物置き場でつまみ食い",
    materials: [
      { materialId: "たる", materialName: "たる", quantity: 1 },
      { materialId: "木ばこ", materialName: "木ばこ", quantity: 1 },
      { materialId: "ランタン", materialName: "ランタン", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_120", no: 120, name: "ワクワクな食卓",
    materials: [
      { materialId: "イス_長いもの_any", materialName: "イス(長いもの)", quantity: 2 },
      { materialId: "つくえ_大きなもの_any", materialName: "つくえ(大きなもの)", quantity: 1 },
      { materialId: "パーティープレート", materialName: "パーティープレート", quantity: 4 },
    ],
  },
  {
    id: "habitat_121", no: 121, name: "パクパクパン工房",
    materials: [
      { materialId: "パンがま", materialName: "パンがま", quantity: 1 },
      { materialId: "カウンターのだい", materialName: "カウンターのだい", quantity: 2 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_122", no: 122, name: "ミニキッチン",
    materials: [
      { materialId: "キッチンテーブル", materialName: "キッチンテーブル", quantity: 1 },
      { materialId: "コンロ", materialName: "コンロ", quantity: 1 },
      { materialId: "フライパン_any", materialName: "フライパン(なんでも)", quantity: 1 },
      { materialId: "シンク", materialName: "シンク", quantity: 1 },
    ],
  },
  {
    id: "habitat_123", no: 123, name: "みんなでパーティ",
    materials: [
      { materialId: "フードカウンター", materialName: "フードカウンター", quantity: 1 },
      { materialId: "パーティーカップ", materialName: "パーティーカップ", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_124", no: 124, name: "のんびり写真を振り返り",
    materials: [
      { materialId: "タブレット", materialName: "タブレット", quantity: 1 },
      { materialId: "パーティーカップ", materialName: "パーティーカップ", quantity: 1 },
    ],
  },
  {
    id: "habitat_125", no: 125, name: "さえずりのリサイタル",
    materials: [
      { materialId: "とまり木", materialName: "とまり木", quantity: 1 },
      { materialId: "スタンドマイク", materialName: "スタンドマイク", quantity: 1 },
    ],
  },
  {
    id: "habitat_126", no: 126, name: "リサイタルステージ",
    materials: [
      { materialId: "スピーカー", materialName: "スピーカー", quantity: 2 },
      { materialId: "スタンドマイク", materialName: "スタンドマイク", quantity: 1 },
      { materialId: "ステージだい", materialName: "ステージだい", quantity: 1 },
    ],
  },
  {
    id: "habitat_127", no: 127, name: "リズムに合わせてワンツー",
    materials: [
      { materialId: "サンドバッグ", materialName: "サンドバッグ", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "CDプレーヤー", materialName: "CDプレーヤー", quantity: 1 },
    ],
  },
  {
    id: "habitat_128", no: 128, name: "音楽と読書",
    materials: [
      { materialId: "CDプレーヤー", materialName: "CDプレーヤー", quantity: 1 },
      { materialId: "CDラック", materialName: "CDラック", quantity: 1 },
      { materialId: "ざっしだな", materialName: "ざっしだな", quantity: 1 },
    ],
  },
  {
    id: "habitat_129", no: 129, name: "プチ博物館",
    materials: [
      { materialId: "しきり_any", materialName: "しきり(なんでも)", quantity: 3 },
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 1 },
      { materialId: "おとしもの_大きなもの_any", materialName: "おとしもの(大きなもの)", quantity: 1 },
    ],
  },
  {
    id: "habitat_130", no: 130, name: "さわやかロッカールーム",
    materials: [
      { materialId: "オフィスのロッカー", materialName: "オフィスのロッカー", quantity: 2 },
      { materialId: "はち植えの木_any", materialName: "はち植えの木(なんでも)", quantity: 1 },
      { materialId: "イス_長いもの_any", materialName: "イス(長いもの)", quantity: 1 },
      { materialId: "パンチングマシーン", materialName: "パンチングマシーン", quantity: 1 },
    ],
  },
  {
    id: "habitat_131", no: 131, name: "銅像の観光スポット",
    materials: [
      { materialId: "いけがき_any", materialName: "いけがき(なんでも)", quantity: 4 },
      { materialId: "つきよのダンスぞう", materialName: "つきよのダンスぞう", quantity: 1 },
      { materialId: "かんばん", materialName: "かんばん", quantity: 1 },
    ],
  },
  {
    id: "habitat_132", no: 132, name: "ふみきり",
    materials: [
      { materialId: "せんろ", materialName: "せんろ", quantity: 1 },
      { materialId: "しゃだんき", materialName: "しゃだんき", quantity: 1 },
    ],
  },
  {
    id: "habitat_133", no: 133, name: "シェフの調理場",
    materials: [
      { materialId: "コンロ", materialName: "コンロ", quantity: 1 },
      { materialId: "シンク", materialName: "シンク", quantity: 1 },
      { materialId: "ナチュラルなテーブル", materialName: "ナチュラルなテーブル", quantity: 1 },
      { materialId: "オシャレななべ", materialName: "オシャレななべ", quantity: 1 },
      { materialId: "まないた", materialName: "まないた", quantity: 1 },
      { materialId: "皿にのせた食べ物", materialName: "皿にのせた食べ物", quantity: 1 },
    ],
  },
  {
    id: "habitat_134", no: 134, name: "ザ・ゴージャス",
    materials: [
      { materialId: "ゴージャスなランプ", materialName: "ゴージャスなランプ", quantity: 1 },
      { materialId: "ゴージャスなベッド", materialName: "ゴージャスなベッド", quantity: 1 },
      { materialId: "ゴージャスなソファ", materialName: "ゴージャスなソファ", quantity: 1 },
      { materialId: "ゴージャスなテーブル", materialName: "ゴージャスなテーブル", quantity: 1 },
    ],
  },
  {
    id: "habitat_135", no: 135, name: "ずっしりアイアン",
    materials: [
      { materialId: "てつのベッド", materialName: "てつのベッド", quantity: 1 },
      { materialId: "てつのテーブル", materialName: "てつのテーブル", quantity: 1 },
      { materialId: "てつのイス", materialName: "てつのイス", quantity: 1 },
      { materialId: "ランタン", materialName: "ランタン", quantity: 1 },
    ],
  },
  {
    id: "habitat_136", no: 136, name: "モダンライフ",
    materials: [
      { materialId: "インダストリアルなベッド", materialName: "インダストリアルなベッド", quantity: 1 },
      { materialId: "インダストリアルなデスク", materialName: "インダストリアルなデスク", quantity: 1 },
      { materialId: "インダストリアルなチェア", materialName: "インダストリアルなチェア", quantity: 1 },
    ],
  },
  {
    id: "habitat_137", no: 137, name: "ピンクの草むら",
    materials: [
      { materialId: "ピンクのくさ", materialName: "ピンクのくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_138", no: 138, name: "木かげのピンクの草むら",
    materials: [
      { materialId: "大きな木_any", materialName: "大きな木(なんでも)", quantity: 1 },
      { materialId: "ピンクのくさ", materialName: "ピンクのくさ", quantity: 4 },
    ],
  },
  {
    id: "habitat_139", no: 139, name: "うるおうピンクの草むら",
    materials: [
      { materialId: "ピンクのくさ", materialName: "ピンクのくさ", quantity: 4 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
    ],
  },
  {
    id: "habitat_140", no: 140, name: "高台のピンクの草むら",
    materials: [
      { materialId: "ピンクのくさ", materialName: "ピンクのくさ", quantity: 4 },
      { materialId: "高いところ", materialName: "高いところ", quantity: 1 },
    ],
  },
  {
    id: "habitat_141", no: 141, name: "土管の秘密基地",
    materials: [
      { materialId: "どかん", materialName: "どかん", quantity: 3 },
      { materialId: "草_any", materialName: "草(なんでも)", quantity: 4 },
    ],
  },
  {
    id: "habitat_142", no: 142, name: "フワフワな花畑",
    materials: [
      { materialId: "うきしまのはな", materialName: "うきしまのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_143", no: 143, name: "木かげのフワフワな花畑",
    materials: [
      { materialId: "大きな木_any", materialName: "大きな木(なんでも)", quantity: 1 },
      { materialId: "うきしまのはな", materialName: "うきしまのはな", quantity: 4 },
    ],
  },
  {
    id: "habitat_144", no: 144, name: "うるおうフワフワな花畑",
    materials: [
      { materialId: "うきしまのはな", materialName: "うきしまのはな", quantity: 4 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
    ],
  },
  {
    id: "habitat_145", no: 145, name: "水辺の小舟",
    materials: [
      { materialId: "カヌー", materialName: "カヌー", quantity: 1 },
      { materialId: "うきくさ", materialName: "うきくさ", quantity: 2 },
      { materialId: "みず", materialName: "みず", quantity: 2 },
      { materialId: "高いところ", materialName: "高いところ", quantity: 1 },
    ],
  },
  {
    id: "habitat_146", no: 146, name: "照らされた滝",
    materials: [
      { materialId: "ふみいし", materialName: "ふみいし", quantity: 3 },
      { materialId: "たいまつ", materialName: "たいまつ", quantity: 2 },
      { materialId: "みず", materialName: "みず", quantity: 3 },
      { materialId: "たき", materialName: "たき", quantity: 1 },
    ],
  },
  {
    id: "habitat_147", no: 147, name: "さえずりガーデン",
    materials: [
      { materialId: "しゃれたいけがき", materialName: "しゃれたいけがき", quantity: 1 },
      { materialId: "木のすばこ", materialName: "木のすばこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_148", no: 148, name: "シンプルバスルーム",
    materials: [
      { materialId: "シャワー", materialName: "シャワー", quantity: 1 },
    ],
  },
  {
    id: "habitat_149", no: 149, name: "サイクリング中に休憩",
    materials: [
      { materialId: "じてんしゃ", materialName: "じてんしゃ", quantity: 1 },
      { materialId: "じどうはんばいき", materialName: "じどうはんばいき", quantity: 1 },
    ],
  },
  {
    id: "habitat_150", no: 150, name: "暖炉でうたた寝",
    materials: [
      { materialId: "いしのだんろ", materialName: "いしのだんろ", quantity: 1 },
      { materialId: "イス_長いもの_any", materialName: "イス(長いもの)", quantity: 1 },
    ],
  },
  {
    id: "habitat_151", no: 151, name: "みなぎるサイコパワー",
    materials: [
      { materialId: "シンプルなクッション", materialName: "シンプルなクッション", quantity: 1 },
      { materialId: "すいしょうだま", materialName: "すいしょうだま", quantity: 1 },
    ],
  },
  {
    id: "habitat_152", no: 152, name: "水晶占い",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 2 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "すいしょうだま", materialName: "すいしょうだま", quantity: 1 },
    ],
  },
  {
    id: "habitat_153", no: 153, name: "ゴミ捨て場のテレビ",
    materials: [
      { materialId: "ゴミぶくろ", materialName: "ゴミぶくろ", quantity: 2 },
      { materialId: "テレビ", materialName: "テレビ", quantity: 1 },
    ],
  },
  {
    id: "habitat_154", no: 154, name: "粗大ゴミ置き場",
    materials: [
      { materialId: "てっこつ", materialName: "てっこつ", quantity: 3 },
      { materialId: "タイヤ", materialName: "タイヤ", quantity: 1 },
      { materialId: "ゴミ入れ_any", materialName: "ゴミ入れ(なんでも)", quantity: 1 },
      { materialId: "でんしレンジ", materialName: "でんしレンジ", quantity: 1 },
    ],
  },
  {
    id: "habitat_155", no: 155, name: "相棒と取り調べ",
    materials: [
      { materialId: "ウインディにんぎょう", materialName: "ウインディにんぎょう", quantity: 1 },
      { materialId: "パイプイス", materialName: "パイプイス", quantity: 2 },
      { materialId: "インダストリアルなデスク", materialName: "インダストリアルなデスク", quantity: 1 },
      { materialId: "デスクライト", materialName: "デスクライト", quantity: 1 },
    ],
  },
  {
    id: "habitat_156", no: 156, name: "マンホール点検中",
    materials: [
      { materialId: "こんもりてつパイプ", materialName: "こんもりてつパイプ", quantity: 1 },
      { materialId: "マンホール", materialName: "マンホール", quantity: 1 },
      { materialId: "やまほりどうぐ", materialName: "やまほりどうぐ", quantity: 1 },
      { materialId: "ポールさんかくコーン", materialName: "ポールさんかくコーン", quantity: 1 },
    ],
  },
  {
    id: "habitat_157", no: 157, name: "ピカピカ洗面所",
    materials: [
      { materialId: "カベかけタオル", materialName: "カベかけタオル", quantity: 1 },
      { materialId: "カベかけかがみ", materialName: "カベかけかがみ", quantity: 1 },
      { materialId: "せんめんだい", materialName: "せんめんだい", quantity: 1 },
    ],
  },
  {
    id: "habitat_158", no: 158, name: "ホームシアター",
    materials: [
      { materialId: "スピーカー", materialName: "スピーカー", quantity: 2 },
      { materialId: "だい_any", materialName: "だい(なんでも)", quantity: 1 },
      { materialId: "テレビ", materialName: "テレビ", quantity: 1 },
    ],
  },
  {
    id: "habitat_159", no: 159, name: "勉強スペース",
    materials: [
      { materialId: "ほんだな", materialName: "ほんだな", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "えんぴついれ", materialName: "えんぴついれ", quantity: 1 },
    ],
  },
  {
    id: "habitat_160", no: 160, name: "リズミカルなリビング",
    materials: [
      { materialId: "スピーカー", materialName: "スピーカー", quantity: 2 },
      { materialId: "おんぷマット_any", materialName: "おんぷマット(なんでも)", quantity: 4 },
      { materialId: "テレビ", materialName: "テレビ", quantity: 1 },
    ],
  },
  {
    id: "habitat_161", no: 161, name: "キュキュッとお掃除",
    materials: [
      { materialId: "おそうじセット", materialName: "おそうじセット", quantity: 1 },
    ],
  },
  {
    id: "habitat_162", no: 162, name: "しっとり化粧台",
    materials: [
      { materialId: "ドレッサー_any", materialName: "ドレッサー(なんでも)", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "かしつき", materialName: "かしつき", quantity: 1 },
    ],
  },
  {
    id: "habitat_163", no: 163, name: "プチ図書館",
    materials: [
      { materialId: "ほんだな", materialName: "ほんだな", quantity: 2 },
      { materialId: "きゃたつ", materialName: "きゃたつ", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "明かり_any", materialName: "明かり(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_164", no: 164, name: "ゲームコーナーで対戦",
    materials: [
      { materialId: "アーケードゲームマシン", materialName: "アーケードゲームマシン", quantity: 2 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 2 },
    ],
  },
  {
    id: "habitat_165", no: 165, name: "プレイランド",
    materials: [
      { materialId: "すべりだい", materialName: "すべりだい", quantity: 1 },
      { materialId: "おもちゃ_any", materialName: "おもちゃ(なんでも)", quantity: 1 },
    ],
  },
  {
    id: "habitat_166", no: 166, name: "おしごとデスク",
    materials: [
      { materialId: "オフィスのデスク", materialName: "オフィスのデスク", quantity: 1 },
      { materialId: "ノートパソコン", materialName: "ノートパソコン", quantity: 1 },
      { materialId: "マグカップ", materialName: "マグカップ", quantity: 1 },
      { materialId: "オフィスのイス", materialName: "オフィスのイス", quantity: 1 },
    ],
  },
  {
    id: "habitat_167", no: 167, name: "オフィスのバックヤード",
    materials: [
      { materialId: "オフィスのたな", materialName: "オフィスのたな", quantity: 1 },
      { materialId: "きゃたつ", materialName: "きゃたつ", quantity: 1 },
      { materialId: "だんボールのはこ", materialName: "だんボールのはこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_168", no: 168, name: "実験スペース",
    materials: [
      { materialId: "じっけんセット", materialName: "じっけんセット", quantity: 1 },
      { materialId: "けんびきょう", materialName: "けんびきょう", quantity: 1 },
      { materialId: "ろんぶん", materialName: "ろんぶん", quantity: 1 },
    ],
  },
  {
    id: "habitat_169", no: 169, name: "はかせを目指して研究中",
    materials: [
      { materialId: "ホワイトボード", materialName: "ホワイトボード", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "からまりコード", materialName: "からまりコード", quantity: 1 },
      { materialId: "ノートパソコン", materialName: "ノートパソコン", quantity: 1 },
    ],
  },
  {
    id: "habitat_170", no: 170, name: "研究者のデスク",
    materials: [
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 2 },
      { materialId: "コンピューター", materialName: "コンピューター", quantity: 1 },
      { materialId: "じっけんセット", materialName: "じっけんセット", quantity: 1 },
    ],
  },
  {
    id: "habitat_171", no: 171, name: "ご自由にお読みください",
    materials: [
      { materialId: "ざっしだな", materialName: "ざっしだな", quantity: 1 },
      { materialId: "しんぶん", materialName: "しんぶん", quantity: 1 },
    ],
  },
  {
    id: "habitat_172", no: 172, name: "ドコドコびっくり箱",
    materials: [
      { materialId: "スポットライト", materialName: "スポットライト", quantity: 2 },
      { materialId: "おおだいこ", materialName: "おおだいこ", quantity: 1 },
      { materialId: "びっくりばこ", materialName: "びっくりばこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_173", no: 173, name: "いたずらスイッチ",
    materials: [
      { materialId: "ゆかつきスイッチ", materialName: "ゆかつきスイッチ", quantity: 1 },
      { materialId: "びっくりばこ", materialName: "びっくりばこ", quantity: 1 },
    ],
  },
  {
    id: "habitat_174", no: 174, name: "絶景の顔だしパネル",
    materials: [
      { materialId: "かおだしパネル", materialName: "かおだしパネル", quantity: 1 },
      { materialId: "スポットライト", materialName: "スポットライト", quantity: 2 },
      { materialId: "高いところ", materialName: "高いところ", quantity: 1 },
    ],
  },
  {
    id: "habitat_175", no: 175, name: "タイヤ公園",
    materials: [
      { materialId: "すべりだい", materialName: "すべりだい", quantity: 1 },
      { materialId: "タイヤ", materialName: "タイヤ", quantity: 1 },
      { materialId: "とびこえタイヤ", materialName: "とびこえタイヤ", quantity: 2 },
    ],
  },
  {
    id: "habitat_176", no: 176, name: "自然の中のマーケット",
    materials: [
      { materialId: "大きな木_any", materialName: "大きな木(なんでも)", quantity: 1 },
      { materialId: "おおきないし", materialName: "おおきないし", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 2 },
      { materialId: "レジ", materialName: "レジ", quantity: 1 },
    ],
  },
  {
    id: "habitat_177", no: 177, name: "工事現場のはつでん所",
    materials: [
      { materialId: "火力はつでんマシン", materialName: "火力はつでんマシン", quantity: 1 },
      { materialId: "てつのあしば", materialName: "てつのあしば", quantity: 2 },
      { materialId: "こんもりてつパイプ", materialName: "こんもりてつパイプ", quantity: 1 },
    ],
  },
  {
    id: "habitat_178", no: 178, name: "道場でトレーニング",
    materials: [
      { materialId: "かけじく", materialName: "かけじく", quantity: 2 },
      { materialId: "かいりきいわ", materialName: "かいりきいわ", quantity: 2 },
    ],
  },
  {
    id: "habitat_179", no: 179, name: "悪の組織のアジト",
    materials: [
      { materialId: "はち植えの木_any", materialName: "はち植えの木(なんでも)", quantity: 2 },
      { materialId: "ロケットだんのかべかけ", materialName: "ロケットだんのかべかけ", quantity: 1 },
      { materialId: "ゴージャスなソファ", materialName: "ゴージャスなソファ", quantity: 1 },
    ],
  },
  {
    id: "habitat_180", no: 180, name: "九つのほむら",
    materials: [
      { materialId: "かがりび", materialName: "かがりび", quantity: 9 },
    ],
  },
  {
    id: "habitat_181", no: 181, name: "ぬいぐるみに囲まれて",
    materials: [
      { materialId: "ウインディにんぎょう", materialName: "ウインディにんぎょう", quantity: 1 },
      { materialId: "ピカチュウにんぎょう", materialName: "ピカチュウにんぎょう", quantity: 1 },
      { materialId: "カイリューにんぎょう", materialName: "カイリューにんぎょう", quantity: 1 },
      { materialId: "イーブイにんぎょう", materialName: "イーブイにんぎょう", quantity: 1 },
    ],
  },
  {
    id: "habitat_182", no: 182, name: "バツグンのゲーム環境",
    materials: [
      { materialId: "ゲーミングベッド", materialName: "ゲーミングベッド", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "ゲーミングパソコン", materialName: "ゲーミングパソコン", quantity: 1 },
      { materialId: "ゲーミングれいぞうこ", materialName: "ゲーミングれいぞうこ", quantity: 1 },
      { materialId: "ゲーミングチェア", materialName: "ゲーミングチェア", quantity: 1 },
    ],
  },
  {
    id: "habitat_183", no: 183, name: "ポップオブポップ",
    materials: [
      { materialId: "ポップなベッド", materialName: "ポップなベッド", quantity: 1 },
      { materialId: "ポップなソファ", materialName: "ポップなソファ", quantity: 1 },
      { materialId: "ポップなテーブル", materialName: "ポップなテーブル", quantity: 1 },
    ],
  },
  {
    id: "habitat_184", no: 184, name: "釣り堀",
    materials: [
      { materialId: "つりざお", materialName: "つりざお", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "みず", materialName: "みず", quantity: 1 },
    ],
  },
  {
    id: "habitat_185", no: 185, name: "海釣り",
    materials: [
      { materialId: "つりざお", materialName: "つりざお", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "うみのみず", materialName: "うみのみず", quantity: 1 },
    ],
  },
  {
    id: "habitat_186", no: 186, name: "沼釣り",
    materials: [
      { materialId: "つりざお", materialName: "つりざお", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "どろみず", materialName: "どろみず", quantity: 2 },
    ],
  },
  {
    id: "habitat_187", no: 187, name: "温泉釣り",
    materials: [
      { materialId: "つりざお", materialName: "つりざお", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "おんせん", materialName: "おんせん", quantity: 1 },
    ],
  },
  {
    id: "habitat_188", no: 188, name: "マグマ釣り",
    materials: [
      { materialId: "つりざお", materialName: "つりざお", quantity: 1 },
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "マグマ", materialName: "マグマ", quantity: 1 },
    ],
  },
  {
    id: "habitat_189", no: 189, name: "ハイなロックステージ",
    materials: [
      { materialId: "スピーカー", materialName: "スピーカー", quantity: 2 },
      { materialId: "ステージだい", materialName: "ステージだい", quantity: 1 },
      { materialId: "イカしたエレキギター", materialName: "イカしたエレキギター", quantity: 1 },
      { materialId: "スタンドマイク", materialName: "スタンドマイク", quantity: 1 },
    ],
  },
  {
    id: "habitat_190", no: 190, name: "ローなロックステージ",
    materials: [
      { materialId: "スピーカー", materialName: "スピーカー", quantity: 2 },
      { materialId: "ステージだい", materialName: "ステージだい", quantity: 1 },
      { materialId: "イカしたエレキベース", materialName: "イカしたエレキベース", quantity: 1 },
      { materialId: "スタンドマイク", materialName: "スタンドマイク", quantity: 1 },
    ],
  },
  {
    id: "habitat_191", no: 191, name: "怨念の騎士の祭壇",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 1 },
      { materialId: "ノロイノヨロイ", materialName: "ノロイノヨロイ", quantity: 1 },
      { materialId: "ふみいし", materialName: "ふみいし", quantity: 2 },
      { materialId: "かがりび", materialName: "かがりび", quantity: 2 },
    ],
  },
  {
    id: "habitat_192", no: 192, name: "忠誠の騎士の祭壇",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 1 },
      { materialId: "イワイノヨロイ", materialName: "イワイノヨロイ", quantity: 1 },
      { materialId: "ふみいし", materialName: "ふみいし", quantity: 2 },
      { materialId: "かがりび", materialName: "かがりび", quantity: 2 },
    ],
  },
  {
    id: "habitat_193", no: 193, name: "ツバサのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 1 },
      { materialId: "ツバサのカセキ・あたま", materialName: "ツバサのカセキ・あたま", quantity: 1 },
      { materialId: "ツバサのカセキ・うよく", materialName: "ツバサのカセキ・うよく", quantity: 1 },
      { materialId: "ツバサのカセキ・さよく", materialName: "ツバサのカセキ・さよく", quantity: 1 },
      { materialId: "ツバサのカセキ・どう", materialName: "ツバサのカセキ・どう", quantity: 1 },
      { materialId: "ツバサのカセキ・しっぽ", materialName: "ツバサのカセキ・しっぽ", quantity: 1 },
    ],
  },
  {
    id: "habitat_194", no: 194, name: "ずがいのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 1 },
      { materialId: "ずがいのカセキ", materialName: "ずがいのカセキ", quantity: 1 },
    ],
  },
  {
    id: "habitat_195", no: 195, name: "ずつきのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 1 },
      { materialId: "ずつきのカセキ・あたま", materialName: "ずつきのカセキ・あたま", quantity: 1 },
      { materialId: "ずつきのカセキ・どう", materialName: "ずつきのカセキ・どう", quantity: 1 },
      { materialId: "ずつきのカセキ・しっぽ", materialName: "ずつきのカセキ・しっぽ", quantity: 1 },
    ],
  },
  {
    id: "habitat_196", no: 196, name: "たてのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 2 },
      { materialId: "たてのカセキ", materialName: "たてのカセキ", quantity: 1 },
    ],
  },
  {
    id: "habitat_197", no: 197, name: "シールドのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 2 },
      { materialId: "シールドのカセキ・あたま", materialName: "シールドのカセキ・あたま", quantity: 1 },
      { materialId: "シールドのカセキ・どう", materialName: "シールドのカセキ・どう", quantity: 1 },
      { materialId: "シールドのカセキ・しっぽ", materialName: "シールドのカセキ・しっぽ", quantity: 1 },
    ],
  },
  {
    id: "habitat_198", no: 198, name: "アゴのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 1 },
      { materialId: "アゴのカセキ", materialName: "アゴのカセキ", quantity: 1 },
    ],
  },
  {
    id: "habitat_199", no: 199, name: "ぼうくんのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 2 },
      { materialId: "ぼうくんのカセキ・あたま", materialName: "ぼうくんのカセキ・あたま", quantity: 1 },
      { materialId: "ぼうくんのカセキ・どう", materialName: "ぼうくんのカセキ・どう", quantity: 1 },
      { materialId: "ぼうくんのカセキ・あし", materialName: "ぼうくんのカセキ・あし", quantity: 1 },
      { materialId: "ぼうくんのカセキ・しっぽ", materialName: "ぼうくんのカセキ・しっぽ", quantity: 1 },
    ],
  },
  {
    id: "habitat_200", no: 200, name: "ヒレのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 2 },
      { materialId: "ヒレのカセキ", materialName: "ヒレのカセキ", quantity: 1 },
    ],
  },
  {
    id: "habitat_201", no: 201, name: "ツンドラのカセキ展示台",
    materials: [
      { materialId: "だいざ・てんじだい", materialName: "だいざ・てんじだい", quantity: 1 },
      { materialId: "ツンドラのカセキ・あたま", materialName: "ツンドラのカセキ・あたま", quantity: 1 },
      { materialId: "ツンドラのカセキ・どう", materialName: "ツンドラのカセキ・どう", quantity: 1 },
      { materialId: "ツンドラのカセキ・しっぽ", materialName: "ツンドラのカセキ・しっぽ", quantity: 1 },
    ],
  },
  {
    id: "habitat_202", no: 202, name: "はじけるブルー",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "クリームソーダ", materialName: "クリームソーダ", quantity: 1 },
    ],
  },
  {
    id: "habitat_203", no: 203, name: "シビれるポテト",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "フライドポテト", materialName: "フライドポテト", quantity: 1 },
    ],
  },
  {
    id: "habitat_204", no: 204, name: "もえるほどスパイシー",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "ピザ", materialName: "ピザ", quantity: 1 },
    ],
  },
  {
    id: "habitat_205", no: 205, name: "エレガントな昼下がり",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "アフタヌーンティーセット", materialName: "アフタヌーンティーセット", quantity: 1 },
    ],
  },
  {
    id: "habitat_206", no: 206, name: "ブラックな味わい",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "チョコクッキー", materialName: "チョコクッキー", quantity: 1 },
    ],
  },
  {
    id: "habitat_207", no: 207, name: "緑のサンドイッチ",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "サンドイッチ", materialName: "サンドイッチ", quantity: 1 },
    ],
  },
  {
    id: "habitat_208", no: 208, name: "ヒンヤリかき氷",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "かきごおり", materialName: "かきごおり", quantity: 1 },
    ],
  },
  {
    id: "habitat_209", no: 209, name: "ラブリーなケーキ",
    materials: [
      { materialId: "イス_any", materialName: "イス(なんでも)", quantity: 1 },
      { materialId: "つくえ_any", materialName: "つくえ(なんでも)", quantity: 1 },
      { materialId: "リボンケーキ", materialName: "リボンケーキ", quantity: 1 },
    ],
  },

];

/**
 * このデータをサーバー(server/index.js)で使う場合は
 * module.exports = { HABITATS }; に変更してください。
 *
 * Reactフロントエンドで使う場合はそのまま import して使えます:
 * import { HABITATS } from './habitatsData';
 */
