import React from "react";
import { Progress, Row, Col } from "antd";

function Skills() {
  const skills = [
    { name: "JavaScript", value: 80 },
    { name: "Data Structure", value: 80 },
    { name: "Algorithm", value: 80 },
    { name: "RDBMS", value: 70 },
    { name: "No SQL", value: 70 },
    { name: "Git", value: 70 },
    { name: "Micro Services", value: 70 },
    { name: "Distributed Systems", value: 60 }
  ];
  return (
    <div style={{ borderBottom: "5px solid #6e6e6e" }}>
      <div style={{ margin: "5%", width: "60%" }}>
        <span style={{ color: "#3299a8", fontSize: 40 }}>My Skills</span>
        <br />
        {skills.map((skill, i) => {
          return (
            <Row style={{ marginTop: 20 }} key={i}>
              <Col span={6}>
                <span style={{ fontSize: 20 }}>&#8226; {skill.name}</span>
              </Col>
              <Col span={18}>
                <Progress
                  strokeColor={{
                    from: "#108ee9",
                    to: "#87d068"
                  }}
                  percent={skill.value}
                  status="active"
                  strokeWidth={10}
                  showInfo={false}
                />
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
}
export default Skills;
