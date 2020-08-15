import React from "react";
import background from "./assets/images/background.png";
import { Avatar } from "antd";

function About() {
  return (
    <div style={{ borderBottom: "5px solid #6e6e6e" }}>
      <Avatar
        shape="square"
        style={{ width: "100%" }}
        size={175}
        src={background}
      />
      <div style={{ margin: "5%", width: "70%" }}>
        <span style={{ color: "#3299a8", fontSize: 40 }}>About</span>
        <br />
        <p style={{ fontSize: 20 }}>
          I have 2.5+ years building experience of highly performant and
          scalable applications as a full-stack developer.
        </p>
        <p style={{ fontSize: 20 }}>
          Proficient on Nodejs, Expressjsa and ReactJS frameworks.{" "}
        </p>
        <br />
        <p style={{ fontSize: 20 }}>
          Worked on the databases MYSQL , PostGreSQL, Mongodb.
        </p>
        <p style={{ fontSize: 20 }}>
          I am a result driven individual accomplished in design and development
          of software solutions.
        </p>
        <br />
        <p style={{ fontSize: 20 }}>
          Passionate about learning new stuff and implementing them to make
          everyday life more comfortable.
        </p>
      </div>
    </div>
  );
}
export default About;
