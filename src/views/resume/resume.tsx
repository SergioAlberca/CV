import React from "react";

function Resume(props: any) {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>CURRÍCULUM</h5>
          <h1>Más sobre mis credenciales.</h1>

          <p className="lead">
            Aquí podrás ver toda la información acerca de mi experiencia laboral
            y mi formación académica
          </p>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Experiencia laboral</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            {props.experience.map((item: any, i: any) => {
              return (
                <div className="timeline-block" key={i}>
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>{item.employment}</h3>
                    <p>
                      {item.since} - {item.until}
                    </p>
                  </div>

                  <div className="timeline-content">
                    <h4>
                      {item.company}, {item.city}
                    </h4>
                    <p>{item.descriptionEmployment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Formación Académica</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            {props.education.map((item: any, i: any) => {
              return (
                <div className="timeline-block" key={i}>
                  <div className="timeline-ico">
                    <i className="fa fa-briefcase"></i>
                  </div>

                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <p>
                      {item.since} - {item.until}
                    </p>
                  </div>

                  <div className="timeline-content">
                    <h4>{item.institute}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
