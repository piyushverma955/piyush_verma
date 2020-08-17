import React from "react";
import { Avatar, Row, Col } from "antd";
import {
  LinkedinOutlined,
  GithubOutlined,
  GoogleOutlined,
  InstagramOutlined,
  MediumOutlined
} from "@ant-design/icons";
import logo from "./assets/images/so-icon.svg";

function Contact() {
  let details = [
    {
      link: "https://www.linkedin.com/in/piyush955/",
      name: "linkedin.com/in/piyush955",
      icon: <LinkedinOutlined style={{ fontSize: 30 }} />
    },
    {
      link: "https://www.instagram.com/piiyush_verma/",
      name: "instagram.com/piiyush_verma",
      icon: <InstagramOutlined style={{ fontSize: 30 }} />
    },
    {
      link: "https://github.com/piyushverma955",
      name: "github.com/piyushverma955",
      icon: <GithubOutlined style={{ fontSize: 30 }} />
    },
    {
      name: "piyushverma955@gmail.com",
      icon: <GoogleOutlined style={{ fontSize: 30 }} />
    },
    {
      link: "https://stackoverflow.com/users/5889334/piyush",
      name: "stackoverflow.com/users/5889334",
      icon: <Avatar src={logo} />
    },
    {
      link: "https://medium.com/@piyushverma955",
      name: "medium.com/@piyushverma955",
      icon: <MediumOutlined style={{ fontSize: 30 }} />
    }
  ];
  return (
    <div style={{ margin: "5% 5% 0%", width: "60%" }}>
      <span style={{ color: "#3299a8", fontSize: 40 }}>Relevent Links</span>
      <br />
      <Row>
        {details.map((detail, i) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              style={{ marginTop: "5%" }}
              key={i}
            >
              <a
                href={detail.link}
                target="_blank"
                style={{ fontSize: 20, color: "gray" }}
              >
                <div style={{ display: "inline-flex" }}>
                  {detail.icon}
                  {detail.name}
                </div>
              </a>
            </Col>
          );
        })}
      </Row>
      <div style={{ marginTop: "5%", fontSize: 15 }}>
        Created by Piyush © 2020
      </div>
    </div>
  );
}

export default Contact;
