import React from "react";
import { Avatar, Row, Col } from "antd";
import boilerPlate from "./assets/images/boilerPlate.jpg";
import bot from "./assets/images/bot.jpg";
import kubernetes from "./assets/images/kubernetes.png";
function Projects() {
  let projects = [
    {
      title: "FaceBook Chat Bot",
      one:
        "A Basic facebook ChatBot Using FaceBook Api, dialogflow, NodeJS and MongoDb.",
      two:
        "Logging all the chat conversations in a DB of choice/ or in a textfile.",
      img: bot,
      link: "https://github.com/piyushverma955/facebook-chat-bot"
    },
    {
      title: "Node Boilerplate App",
      one: "A Basic Node.JS application to accelerate your development.",
      two:
        "This application will give you a basic template for a NodeJs application including swagger-express, mongoDb plugin.",
      img: boilerPlate,
      link: "https://github.com/piyushverma955/node-boilerplate-app"
    },
    {
      title: "Node Kubernitify",
      one:
        " A simple application to dockerise Node application and run it on Kubernets.",
      img: kubernetes,
      link: "https://github.com/piyushverma955/node-kubernitify"
    }
  ];
  return (
    <div style={{ borderBottom: "5px solid #6e6e6e" }}>
      <div style={{ margin: "5%", width: "60%" }}>
        <span style={{ color: "#3299a8", fontSize: 40 }}>Few Projects</span>
        <br />
        {projects.map((project, i) => {
          return (
            <Row
              style={{
                marginTop: "5%",
                paddingBottom: "2%",
                borderBottom: i < projects.length - 1 ? "2px solid #6e6e6e" : ""
              }}
              key={i}
            >
              <Col lg={6} sm={24}>
                <Avatar size={100} src={project.img} />
              </Col>
              <Col lg={18} sm={24}>
                <span style={{ fontSize: 20, fontWeight: "bold" }}>
                  {project.title}
                </span>
                <br />
                <span style={{ fontSize: 20 }}>{project.one}</span>
                <br />
                {project.two && (
                  <>
                    <span style={{ fontSize: 20 }}>{project.two}</span>
                    <br />
                  </>
                )}
                <span style={{ fontSize: 20 }}>
                  Link:
                  <a href={project.link} target="_blank">
                    {project.link.replace("https://", " ")}
                  </a>
                </span>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
