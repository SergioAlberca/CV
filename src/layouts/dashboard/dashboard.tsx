import React, { useState, useEffect } from "react";
/* Services */
import { getData, setNotification } from "../../services/firebase.service";
/* Scripts */
import {
  hideLoading,
  showButtonGoTop,
  showLoading,
} from "../../scripts/ui-script.js";
/* Views */
import Header from "../../views/header/header";
import Intro from "../../views/intro/intro";
import About from "../../views/about/about";
import Resume from "../../views/resume/resume";
import Contact from "../../views/contact/contact";
import Footer from "../../views/footer/footer";

interface data {
  experience: Array<any>;
  education: Array<any>;
  personalData: object;
  skills: Array<any>;
  filesData: object;
}

function Dashboard() {
  let aux: data = {
    experience: [],
    education: [],
    personalData: {},
    skills: [],
    filesData: {},
  };
  const [mainData, setMainData] = useState<any>();
  const [loadingNotification, setLoadingNotification] = useState<boolean>(
    false
  );
  const [
    showConfirmationMessage,
    setShowConfirmationMessage,
  ] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAllData() {
    showButtonGoTop();
    showLoading();
    let data = await getData();
    data.forEach((item: any) => {
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
          aux.skills = item.habilidades;
          break;
        case "filesData":
          aux.filesData = item;
          break;
        default:
          break;
      }
    });
    setMainData(aux);
    console.log(aux);
    hideLoading();
  }

  const sendNotification = (data: any) => {
    setLoadingNotification(true);
    setNotification(data)
      .then(() => {
        setLoadingNotification(false);
        setShowConfirmationMessage(true);
        setTimeout(() => {
          setShowConfirmationMessage(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setLoadingNotification(false);
        setShowErrorMessage(true);
        setTimeout(() => {
          setShowErrorMessage(false);
        }, 3000);
      });
  };

  return (
    <div id="top">
      <div id="preloader">
        <div id="loader"></div>
      </div>
      {/* Header */}
      {mainData && <Header />}
      {/* Intro Section */}
      {mainData && mainData.personalData && (
        <Intro personalData={mainData.personalData} />
      )}
      {/* About Section */}
      {mainData &&
        mainData.personalData &&
        mainData.skills &&
        mainData.filesData && (
          <About
            personalData={mainData.personalData}
            skills={mainData.skills}
            filesData={mainData.filesData}
          />
        )}
      {/* Resume Section */}
      {mainData && mainData.experience && mainData.education && (
        <Resume
          experience={mainData.experience}
          education={mainData.education}
        />
      )}
      {/* Contact Section */}
      {mainData && mainData.personalData && (
        <Contact
          personalData={mainData.personalData}
          loading={loadingNotification}
          showConfirmationMessage={showConfirmationMessage}
          showErrorMessage={showErrorMessage}
          sendNotification={sendNotification}
        />
      )}
      {/* Footer Section */}
      {mainData && <Footer />}
    </div>
  );
}

export default Dashboard;
