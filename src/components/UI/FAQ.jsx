import { useState } from "react";
import { Content } from "../Content";

export const FAQ = ({ curData, onToggle, isActive }) => {
  const { title, id } = curData;

  return (
    <li>
      <div className="accordion-grid">
        <p className="accordion-question">{title}</p>
        <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <Content key={id} data={curData} isActive={isActive} />
    </li>
  );
};
