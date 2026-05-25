/**
 * ============================================================
 * Header.js - ヘッダーコンポーネント
 * ============================================================
 * タイトルと進捗バーを表示するコンポーネントです。
 * Props（親からもらうデータ）を受け取って表示するだけで、
 * 自分では状態を持たない「シンプルなコンポーネント」です。
 * ============================================================
 */

import React from "react";
import "./Header.css";

/**
 * Headerコンポーネント
 * @param {number} totalCount - 生息地の総数
 * @param {number} completedCount - 作成済み生息地数
 * @param {number} incompleteCount - 未作成生息地数
 * @param {number} progressPercent - 進捗率（0〜100）
 * @param {Function} onReset - リセットボタン押下時のコールバック
 */
function Header({
  totalCount,
  completedCount,
  incompleteCount,
  progressPercent,
  onReset,
}) {
  return (
    <header className="header">
      {/* タイトルエリア */}
      <div className="header-top">
        <div className="header-title-area">
          {/* ゲームボーイ風のロゴテキスト */}
          <div className="header-logo">🌿</div>
          <div>
            <h1 className="header-title">生息地 作成進捗</h1>
            <p className="header-subtitle">HABITAT PROGRESS TRACKER</p>
          </div>
        </div>

        {/* 統計バッジ */}
        <div className="header-stats">
          <div className="stat-badge stat-total">
            <span className="stat-label">TOTAL</span>
            <span className="stat-value">{totalCount}</span>
          </div>
          <div className="stat-badge stat-done">
            <span className="stat-label">DONE</span>
            <span className="stat-value">{completedCount}</span>
          </div>
          <div className="stat-badge stat-left">
            <span className="stat-label">LEFT</span>
            <span className="stat-value">{incompleteCount}</span>
          </div>
          {/* リセットボタン */}
          <button className="reset-button" onClick={onReset} title="進捗をリセット">
            ↺ RESET
          </button>
        </div>
      </div>

      {/* 進捗バー */}
      <div className="progress-bar-wrapper">
        <div className="progress-bar-track">
          {/* 幅を progressPercent% に動的に変化させる */}
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="progress-label">{progressPercent}% COMPLETE</span>
      </div>
    </header>
  );
}

export default Header;
