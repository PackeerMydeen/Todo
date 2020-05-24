import React, { useState, useMemo } from "react";
import { Input, Button, Popover } from "antd";
import StatusCard from "../StatusCard";
import * as utils from "../../utils";
import "./index.scss";

export default function AddTodo({ columns, addTodo }) {
  const [add, setadd] = useState({});
  const [isShow, setShow] = useState(false);
  const [isPopOver, setPopOver] = useState(false);

  const validate = useMemo(() => {
    if (add.Title && add.Title !== "") return false;
    return true;
  }, [add.Title]);

  return (
    <div className="add-todo-wrapper">
      {isShow ? (
        <div className="add-inputs">
          {columns.map((el) => {
            let getStatus = add.Status && utils.getStatus(Number(add.Status));
            return (
              <div
                key={el}
                onClick={() =>
                  el === "Status" && isPopOver !== true && setPopOver(true)
                }
                className={
                  el === "Status" ? `statuscol add-input-box` : `add-input-box`
                }
                style={{
                  backgroundColor:
                    el === "Status" ? getStatus && getStatus.color : null,
                }}
              >
                {el !== "Status" ? (
                  <Input
                    placeholder={`Enter ${el}`}
                    name={el}
                    value={add[el]}
                    onChange={(e) =>
                      setadd({
                        ...add,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                ) : (
                  <div className="status-name">
                    <Popover
                      placement="bottom"
                      visible={isPopOver}
                      content={
                        <div>
                          <StatusCard
                            selected={add.Status}
                            updateStatus={(e) => {
                              setadd({
                                ...add,
                                Status: e.id,
                              });
                              setPopOver(false);
                            }}
                          />
                          <a onClick={() => setPopOver(false)}>Close</a>
                        </div>
                      }
                      trigger="click"
                    />

                    {getStatus && getStatus.name}
                  </div>
                )}
              </div>
            );
          })}
          <Button
            type="primary"
            shape="round"
            disabled={validate}
            onClick={() => {
              addTodo(add);
              setadd({});
              setShow(false);
            }}
          >
            Add
          </Button>
          <Button
            type="danger"
            shape="round"
            style={{ marginLeft: "0.5rem" }}
            onClick={() => {
              setShow(false);
              setadd({});
            }}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div className="add-box" onClick={() => setShow((prev) => !prev)}>
          +Add
        </div>
      )}
    </div>
  );
}
