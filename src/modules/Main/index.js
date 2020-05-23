import React, { useState } from "react";

import "./index.scss";
import { Layout } from "antd";

import SideNav from "../SideNav";
import Headers from "../Headers";
import TodoList from "../TodoList";
const { Content } = Layout;

let todos = {
  WebDesign: {
    0: {
      name: "Things To Do",
      data: [
        {
          task_name: "Tasks 1",
          owner: "packeer",
          status: 1,
          due_date: "19-04-2020",
        },
        {
          task_name: "Tasks 2",
          owner: "Veena",
          status: 1,
          due_date: "19-04-2020",
        },
      ],
    },
  },
};
function Main() {
  const [collapsed, setCollapsed] = useState(false);
  const [todoData, setTodo] = useState(todos);

  const toggle = () => {
    setCollapsed((collapsed) => !collapsed);
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
          <TodoList todoData={todoData} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
