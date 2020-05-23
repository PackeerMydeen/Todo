import React from "react";
import { Layout } from "antd";
import "./index.scss";
const { Header } = Layout;

export default function Headers() {
  return (
    <Header
      className="headers-wrappper"
      style={{ padding: 0, backgroundColor: "#ffffff" }}
    ></Header>
  );
}
