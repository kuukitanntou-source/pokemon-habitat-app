/**
 * ============================================================
 * MaterialPanel.js - 必要素材合計パネルコンポーネント
 * ============================================================
 * 未作成の生息地に必要な素材の合計を表示する右サイドパネルです。
 * チェックボックスが変わるたびに、親コンポーネント(App.js)で
 * 再計算された結果を受け取って表示します。
 * ============================================================
 */

import React, { useState } from "react";
import "./MaterialPanel.css";

/**
 * MaterialPanelコンポーネント
 * @param {Array} materials - 素材の合計リスト [{name, count}, ...]（降順ソート済み）
 * @param {number} incompleteCount - 未作成の生息地数
 */
function MaterialPanel({
  materials,
  incompleteCount,
  ownedMaterials,
  setOwnedMaterials,
}) {
  // 素材リストを検索するための状態
  const [materialSearch, setMaterialSearch] = useState("");

  // 検索テキストでフィルタリングした素材リスト
  const filteredMaterials = materials.filter((mat) =>
    mat.name.toLowerCase().includes(materialSearch.toLowerCase())
  );

  // 最大値（プログレスバーの比率計算用）
  const maxCount = materials.length > 0 ? materials[0].count : 1;

  return (
    <div className="material-panel">
      {/* パネルタイトル */}
      <div className="panel-header">
        <h2 className="panel-title">
          <span className="panel-icon">📦</span>
          必要素材 合計
        </h2>
        <div className="panel-subtitle">
          未作成 {incompleteCount} 件分
        </div>
      </div>

      {/* 素材が何もない場合（全部完了した場合） */}
      {materials.length === 0 ? (
        <div className="panel-complete">
          <div className="complete-icon">🎉</div>
          <p className="complete-text">全て完成！</p>
          <p className="complete-sub">お疲れ様でした！</p>
        </div>
      ) : (
        <>
          {/* 素材内検索 */}
          <div className="material-search-wrapper">
            <input
              type="text"
              className="material-search-input"
              placeholder="素材を絞り込み..."
              value={materialSearch}
              onChange={(e) => setMaterialSearch(e.target.value)}
            />
          </div>

          {/* 合計素材数の表示 */}
          <div className="panel-summary">
            <span className="summary-kinds">{materials.length} 種類</span>
            <span className="summary-separator">／</span>
            <span className="summary-total">
              合計{" "}
              {materials.reduce((sum, m) => sum + m.count, 0).toLocaleString()}{" "}
              個
            </span>
          </div>

          {/* 素材リスト */}
<div className="material-list">
  {filteredMaterials.length === 0 ? (
    <p className="no-material">該当なし</p>
  ) : (
    filteredMaterials.map((mat, index) => {
      const owned = ownedMaterials[mat.name] || 0;

      const remaining = Math.max(
        mat.count - owned,
        0
      );

      return (
        <div key={mat.name} className="material-item">

	{/* 素材名と数量 */}
	<div className="material-info">

	  <span className="material-rank">
    	    #{index + 1}
  	  </span>

  	  <span className="material-name">
            {mat.name}
  	  </span>

	  <span className="material-count">
	    必要 {mat.count}
	  </span>

	  <span className="material-owned">
	    所持 {owned}
	  </span>

	  <span
	    className={`material-remaining ${
	      remaining === 0
	        ? "remaining-complete"
	        : remaining <= 5
	        ? "remaining-warning"
	        : "remaining-danger"
	    }`}
	  >
	    残り {remaining}
	  </span>

	</div>

	{/* 所持数入力 */}
	<div className="owned-area">

  	  <input
    	    type="number"
    	    min="0"
   	    className="owned-input"
    	    value={owned === 0 ? "" : owned}
    	    onChange={(e) =>
      	      setOwnedMaterials({
              ...ownedMaterials,
              [mat.name]: parseInt(e.target.value || 0, 10),
            })
          }
        />

      </div>

          {/* 横棒 */}
          <div className="material-bar-track">
            <div
              className="material-bar-fill"
              style={{
                width: `${(mat.count / maxCount) * 100}%`,
                opacity:
                  0.5 + (mat.count / maxCount) * 0.5,
              }}
            />
          </div>
        </div>
      );
    })
  )}
</div>
        </>
      )}
    </div>
  );
}

export default MaterialPanel;
