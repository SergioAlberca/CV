import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import "react-vertical-timeline-component/style.min.css";
import { getData } from "../../services/firebase.service";
import CardSkills from "../../components/cardSkills";
import Contact from "../../components/contact";
import PersonalData from "../../components/personalData";
import Loading from "../../components/loading";
import Sections from "../../components/sections";
import Vercticaltimeline from "../../components/verticalTimeline";
import { sections } from "../../constants/constants";
import Typography from "@material-ui/core/Typography/Typography";
import { Box, Container } from "@material-ui/core";

interface data {
  experience: Array<any>;
  education: Array<any>;
  personalData: object;
  skills: Array<any>;
}

function Dashboard() {
  const [loading, setLoading] = useState(false);
  let aux: data = {
    experience: [],
    education: [],
    personalData: {},
    skills: [],
  };
  const [mainData, setMainData] = useState(aux);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getData().then((res) => {
        res.forEach((item: any) => {
          switch (item.label) {
            case "experience":
              aux.experience = item.data;
              break;
            case "education":
              aux.education = item.data;
              break;
            case "personal-data":
              aux.personalData = item;
              break;
            case "skills":
              aux.skills = item.data;
              break;
            default:
              break;
          }
        });
        setMainData(aux);
        setLoading(false);
      });
    }, 5000);
  }, []);

  const renderSection = (key: string) => {
    switch (key) {
      case sections.experience:
        return renderExperience();
      case sections.education:
        return renderEducation();
      case sections.skills:
        return renderSkills();
      case sections.contact:
        return renderContact();
      default:
        break;
    }
  };

  const renderPersonalData = () => {
    return <PersonalData personalData={mainData.personalData}></PersonalData>;
  };
  const renderExperience = () => {
    return (
      <Vercticaltimeline experience={mainData.experience}></Vercticaltimeline>
    );
  };

  const renderEducation = () => {
    return (
      <Vercticaltimeline education={mainData.education}></Vercticaltimeline>
    );
  };

  const renderSkills = () => {
    return <CardSkills skills={mainData.skills}></CardSkills>;
  };

  const renderContact = () => {
    return <Contact></Contact>;
  };

  const renderTabsSections = () => {
    return <Sections renderSection={renderSection}></Sections>;
  };

  return (
    <div>
      {!loading && (
        <div className="container-custom">
          <Box>
            {renderPersonalData()} {renderTabsSections()}
          </Box>
        </div>
      )}
      {loading && <Loading></Loading>}
    </div>
  );
}

export default Dashboard;
