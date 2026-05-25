/**
 * ============================================================
 * HabitatList.js - 生息地一覧コンポーネント
 * ============================================================
 * 検索・フィルター機能と生息地テーブルを表示します。
 *
 * 機能:
 * - 生息地名の検索ボックス
 * - 「未作成のみ表示」トグル
 * - 生息地テーブル（名前・素材・チェックボックス）
 * ============================================================
 */

import React from "react";
import "./HabitatList.css";

/**
 * HabitatListコンポーネント
 * @param {Array} habitats - 表示する生息地リスト（フィルター済み）
 * @param {Set} completedIds - 作成済み生息地IDのセット
 * @param {string} searchText - 検索テキスト
 * @param {boolean} showOnlyIncomplete - 「未作成のみ」フィルターのON/OFF
 * @param {boolean} isLoading - 読み込み中フラグ
 * @param {string|null} error - エラーメッセージ
 * @param {Function} onToggleComplete - チェック操作のコールバック
 * @param {Function} onSearchChange - 検索テキスト変更のコールバック
 * @param {Function} onFilterChange - フィルター変更のコールバック
 */
function HabitatList({
  habitats,
  completedIds,
  searchText,
  showOnlyIncomplete,
  isLoading,
  error,
  onToggleComplete,
  onSearchChange,
  onFilterChange,
}) {
  // --- ローディング中の表示 ---
  if (isLoading) {
    return (
      <div className="habitat-list-container">
        <div className="loading-state">
          <div className="loading-spinner" />
          <p>データを読み込み中...</p>
          <p className="loading-sub">サーバーに接続しています</p>
        </div>
      </div>
    );
  }

  // --- エラー時の表示 ---
  if (error) {
    return (
      <div className="habitat-list-container">
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <p className="error-title">データ取得エラー</p>
          <p className="error-message">{error}</p>
          <p className="error-hint">
            サーバーが起動しているか確認してください。
            <br />
            <code>cd server &amp;&amp; npm start</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="habitat-list-container">
      {/* === 検索・フィルターエリア === */}
      <div className="controls-bar">
        {/* 検索ボックス */}
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="生息地名を検索..."
            value={searchText}
            // 入力のたびに親コンポーネントの状態を更新する
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {/* テキストがあればクリアボタンを表示 */}
          {searchText && (
            <button
              className="search-clear"
              onClick={() => onSearchChange("")}
              title="検索をクリア"
            >
              ✕
            </button>
          )}
        </div>

        {/* 「未作成のみ表示」トグル */}
        <label className="filter-toggle">
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={showOnlyIncomplete}
            onChange={(e) => onFilterChange(e.target.checked)}
          />
          <span className="toggle-label">
            未作成のみ表示
          </span>
        </label>

        {/* 現在の表示件数 */}
        <span className="result-count">
          {habitats.length} 件表示
        </span>
      </div>

      {/* === 生息地テーブル === */}
      {habitats.length === 0 ? (
        // 表示するデータがない場合
        <div className="empty-state">
          <div className="empty-icon">🌫️</div>
          <p>該当する生息地がありません</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="habitat-table">
            {/* テーブルヘッダー */}
            <thead>
              <tr>
                <th className="col-check">完了</th>
                <th className="col-name">生息地名</th>
                <th className="col-materials">必要素材</th>
              </tr>
            </thead>

            {/* テーブルボディ（生息地ごとに1行） */}
            <tbody>
              {habitats.map((habitat) => {
                // この生息地が作成済みかどうか
                const isCompleted = completedIds.has(habitat.id);

                return (
                  <tr
                    key={habitat.id} // Reactのリスト描画に必須のkey
                    className={`habitat-row ${isCompleted ? "row-completed" : ""}`}
                    // 行クリックでもチェック操作できる
                    onClick={() => onToggleComplete(habitat.id)}
                  >
                    {/* チェックボックス列 */}
                    <td className="col-check">
                      <div className={`custom-checkbox ${isCompleted ? "checked" : ""}`}>
                        {isCompleted && <span className="check-mark">✓</span>}
                      </div>
                    </td>

                    {/* 生息地名列 */}
                    <td className="col-name">
                      <span className={`habitat-name ${isCompleted ? "name-completed" : ""}`}>
                        {habitat.name}
                      </span>
                    </td>

                    {/* 必要素材列 */}
                    <td className="col-materials">
                      <div className="material-tags">
                        {habitat.materials.map((mat) => (
                          <span key={mat.materialId} className="material-tag">
                            {/* 素材名 × 必要数 */}
                            {mat.materialName}
                            <span className="material-qty">×{mat.quantity}</span>
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default HabitatList;
