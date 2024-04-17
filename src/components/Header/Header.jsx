import React, { useState } from "react";
import waves from "../../assets/images/waves_.mp4";
import { Button, Col, Row } from "react-bootstrap";
import imageJI from "../../assets/images/JoseIgnacio.png";
import { AlertComponent } from "../AlertComponent/AlertComponent";
import iconCopy from "../../assets/images/copy.png";
import iconGithub from "../../assets/images/gittt.png";
import iconLinkedin from "../../assets/images/linkedin.png";
import "./header.css";

export const Header = ({ copied, setCopied }) => {
  const copyToClipboard = () => {
    const emailAddress = "joseignacioadamec@gmail.com";
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
  };

  return (
    <div>
      <video
        className="video-header"
        controlsList="nodownload"
        autoPlay
        loop
        muted
      >
        <source src={`.${waves}`} type="video/mp4" />
      </video>
      <Row>
        <Col className="custom-col-image-header">
          <div className="custom-container-image">
            <img
              src={`.${imageJI}`}
              alt="Imagen de perfil Jose Ignacio Adame"
              className="image-header"
            />
          </div>
        </Col>
      </Row>
      {copied && <AlertComponent setCopied={setCopied} />}
      <Row>
        <Col className="custom-col-header-name">
          <div className="custom-container-name">
            <h2>Jose Ignacio Adame</h2>
            <p className="">
              No soy una IA, soy un desarrollador Front-End con una pasión
              desmedida por el desarrollo web y la programación
            </p>
            <div className="custom-container-email">
              <a href="mailto:joseignacioadamec@gmail.com">
                joseignacioadamec@gmail.com
              </a>
              <Button onClick={copyToClipboard}>
                <img src={`.${iconCopy}`} alt="Icono" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      {/* <CustomForm/> */}
      <Row>
        <Col className="custom-col-social">
          <div className="custom-container-social">
            <a
              href="https://github.com/joseignacioadamec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`.${iconGithub}`} alt="Icono de HitHub"></img>
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/joseignacioadamec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`.${iconLinkedin}`} alt="Icono de Linkedin"></img>
              Linkedin
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="custom-col-info">
          <div className="custom-container-info">
            <a
            // ASI PARA VER EN PRO
              href="./assets/CV_JI_2024_dev_.pdf"

              //ASI PARA VER EN LOCAL
              // href="src/assets/documents/CV_JI_2024_dev_.pdf"

              target="_blank"
              rel="noopener noreferre"
            >
              Descargar CV
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};
