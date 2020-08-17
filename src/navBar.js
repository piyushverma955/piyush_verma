import React from "react";
import { Avatar } from "antd";
import logo from "./assets/images/piyush.png";

function NavBar(props) {
  const { selectTab, selectedButton } = props;
  const titles = [
    "About Me",
    "Skills",
    "Career",
    "Few Projects",
    "Relevent Links"
  ];

  return (
    <div
      style={{
        height: "100%",
        minHeight: "100vh",
        width: "25%",
        background: "#3299a8",
        right: 0,
        position: "fixed",
        zIndex: 1,
        overflowY: "auto"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Avatar style={{ marginTop: 60 }} size={175} src={logo} />
        <h2 style={{ color: "white", marginTop: 20 }}>PIYUSH VERMA</h2>
        <p style={{ color: "white" }}>
          SOFTWARE ENGINEER 2 <br /> FREIGHT TIGER
        </p>
        <>
          {titles.map((title, index) => {
            return (
              <div
                style={
                  index === selectedButton
                    ? {
                        width: "100%",
                        padding: 15,
                        background: "white",
                        color: "#3299a8",
                        borderBottom: "1px solid #42c8f5"
                      }
                    : {
                        width: "100%",
                        padding: 15,
                        color: "white",
                        borderBottom: "1px solid #42c8f5"
                      }
                }
                onClick={() => selectTab(index)}
                key={index}
              >
                <span style={{ fontSize: 20 }}> {title} </span>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}

export default NavBar;
