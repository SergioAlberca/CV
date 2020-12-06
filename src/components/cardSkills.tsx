import { faFileCode, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Grid } from "@material-ui/core";
import React, { useState } from "react";

function CardSkills(props: any) {
  const [skills] = useState(props.skills[0]);

  return (
    <Grid container className="fix-row-width">
      <Grid item xs={12} className="fix-width">
        <Card>
          <CardContent>
            <h2 className="title-section-skill">Lenguajes de programación</h2>
            {skills.languajes.map((skill: any) => {
              return (
                <div>
                  <Grid container className="card-container">
                    <Grid item xs={12} md={1}>
                      <FontAwesomeIcon
                        icon={faFileCode}
                        className="icon-skill"
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <h5>{skill.label}</h5>
                    </Grid>
                    <Grid xs={12} md={6}>
                      <div className="meter">
                        <span
                          style={{
                            width: skill.percentage,
                            height: 20,
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          {skill.percentage}
                        </span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </CardContent>
          <CardContent>
            <h2 className="title-section-skill">Frameworks y librerías</h2>
            {skills.frameworks.map((skill: any) => {
              return (
                <div>
                  <Grid container className="card-container">
                    <Grid item xs={12} md={1}>
                      <FontAwesomeIcon
                        icon={faFileCode}
                        className="icon-skill"
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <h5>{skill.label}</h5>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className="meter">
                        <span
                          style={{
                            width: skill.percentage,
                            height: 20,
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          {skill.percentage}
                        </span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </CardContent>
          <CardContent>
            <h2 className="title-section-skill">Herramientas de trabajo</h2>
            {skills.tools.map((skill: any) => {
              return (
                <div>
                  <Grid container className="card-container">
                    <Grid item xs={12} md={1}>
                      <FontAwesomeIcon icon={faTools} className="icon-skill" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <h5>{skill.label}</h5>
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                  </Grid>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardSkills;
