import { Backdrop, Fade, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getCvFile, getImagePorfile } from "../../services/firebase.service";

function About(props: any) {
  const [image, setImage] = useState("");
  const [showModalSkill, setShowModalSkill] = useState<boolean>(false);

  const getImage = (url: string) => {
    getImagePorfile(url).then((url: string) => {
      setImage(url);
    });
  };

  useEffect(() => {
    getImage(props.filesData.name);
  }, []);

  const getCv = (url: string) => {
    getCvFile(url).then((url: string) => {
      window.open(url, "_blank");
    });
  };

  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Acerca de mí</h5>
          <h1>Me presento.</h1>

          <div className="intro-info">
            <img src={image} alt="Profile" />

            <p className="lead">{props.personalData.description}</p>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>Perfil</h3>
          <p>Aquí podrás ver mis datos personales</p>

          <ul className="info-list">
            <li>
              <strong>Nombre completo:</strong>
              <span>
                {props.personalData.name} {props.personalData.surname}{" "}
                {props.personalData.surname2}
              </span>
            </li>
            <li>
              <strong>Puesto:</strong>
              <span>{props.personalData.employment}</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span>{props.personalData.email}</span>
            </li>
          </ul>
        </div>

        <div className="col-six tab-full">
          <h3>Habilidades</h3>
          <p>
            Aquí podrás ver todas las tecnologías, métodos de trabajo y
            herramientas con las que trabajo
          </p>

          <ul className="skill-bars">
            {props.skills.map((item: any, i: any) => {
              if (i <= 5) {
                return (
                  <li key={i}>
                    <div
                      className="progress"
                      style={{ width: item.percentage }}
                    >
                      <span>{item.percentage}</span>
                    </div>
                    <strong>{item.label}</strong>
                  </li>
                );
              }
            })}
          </ul>
          <h5
            style={{ color: "#FF0077" }}
            onClick={() => setShowModalSkill(true)}
            className="view-all-skill-link"
          >
            Ver todas
          </h5>
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <a
            href="#contact"
            title="Hire Me"
            className="button stroke smoothscroll"
          >
            Contacta conmigo
          </a>
          <button
            title="Download CV"
            className="button button-primary"
            onClick={() => getCv(props.filesData.nameCvFile)}
          >
            Descarga mi CV
          </button>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={showModalSkill}
        onClose={() => setShowModalSkill(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModalSkill}>
          <div className="modal-content">
            <ul className="skill-bars">
              {props.skills.map((item: any, i: any) => {
                if (item.category !== "tools") {
                  return (
                    <li key={i}>
                      <div
                        className="progress"
                        style={{ width: item.percentage }}
                      >
                        <span>{item.percentage}</span>
                      </div>
                      <strong>{item.label}</strong>
                    </li>
                  );
                } else {
                  return (
                    <li key={i}>
                      {/* <div
                        className="progress"
                        style={{ width: item.percentage }}
                      >
                        <span>{item.percentage}</span>
                      </div> */}
                      <strong>{item.label}</strong>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </Fade>
      </Modal>
    </section>
  );
}

export default About;
