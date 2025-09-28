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
    title: "Devolvio - Mock Fashion Landing Page",
    description:
      "Devolvio is an exclusive, membership-based rotational clothing service that is custom tailored to each customer. For this site, I really wanted to test the limits of whitespace, letting text elements and images float freely. In alignment with the company's modern, fashion-forward vision, I included bold uppercase sans-serif fonts, bold and minimal B&W/neutral colors, and abstract text indentation. Sharp corners, heavy font weights, and free-flowing components make this site feel uniquely empty yet straightforward.",
    tools: ["HTML", "CSS", "Javascript"],
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
