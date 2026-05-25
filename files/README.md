# 🌿 生息地作成進捗管理アプリ

## 構成
```
pokemon-habitat-app/
├── server/          ← バックエンド（Node.js + Express）
│   ├── index.js     ← APIサーバー本体
│   └── package.json
└── client/          ← フロントエンド（React）
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── index.js           ← Reactの起動ファイル
    │   ├── App.js             ← メインコンポーネント（状態管理）
    │   ├── App.css
    │   ├── index.css
    │   └── components/
    │       ├── Header.js      ← ヘッダー（タイトル・進捗バー）
    │       ├── Header.css
    │       ├── HabitatList.js ← 生息地一覧テーブル
    │       ├── HabitatList.css
    │       ├── MaterialPanel.js ← 素材合計パネル（右側）
    │       └── MaterialPanel.css
    └── package.json
```

## 起動方法

### 1. バックエンドサーバーを起動

```bash
cd server
npm install        # 初回のみ（ライブラリをインストール）
npm start          # サーバー起動（ポート3001）
```

### 2. フロントエンドを起動（別ターミナルで）

```bash
cd client
npm install        # 初回のみ
npm start          # 開発サーバー起動（ポート3000）
```

### 3. ブラウザでアクセス

```
http://localhost:3000
```

## 機能一覧

| 機能 | 説明 |
|------|------|
| 生息地一覧 | 209件の生息地をテーブル表示 |
| 作成済みチェック | 行クリックでON/OFF切替 |
| 検索 | 生息地名でリアルタイム検索 |
| フィルター | 未作成のみ表示トグル |
| 素材自動集計 | 未作成分の素材を合計してリアルタイム表示 |
| 状態保存 | LocalStorageで永続化（リロードしても維持） |
| 進捗バー | 全体の完了率を表示 |
| リセット | 全チェックをクリア |

## データ仕様

- **生息地**: 209件（Habitat 1〜209）
- **素材**: 100種類（Material 1〜100）
- **各生息地の素材**: ランダム1〜5種類
- **必要数**: ランダム1〜10個

※ データは固定シードの疑似乱数で生成されるため、毎回同じデータになります
