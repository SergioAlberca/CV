import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { sections } from "../constants/constants";

function Sections(props: any) {
  const [key, setKey] = useState(0);

  const handleChange = (newValue: number) => {
    console.log("new value", newValue);
    setKey(newValue);
  };

  const switchKey = (value: number) => {
    switch (value) {
      case 0:
        return sections.experience;
      case 1:
        return sections.education;
      case 2:
        return sections.skills;

      default:
        return sections.experience;
    }
  };

  return (
    <div>
      {/* Secciones */}
      <Grid container className="sections">
        <Grid item xs={12} md={4} className="sections-container">
          <Chip
            className="chip-custom"
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
            label="Experiencia professional"
            clickable
            color="secondary"
            onClick={() => handleChange(0)}
          />
        </Grid>
        <Grid item xs={12} md={4} className="sections-container">
          <Chip
            className="chip-custom"
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
            label="Formación Académica"
            clickable
            color="secondary"
            onClick={() => handleChange(1)}
          />
        </Grid>
        <Grid item xs={12} md={4} className="sections-container">
          <Chip
            className="chip-custom"
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
            label="Conocimientos Técnicos"
            clickable
            color="secondary"
            onClick={() => handleChange(2)}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="timeLine-container">
          {props.renderSection(switchKey(key))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Sections;
