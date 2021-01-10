import React from "react";
import { url_linkdn, url_twitter } from "../../constants/constants";

function Intro(props: any) {
  return (
    <section id="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>¡Hola!</h5>
            <h1>
              Soy {props.personalData.name} {props.personalData.surname}.
            </h1>

            <p className="intro-position">
              <span>{props.personalData.employment}</span>
            </p>

            <a className="button stroke smoothscroll" href="#about" title="">
              Más sobre mí
            </a>
          </div>
        </div>
      </div>

      <ul className="intro-social">
        <li>
          <a href={url_linkdn}>
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href={url_twitter}>
            <i className="fa fa-twitter"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Intro;
