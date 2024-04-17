import React from "react";
import Carousel from "react-multi-carousel";
import { Col, Row } from "react-bootstrap";
import landingImage from "../../assets/images/landing_18h.jpg";
import marbelApi from "../../assets/images/marbel_api.jpg";
import rickApi from "../../assets/images/rick_api.jpg";
import angularProject from "../../assets/images/angular_project.jpg";
import inkupCrm from "../../assets/images/inkup_crm.jpg";
import inkupChatbot from "../../assets/images/inkup_chatbot.jpg";
import iconJavaScript from "../../assets/images/javascript.svg";
import iconReact from "../../assets/images/iconReact.svg";
import iconRedux from "../../assets/images/iconRedux.svg";
import iconContext from "../../assets/images/context.svg";
import iconTs from "../../assets/images/iconTs.svg";
import iconHtml from "../../assets/images/iconHtml.svg";
import iconCss3 from "../../assets/images/iconCss3.svg";
import iconSass from "../../assets/images/iconSass.svg";
import iconBootstrap from "../../assets/images/iconBootstrap.svg";
import iconAngular from "../../assets/images/iconAngular.svg";
import "react-multi-carousel/lib/styles.css";
import "./customCarrousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
  },
  mobileMin: {
    breakpoint: { max: 463, min: 200 },
    items: 1,
  },
};
const arrayObject = [
  {
    img: inkupCrm,
    text: "Trabajo real CRM  Inkup",
    skills: [
      iconJavaScript,
      iconReact,
      iconRedux,
      iconTs,
      iconHtml,
      iconSass,
      iconCss3,
      iconBootstrap,
    ],
    link: "https://app.inkup.io/login",
  },
  {
    img: inkupChatbot,
    text: "Trabajo real CHAT Inkup",
    skills: [iconJavaScript, iconReact, iconHtml, iconCss3, iconBootstrap],
    link: "https://my.inkup.io/Jose-Artist-Tattoo",
  },
  {
    img: marbelApi,
    text: "Prueba técnica INDITEX ",
    skills: [
      iconJavaScript,
      iconReact,
      iconContext,
      iconHtml,
      iconCss3,
      iconBootstrap,
    ],
    link: "https://my.inkup.io/Jose-Artist-Tattoo",
  },
  {
    img: landingImage,
    text: "Prueba maquetación & 18h",
    skills: [iconJavaScript, iconReact, iconHtml, iconCss3],

    link: "https://joseignacioadamec.github.io/Landing_en_18h/",
  },
  {
    img: rickApi,
    text: "Proyecto Rick and Morty",
    skills: [
      iconJavaScript,
      iconReact,
      iconRedux,
      iconHtml,
      iconCss3,
      iconBootstrap,
    ],
    link: "https://my.inkup.io/Jose-Artist-Tattoo",
  },
  {
    img: angularProject,
    text: "Proyecto Angular       ",
    skills: [iconJavaScript, iconAngular, iconTs, iconHtml, iconCss3],
    link: "https://my.inkup.io/Jose-Artist-Tattoo",
  },
];

export const CustomCarrousel = () => {
  return (
    <Row className="carrousel-row">
      <Col>
        <p className="text-project"> Projects</p>
      </Col>
      <Col>
        <div className="parent">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
            customTransition="transform 1s ease"
          >
            {arrayObject.map((data, index) => (
              <div className="slider" key={index}>
                <p className="m-0">{data.text}</p>
                <div className="slider2">
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    <img src={`.${data.img}`} alt="Project" />
                  </a>
                  <div className="icons-skills-carrousel">
                    {data.skills.map((skill, skillIndex) => (
                      <div className="icon" key={skillIndex}>
                        <img src={`.${skill}`} alt={`Skill ${skillIndex + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};
