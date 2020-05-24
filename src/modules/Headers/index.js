import React from "react";
import { Layout, Button } from "antd";
import {
  StarFilled,
  GoogleCircleFilled,
  VideoCameraFilled,
  UsergroupAddOutlined,
  EllipsisOutlined,
  TableOutlined,
  DownOutlined,
  EyeInvisibleOutlined,
  AlignCenterOutlined,
  SnippetsOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import "./index.scss";
const { Header } = Layout;

export default function Headers() {
  return (
    <Header
      className="headers-wrappper"
      style={{ padding: "0.5rem", backgroundColor: "#ffffff" }}
    >
      <div className="topHeader-wrapper">
        <div className="title-wrapper">
          <div className="title-text">
            <b>Web design</b>
          </div>

          <div
            style={{ marginLeft: "4px", fontSize: "20px", color: "#f5f6f8" }}
          >
            <StarFilled />
          </div>
        </div>
        <div className="icons-wrapper">
          <div style={{ fontSize: "30px" }}>
            <GoogleCircleFilled />
          </div>
          <div className="ml">
            <Button shape="round">
              <SnippetsOutlined />
            </Button>
          </div>
          <div className="ml">
            <Button shape="round">
              <HeatMapOutlined />
            </Button>
          </div>
          <div className="ml">
            <Button shape="round">
              <VideoCameraFilled style={{ color: "#0186ff" }} />
              Start Zoom Call
            </Button>
          </div>
          <div className="ml">
            <Button>
              <UsergroupAddOutlined />
              /1 | Activities/0
            </Button>
          </div>
          <div style={{ fontSize: "25px", color: "black" }} className="ml">
            <EllipsisOutlined />
          </div>
        </div>
      </div>

      <div className="bottomHeader-wrapper">
        <div className="tableDescription">
          <div>
            <TableOutlined style={{ fontSize: "18px", marginRight: "5px" }} />
          </div>
          <div style={{ fontSize: "16px" }}>Main Table</div>
          <div>
            <DownOutlined />
          </div>
        </div>
        <div className="itemsDescription">
          <div className="ml">
            <Button type="primary" shape="round" disabled>
              New Item |<DownOutlined />
            </Button>
          </div>
          <div className="ml">
            <Button shape="round" style={{ color: "#a1a0b6" }}>
              Search / Filter Board
            </Button>
          </div>
          <div style={{ fontSize: "25px" }} className="ml">
            <GoogleCircleFilled />
          </div>
          <div style={{ fontSize: "20px" }} className="ml">
            <EyeInvisibleOutlined />
          </div>
          <div style={{ fontSize: "20px" }} className="ml">
            <AlignCenterOutlined />
          </div>
        </div>
      </div>
    </Header>
  );
}
