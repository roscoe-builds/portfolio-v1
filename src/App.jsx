import "./styles/index.css";
import "./components/widgets/HoverButtons.css";
import React, { useEffect, useState } from "react";
import AboutMe from "./components/widgets/AboutMe";
import PictureWidget from "./components/widgets/PictureWidget";
import Hero from "./components/widgets/Hero";
import SocialWidget from "./components/widgets/SocialWidget";
import Masonry from "react-masonry-css";
import SpotifyWidget from "./components/widgets/SpotifyWidgetEmbed";
import DevolvioWidget from "./components/widgets/DevolvioWidget";
import SkillsWidget from "./components/widgets/SkillsWidget";
import OmnifoodWidget from "./components/widgets/OmnifoodWidget";
import TreesWidget from "./components/widgets/TreesWidget";
import DonutWidget from "./components/widgets/DonutWidget";
import SpotifyWidgetEmbed from "./components/widgets/SpotifyWidgetEmbed";
import SpotifyWidgetVinyl from "./components/widgets/SpotifyWidgetVinyl";
import Modal from "./components/Modal";
import CurrentWorkWidget from "./components/widgets/CurrentWorkWidget";
import PortfolioWidget from "./components/widgets/PortfolioWidget";
export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    tools: [],
    gallery: [],
  });

  const openModalWithData = (data) => {
    setModalData(data);
    setModalOpen(true);
  };
  document.fonts.load('1em "owners-wide"').then(() => {
    console.log("Font loaded");
  });

  useEffect(() => {
    document.body.classList.add("page-loaded");

    const handleResize = () => {
      document.body.classList.remove("page-loaded");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".title").classList.add("blinking");
    }, 3500); // match typing duration

    return () => clearTimeout(timer);
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
  };

  return (
    <div className="app-container">
      <div></div>
      <div className="title-container">
        <h1 className="title">Welcome to My Portfolio.</h1>
      </div>
      <hr className="line"></hr>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <SocialWidget
          alt="icon"
          className="social-widget my-masonry-grid-item"
        ></SocialWidget>

        <Hero
          // width="100%"
          // height="45%"
          text="I build clean, interactive web experiences."
          subtext="Frontend-focused developer creating thoughtful UI and dynamic interfaces."
          className="hero-widget my-masonry-grid-item"
        ></Hero>

        <AboutMe
          // width="70%" /* bug here */
          // height="30%"
          header="Hi, I'm Jude."
          text="I am a frontend-focused developer studying Computer Science at Cal Poly. I enjoy building clean, interactive web experiences with a strong focus on usability and detail. I’ve worked with React, JavaScript, and modern frontend tools, and I enjoy blending logic, design, and motion to create interfaces that feel intuitive and intentional."
          className="about-me-widget my-masonry-grid-item"
        ></AboutMe>

        <CurrentWorkWidget
          // width="70%" /* bug here */
          // height="30%"
          header="Currently working on:"
          listitem1="UI/UX design and prototyping"
          listitem2="Frontend development for a digital magazine"
          listitem3="Interface design for nonprofit tools"
          listitem4="Interactive web experiences"
          className="-widget my-masonry-grid-item"
        ></CurrentWorkWidget>

        <SpotifyWidgetVinyl className="spotify-widget my-masonry-grid-item"></SpotifyWidgetVinyl>

        <DevolvioWidget
          className="devolvio-widget my-masonry-grid-item"
          setModalOpen={setModalOpen}
          openModal={openModalWithData}
        ></DevolvioWidget>

        {isModalOpen && (
          <Modal
            onClose={() => setModalOpen(false)}
            title={modalData.title}
            description={modalData.description}
            tools={modalData.tools}
            gallery={modalData.gallery}
            link={modalData.link}
          />
        )}

        <SkillsWidget
          header="What can I do for you?"
          text="Lorem iptsum dolor sit amet. Lorem iptsum dolor sit amet. Lorem iptsum dolor sit amet. Lorem iptsum dolor sit amet. Lorem iptsum dolor sit amet."
          className="skills-widget my-masonry-grid-item"
        ></SkillsWidget>

        <DonutWidget
          className="donut-widget my-masonry-grid-item"
          setModalOpen={setModalOpen}
          openModal={openModalWithData}
        ></DonutWidget>

        {/* fix portfolio widget so it can be stacked evenly in the masonry grid columns. */}

        {/* 
        <PortfolioWidget
          className="portfolio-widget my-masonry-grid-item"
          setModalOpen={setModalOpen}
          openModal={openModalWithData}
        ></PortfolioWidget> */}

        <OmnifoodWidget
          className="omnifood-widget my-masonry-grid-item"
          setModalOpen={setModalOpen}
          openModal={openModalWithData}
        ></OmnifoodWidget>

        <TreesWidget
          className="trees-widget my-masonry-grid-item"
          setModalOpen={setModalOpen}
          openModal={openModalWithData}
        ></TreesWidget>
      </Masonry>

      {/* currently work on widget
       */}

      <div className="more">
        <h2 className="more-title">More coming soon...</h2>
      </div>
    </div>
  );
}
