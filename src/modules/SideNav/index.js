import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.scss";

const { Sider } = Layout;

export default function SideNav({ collapsed, toggle }) {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sider-wrapper"
      width={300}
    >
      <div className="left-sider">pack</div>
      {!collapsed && (
        <div className="right-sider">
          <div className="workspace-text">Workspaces</div>
          <div className="search-text">Filter boards...</div>
        </div>
      )}
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })}
    </Sider>
  );
}
