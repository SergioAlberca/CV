import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Vercticaltimeline(props: any) {
  const formatDate = (since: number, until: any) => {
    const d = new Date(since).toDateString();
    const e =
      typeof until !== "string" ? new Date(until).toDateString() : until;
    return d + " - " + e;
  };

  return (
    <div>
      {props.experience && (
        <VerticalTimeline>
          {props.experience.map((item: any) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#007888",
                  color: "white",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #007888",
                }}
                // date={item.since}
                iconStyle={{
                  background: "#007888",
                  color: "#fff",
                  fontSize: "19px",
                }}
                icon={<FontAwesomeIcon icon={faLaptopCode} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.employment}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.company}, {item.city}
                </h4>
                <p>{item.descriptionEmployment}</p>
                <p>{item.since + ' - ' + item.until}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      )}
      {props.education && (
        <VerticalTimeline>
          {props.education.map((item: any) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#007888",
                  color: "white",
                  padding: '10px'
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #007888",
                }}
                date={item.category}
                iconStyle={{
                  background: "#007888",
                  color: "#fff",
                  fontSize: "19px",
                }}
                icon={<FontAwesomeIcon icon={faLaptopCode} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <p className="vertical-timeline-element-subtitle">
                  {item.institute}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      )}
    </div>
  );
}

export default Vercticaltimeline;
