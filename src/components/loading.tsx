import React from "react";
import { Container } from "react-bootstrap";
import loadingGif from "../assets/images/loading.gif";

function Loading() {
  return (
    <div className="loading-container">
      <Container className="loading">
        <img src={loadingGif} alt="" className="loading-element" />
      </Container>
    </div>
  );
}

export default Loading;
