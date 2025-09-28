import "./PortfolioWidget.css";
import "./HoverButtons.css";

import PortfolioWidgetImage from "../../assets/images/portfolio-widget-image.png";
import LikeButton from "./LikeButton";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";

export default function PortfolioWidget({
  width,
  height,
  setModalOpen,
  openModal,
}) {
  const projectData = {
    title: "Roscoe.work Interactive Portfolio",
    description:
      "For this simple portfolio landing page, I first took lots of inspiration from social media apps like Pinterest and also mobile UI components. I decided to make everything on the site appear as an individual widget with slightly staggered column format, just as in Apple's mobile UI or posts on Pinterest. I believe that this format makes it appear as a simple gallery to look at and easy to expand in the future. I wanted a friendly, inviting, modern yet classic look for my site. For this look, I used neutral pastel colors like off-white, rust, olive green, and golden yellow. I think the way that this portfolio shines is in its attention to detail for and micro-animations. I included small pop-up social media style like buttons in my project widgets, shadows and hover states on pretty much every element, firework animations on the skill widget's checkboxes, embedded 3d files, and even a rotating realistic vinyl record player to showcase my personal music taste.",
    tools: ["HTML", "CSS", "Javascript", "Vite.js/Node.js", "Blender", "React"],
    gallery: [],
  };
  return (
    <div className="widget-wrapper item-fade-in">
      <div
        className="portfolio-widget widget-hover"
        style={{ width: width, height: height, animationDelay: "0.1s" }}
      >
        <div className="hover-buttons">
          <button
            className="view-button"
            onClick={() => openModal(projectData)}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
            <span className="button-text">View Project</span>
          </button>
          <LikeButton />
        </div>

        <img
          src={PortfolioWidgetImage}
          alt="Portfolio project preview"
          className="portfolio-widget-image"
        />
      </div>
    </div>
  );
}
