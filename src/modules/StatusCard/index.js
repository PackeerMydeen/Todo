import React from "react";
import * as utils from "../../utils";

import "./index.scss";

export default function StatusCard({ selected, updateStatus }) {
  return (
    <div className="status-card-wrapper">
      {utils.Status.map((item) => (
        <div
          key={item.id}
          style={{ backgroundColor: item.color }}
          className={`card ${selected === item.id ? "selected" : ""}`}
          onClick={() => updateStatus(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
