import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faPhone,
  faMapMarker,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { url_linkdn, url_twitter } from "../constants/constants";
import { getCvFile, getImagePorfile } from "../services/firebase.service";

function PersonalData(props: any) {
  const [image, setImage] = useState("");

  const getCv = () => {
    getCvFile().then((url: string) => {
      window.open(url, "_blank");
    });
  };

  const getImage = () => {
    getImagePorfile().then((url: string) => {
      setImage(url);
    });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Box>
      <Grid container className="header-social-sharing">
        <Grid item xs={6} className="buttons-social-sharing">
          <Button
            variant="contained"
            color="secondary"
            className="button-social-sharing"
            target="_blank"
            href={url_twitter}
          >
            <FontAwesomeIcon icon={faTwitter} className="icon-social-sharing" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="button-social-sharing"
            target="_blank"
            href={url_linkdn}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon-social-sharing"
            />
          </Button>
        </Grid>
        <Grid item xs={6} className="button-donwload-container">
          <Button
            className="button-donwload"
            variant="contained"
            color="secondary"
            onClick={() => getCv()}
          >
            Descarga mi CV aquí
          </Button>
          <Button
            className="button-donwload-icon"
            variant="contained"
            color="secondary"
            onClick={() => getCv()}
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="icon-social-sharing"
            />
          </Button>
        </Grid>
      </Grid>
      {/* Avatar y descripcion */}
      <Grid container className="description">
        <Grid item xs={12} className="description-item">
          <Avatar className="avatar" src={image} alt="" />
        </Grid>
        <Grid xs={12} className="description-item">
          <h1 className="name-title">
            {props.personalData.name} {props.personalData.surname}{" "}
            {props.personalData.surname2}
          </h1>
        </Grid>
        <Grid item xs={12} className="description-item">
          <h4 className="name-title">{props.personalData.employment}</h4>
        </Grid>
        <Grid item xs={12} className="description-item">
          <p className="description-text">{props.personalData.description}</p>
        </Grid>
      </Grid>
      {/* Datos personales */}
      <Grid container className="personal-data">
        <Grid item xs={12} md={4} className="personal-data-container">
          <div className="personal-data-item">
            <FontAwesomeIcon icon={faAt} className="icon-social-sharing" />
            <h5 className="name-data">{props.personalData.email}</h5>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className="personal-data-container">
          <div className="personal-data-item">
            <FontAwesomeIcon icon={faPhone} className="icon-social-sharing" />
            <h5 className="name-data">
              {props.personalData.prefix} {props.personalData.phone}
            </h5>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className="personal-data-container">
          <div className="personal-data-item">
            <FontAwesomeIcon
              icon={faMapMarker}
              className="icon-social-sharing"
            />
            <h5 className="name-data">
              {props.personalData.city}, {props.personalData.province},{" "}
              {props.personalData.country}
            </h5>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PersonalData;
