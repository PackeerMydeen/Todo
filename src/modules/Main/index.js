import React, { useState } from "react";

import "./index.scss";
import { Layout } from "antd";

import SideNav from "../SideNav";
import Headers from "../Headers";
import TodoList from "../TodoList";
const { Content } = Layout;

let todos = {
  WebDesign: [
    {
      name: "Things To Do",
      data: [
        {
          Title: "Tasks 1",
          Owner: "packeer",
          Status: 1,
          DueDate: "19-04-2020",
        },
        {
          Title: "Tasks 2",
          Owner: "Veena",
          DueDate: "19-04-2020",
        },
      ],
    },
  ],
};
function Main() {
  const [collapsed, setCollapsed] = useState(false);
  const [todoData, setTodo] = useState(todos);

  const toggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  const updateStatus = (el, status) => {
    let key = el.split("-");
    const temptodo = { ...todoData };
    temptodo[key[0]][key[1]].data[key[2]].Status = status.id;
    setTodo(temptodo);
  };
  return (
    <Layout className="main-wrapper">
      <SideNav collapsed={collapsed} toggle={toggle} />
      <Layout className="site-layout">
        <Headers />
        <Content
          style={{
            padding: 24,
            backgroundColor: "ffffff",
          }}
        >
          <TodoList
            todoData={todoData}
            setTodo={(e) => setTodo(e)}
            updateStatus={updateStatus}
          />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
