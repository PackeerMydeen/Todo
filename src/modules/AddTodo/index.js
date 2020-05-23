import React, { useState, useMemo } from "react";
import { Input, Button } from "antd";
import "./index.scss";

export default function AddTodo({ columns, addTodo }) {
  const [add, setadd] = useState({});
  const [isShow, setShow] = useState(false);

  const validate = useMemo(() => {
    if (add.Title && add.Title !== "") return false;
    return true;
  }, [add.Title]);

  return (
    <div className="add-todo-wrapper">
      {isShow ? (
        <div className="add-inputs">
          {columns.map((el) => (
            <div
              key={el}
              className={
                el === "Status" ? `statuscol add-input-box` : `add-input-box`
              }
            >
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
            </div>
          ))}
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
