import React from "react";
import { Timeline } from "antd";
import { Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

function Career() {
  const jobs = [
    {
      title: "Freight Commerce Solutions Pvt Ltd. (Freight Tiger)",
      date: "Nov 2019 - Present",
      one:
        "Lego is onboarding tool, from which we onboard our client to our platform and clients can manage data depends on the permissions they have.",
      two:
        "Working on development of Lego from both frontend and backend side.",
      three: "Single handedly managing development and bug fixing."
    },
    {
      title: "Appveen Technologies Pvt. Ltd.",
      date: "Sept 2018 - Nov-2019",
      one:
        "ODP is a quick deployment management tool that enables enterprises to organize ,distribute and analyze data it is a low code/visualling mode platform which helps in creating new applications with little/no code it is also an integration platform of applications with single-click deployment",
      two: "Worked on development of new features in ODP.",
      three:
        "Improved the performance of existing component and managed bug fixes."
    },
    {
      title: "Goomo Holding Services Pvt. Ltd.",
      date: "Dec 2017 - Aug 2018 ",
      one:
        "PBT is back-office product for trains booking that enables support team to check and verify the bookings from goomo.com, and to cancel and automate the refund process.",
      two: "Worked on development of application/web components from scratch.",
      three:
        "Single handedly managing development, bug fixing,support request (adding new features) etc."
    }
  ];
  return (
    <div style={{ borderBottom: "5px solid #6e6e6e" }}>
      <div style={{ margin: "5%", width: "70%" }}>
        <span style={{ color: "#3299a8", fontSize: 40 }}>Career</span>
        <br />
        <Timeline style={{ marginLeft: "10%", marginTop: "5%" }}>
          {jobs.map((job, i) => {
            return (
              <Timeline.Item
                dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                key={i}
              >
                <Card
                  title={
                    <span style={{ color: "#3299a8" }}>
                      {job.title}
                      <span style={{ float: "right" }}>{job.date}</span>
                    </span>
                  }
                  style={{ width: "70%" }}
                >
                  <p>{job.one}</p>
                  <p>{job.two}</p>
                  <p>{job.three}</p>
                </Card>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}
export default Career;
