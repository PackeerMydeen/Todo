import React from "react";
import { Layout } from "antd";

import "./index.scss";

const { Sider } = Layout;

export default function SideNav({ collapsed }) {
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
          <div className="Workspace-text">Workspaces</div>
        </div>
      )}
    </Sider>
  );
}
