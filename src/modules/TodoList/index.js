import React, { useState } from "react";
import generateData from "./generate-data";

const { columns, data } = generateData(5);

export default function TodoList(props) {
  const [cols, setCols] = useState(columns);
  const [rows, setRows] = useState(data);

  const handleDragStart = (e) => {
    const { id } = e.target;
    const idx = cols.indexOf(id);
    e.dataTransfer.setData("colIdx", idx);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleOnDrop = (e) => {
    const draggedColIdx = e.dataTransfer.getData("colIdx");
    if (draggedColIdx !== "") {
      const { id } = e.target;
      const droppedColIdx = cols.indexOf(id);
      const tempCols = [...cols];
      tempCols[draggedColIdx] = cols[droppedColIdx];
      tempCols[droppedColIdx] = cols[draggedColIdx];
      setCols(tempCols);
    }
  };

  const handleDragRowStart = (e) => {
    const { id } = e.target;
    e.dataTransfer.setData("rowIdx", id);
  };

  const handleRowOnDrop = (e) => {
    console.log(e);
    const { id } = e.target;
    const droppedColIdx = rows && rows[id];
    const draggedColIdx = e.dataTransfer.getData("rowIdx");
    console.log("a-", droppedColIdx, "b-", draggedColIdx);
    if (droppedColIdx && draggedColIdx === "") return;
    const tempRows = [...rows];
    tempRows[draggedColIdx] = droppedColIdx;
    tempRows[id] = rows[draggedColIdx];
    setRows(tempRows);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {cols.map((col) => (
              <th
                id={col}
                key={col}
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleOnDrop}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              id={index}
              draggable
              onDragStart={handleDragRowStart}
              onDragOver={handleDragOver}
              onDrop={handleRowOnDrop}
            >
              {Object.entries(row).map(([k, v], idx) => (
                <td key={v} id={index}>
                  {row[cols[idx]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
