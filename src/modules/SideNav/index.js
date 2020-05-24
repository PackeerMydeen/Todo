import React from "react";
import { Layout } from "antd";
import { HomeFilled, DownloadOutlined, BellOutlined } from "@ant-design/icons";
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
      <div className="left-sider">
        <div className="left-sider-icons">
          <BellOutlined style={{ fontSize: "1.5rem", color: "white" }} />
          <DownloadOutlined
            style={{ fontSize: "1.5rem", color: "white", marginTop: "2rem" }}
          />
        </div>
      </div>

      <div className="right-sider">
        <div className="workspace-text">Workspaces</div>
        <div className="search-text">Filter boards...</div>
        <div className="main-container">
          <div>
            <HomeFilled style={{ fontSize: "1.5rem", color: "#0186ff" }} />
          </div>

          <div className="main-text">Main</div>
        </div>
      </div>

      {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })} */}
    </Sider>
  );
}
