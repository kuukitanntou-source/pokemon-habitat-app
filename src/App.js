/**
 * ============================================================
 * App.js - メインコンポーネント
 * ============================================================
 * このファイルはアプリの中心となるコンポーネントです。
 * すべての状態（データ）を管理し、各コンポーネントに渡します。
 *
 * コンポーネント構成:
 *   App
 *   ├── Header（タイトルバー）
 *   ├── HabitatList（生息地一覧）左側
 *   └── MaterialPanel（素材合計パネル）右側
 * ============================================================
 */

import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import HabitatList from "./components/HabitatList";
import MaterialPanel from "./components/MaterialPanel";
import "./App.css";
import { HABITATS } from "./habitatsData";

/**
 * App コンポーネント
 * アプリ全体の状態管理と大まかなレイアウトを担当します
 */
function App() {
  // ============================================================
  // State（状態）の定義
  // useState は React の「記憶」機能。値が変わると画面が再描画される
  // ============================================================

  /** 全生息地データ（サーバーから取得） */
  const [habitats] = useState(HABITATS);

  /** 作成済み生息地IDのセット。例: { "habitat_1", "habitat_5", ... } */
  const [completedIds, setCompletedIds] = useState(() => {
    // ページ読み込み時にLocalStorageから復元する
    // () => {...} という書き方で、初回のみ実行される初期化関数を指定できる
    try {
      const saved = localStorage.getItem("completedHabitats");
      // 保存データがあればJSON解析してSetに変換、なければ空のSetを返す
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      // 万が一データが壊れていたら空のSetを返す
      return new Set();
    }
  });


  /** 検索テキスト */
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("habitats");
  const [ownedMaterials, setOwnedMaterials] = useState(() => {
  try {
    const saved = localStorage.getItem("ownedMaterials");
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
});

  /** 「未作成のみ表示」フィルターのON/OFF */
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  /** データ読み込み中かどうか */
  const [isLoading] = useState(false);

  /** エラーメッセージ（読み込み失敗時） */
  const [error] = useState(null);

  // ============================================================
  // useEffect - 副作用の処理
  // コンポーネントのレンダリング後に実行される処理を書く場所
  // ============================================================

  /**
   * 初回マウント時にサーバーからデータを取得する
   * [] を第2引数に指定すると「最初の1回だけ実行」になる
   */
 

  /**
   * completedIds が変わるたびにLocalStorageに保存する
   * これにより、ページをリロードしても状態が保持される
   */
  useEffect(() => {
    // Setは直接JSONにできないので、配列に変換してから保存
    localStorage.setItem(
      "completedHabitats",
      JSON.stringify([...completedIds])
    );
  }, [completedIds]); // completedIdsが変わったら実行
  useEffect(() => {
  localStorage.setItem(
    "ownedMaterials",
    JSON.stringify(ownedMaterials)
  );
}, [ownedMaterials]);

  // ============================================================
  // ハンドラ関数（ユーザー操作に反応する関数）
  // ============================================================

  /**
   * チェックボックスが操作されたときの処理
   * @param {string} habitatId - 操作された生息地のID
   */
  const handleToggleComplete = (habitatId) => {
    setCompletedIds((prev) => {
      // 新しいSetを作る（元のSetを直接変更しないのがReactの基本）
      const next = new Set(prev);
      if (next.has(habitatId)) {
        next.delete(habitatId); // チェック済みなら解除
      } else {
        next.add(habitatId); // 未チェックならチェック
      }
      return next;
    });
  };

  /**
   * 全チェックをリセットする処理
   */
  const handleReset = () => {
    if (window.confirm("全ての「作成済み」状態をリセットしますか？")) {
      setCompletedIds(new Set());
    }
  };

  // ============================================================
  // useMemo - パフォーマンス最適化
  // 依存する値が変わったときだけ再計算される
  // ============================================================

  /**
   * 検索・フィルターを適用した生息地リストを計算する
   * habitats, searchText, showOnlyIncomplete, completedIds のどれかが変わったら再計算
   */
  const filteredHabitats = useMemo(() => {
    return habitats.filter((habitat) => {
      // 検索テキストでフィルタリング（大文字小文字を区別しない）
      const matchesSearch = habitat.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      // 「未作成のみ」フィルタリング
      const matchesFilter = showOnlyIncomplete
        ? !completedIds.has(habitat.id) // 未作成のみONなら、完了していないものだけ
        : true; // OFFなら全て通す

      return matchesSearch && matchesFilter;
    });
  }, [habitats, searchText, showOnlyIncomplete, completedIds]);

  /**
   * 未作成の生息地に必要な素材の合計を計算する
   * この関数が最も重要な集計ロジックです
   */
  const requiredMaterials = useMemo(() => {
    // 素材名をキーに、必要数の合計を値とするオブジェクトを作る
    const totals = {}; // 例: { "Material 1": 15, "Material 5": 32, ... }

    habitats.forEach((habitat) => {
      // 作成済みの生息地はスキップ
      if (completedIds.has(habitat.id)) return;

      // この生息地の各素材を集計
      habitat.materials.forEach(({ materialName, quantity }) => {
        if (totals[materialName]) {
          totals[materialName] += quantity; // 既にあれば加算
        } else {
          totals[materialName] = quantity; // 初めてなら追加
        }
      });
    });

    // オブジェクトをソート済み配列に変換して返す（必要数の多い順）
    return Object.entries(totals)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count); // 降順ソート
  }, [habitats, completedIds]);

  // ============================================================
  // 統計情報の計算
  // ============================================================
  const totalCount = habitats.length;
  const completedCount = completedIds.size;
  const incompleteCount = totalCount - completedCount;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // ============================================================
  // レンダリング（画面の描画）
  // ============================================================
  return (
    <div className="app-container">
      {/* ヘッダー（タイトル・進捗バー） */}
      <Header
        totalCount={totalCount}
        completedCount={completedCount}
        incompleteCount={incompleteCount}
        progressPercent={progressPercent}
        onReset={handleReset}
      />

<div className="tab-buttons">

  <button
    className={activeTab === "habitats" ? "active-tab" : ""}
    onClick={() => setActiveTab("habitats")}
  >
    生息地
  </button>

  <button
    className={activeTab === "materials" ? "active-tab" : ""}
    onClick={() => setActiveTab("materials")}
  >
    必要素材
  </button>

</div>

      {/* メインコンテンツ（左右レイアウト） */}
    <div className="main-layout">

      {activeTab === "habitats" && (
        <div className="left-panel">
          <HabitatList
            habitats={filteredHabitats}
            completedIds={completedIds}
            searchText={searchText}
            showOnlyIncomplete={showOnlyIncomplete}
            isLoading={isLoading}
            error={error}
            onToggleComplete={handleToggleComplete}
            onSearchChange={setSearchText}
            onFilterChange={setShowOnlyIncomplete}
          />
        </div>
      )}

      {activeTab === "materials" && (
        <div className="right-panel">
          <MaterialPanel
            materials={requiredMaterials}
            incompleteCount={incompleteCount}
            ownedMaterials={ownedMaterials}
            setOwnedMaterials={setOwnedMaterials}
          />
        </div>
     )}

    </div>
    </div>
  );
}

export default App;
