import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import iconJavaScript from "../../assets/images/javascript.svg";
import iconReact from "../../assets/images/iconReact.svg";
import iconRedux from "../../assets/images/iconRedux.svg";
import iconTs from "../../assets/images/iconTs.svg";
import iconHtml from "../../assets/images/iconHtml.svg";
import iconCss3 from "../../assets/images/iconCss3.svg";
import iconSass from "../../assets/images/iconSass.svg";
import iconBootstrap from "../../assets/images/iconBootstrap.svg";
import iconAngular from "../../assets/images/iconAngular.svg";
import iconGithub from "../../assets/images/iconGithub.svg";
import "./skills.css";

export const Skills = ({ setCopied }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const topOffset = skillsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Si el componente Skills está visible en la pantalla
        // lo marcamos como visible y activamos la animación
        setIsVisible(topOffset < windowHeight);
        setCopied(false);
      }
    };

    // Agregamos el listener de scroll
    window.addEventListener("scroll", handleScroll);
    // Removemos el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Row className="skills-row" ref={skillsRef}>
        <Col>
          <div className={`skills-container ${isVisible ? "visible" : ""}`}>
            <span className="skills-text-span">Skills</span>
            <div className="icons-skills">
              <div className="icon-js">
                <img src={`.${iconJavaScript}`} alt="Icono de Javascript" />
                JavaScript
              </div>
              <div className="icon-react">
                <img src={`.${iconReact}`} alt="Icono de Javascript" />
                React
              </div>
              <div className="icon-redux">
                <img src={`.${iconRedux}`} alt="Icono de Javascript" />
                Redux
              </div>
              <div className="icon-ts">
                <img src={`.${iconTs}`} alt="Icono de Javascript" />
                TypeScript
              </div>
              <div className="icon-html">
                <img src={`.${iconHtml}`} alt="Icono de Javascript" />
                Html5
              </div>
              <div className="icon-css">
                <img src={`.${iconCss3}`} alt="Icono de Javascript" />
                Css3
              </div>
              <div className="icon-sass">
                <img src={`.${iconSass}`} alt="Icono de Javascript" />
                Sass
              </div>
              <div className="icon-bootstrap">
                <img src={`.${iconBootstrap}`} alt="Icono de Javascript" />
                Bootstrap
              </div>
              <div className="icon-angular">
                <img src={`.${iconAngular}`} alt="Icono de Javascript" />
                Angular
              </div>
              <div className="icon-git">
                <img src={`.${iconGithub}`} alt="Icono de Javascript" />
                Github
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
