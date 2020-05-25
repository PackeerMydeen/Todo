import React, { useState, Fragment } from "react";
import "./index.scss";
import { Popover } from "antd";
import StatusCard from "../StatusCard";
import * as utils from "../../utils";
import AddTodo from "../AddTodo";

let columns = ["Title", "Owner", "DueDate", "Status"];

export default function TodoList(props) {
  const [cols, setCols] = useState(columns);
  const [rows, setRows] = useState(props.todoData);
  const [popupId, setPopup] = useState(null);

  const handleDragStart = (e) => {
    const { id } = e.target;
    const idx = cols.indexOf(id);
    e.dataTransfer.setData("colIdx", idx);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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
    const { id } = e.target;
    let key = id.split("-");
    if (key.length === 1) return;
    const droppedColIdx = rows[key[0]][key[1]].data[key[2]];
    const draggedIndex = e.dataTransfer.getData("rowIdx").split("-");
    if (draggedIndex.length === 1) return;
    const draggedRow =
      rows[draggedIndex[0]][draggedIndex[1]].data[draggedIndex[2]];
    const tempRows = { ...rows };
    tempRows[key[0]][key[1]].data[key[2]] = draggedRow;
    tempRows[draggedIndex[0]][draggedIndex[1]].data[
      draggedIndex[2]
    ] = droppedColIdx;
    setRows(tempRows);
    props.setTodo(rows);
  };

  return (
    <div className="todo-list-wrapper">
      <table>
        <thead>
          <tr>
            {cols.map((col, index) => (
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
          {Object.keys(rows).map((item) => {
            return (
              <Fragment key={item}>
                {rows[item].map((todos, i) =>
                  todos.data.map((data, index) => {
                    let getStatus = utils.getStatus(Number(data.Status));
                    return (
                      <tr
                        key={index + `${cols}`}
                        id={`${item}-${i}-${index}`}
                        draggable
                        onDragStart={handleDragRowStart}
                        onDrop={handleRowOnDrop}
                        onDragOver={handleDragOver}
                      >
                        {cols.map((col, colIndex) => (
                          <Popover
                            visible={
                              col === "Status" &&
                              popupId === `${item}-${i}-${index}`
                            }
                            key={col}
                            placement="bottom"
                            content={
                              <div>
                                <StatusCard
                                  selected={data.Status}
                                  updateStatus={(e) => {
                                    props.updateStatus(
                                      `${item}-${i}-${index}`,
                                      e
                                    );
                                    setPopup(null);
                                  }}
                                />
                                <a onClick={() => setPopup(null)}>Close</a>
                              </div>
                            }
                            trigger="click"
                          >
                            <td
                              className={col === "Status" ? "statuscol" : null}
                              key={col}
                              id={`${item}-${i}-${index}`}
                              style={{
                                backgroundColor:
                                  col === "Status"
                                    ? getStatus && getStatus.color
                                    : null,
                              }}
                              onClick={() => {
                                col === "Status" &&
                                  setPopup(`${item}-${i}-${index}`);
                              }}
                            >
                              <span>
                                {col !== "Status"
                                  ? data[col]
                                  : getStatus && getStatus.name}
                              </span>
                            </td>
                          </Popover>
                        ))}
                      </tr>
                    );
                  })
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <AddTodo
        columns={columns}
        addTodo={(e) => props.addTodo(e)}
        isShowAdd={false}
      />
    </div>
  );
}
