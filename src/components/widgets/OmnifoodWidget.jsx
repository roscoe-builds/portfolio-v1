import "./OmnifoodWidget.css";
import "./HoverButtons.css";
import Modal from "../Modal";

import OmnifoodWidgetImage from "../../assets/images/omnifood-widget-image.png";
import OmnifoodGalleryImage1 from "../../assets/images/omnifood-gallery-1.png";
import OmnifoodGalleryImage2 from "../../assets/images/omnifood-gallery-2.png";
import OmnifoodGalleryImage3 from "../../assets/images/omnifood-gallery-3.png";

import LikeButton from "./LikeButton";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

export default function OmnifoodWidget({
  width,
  height,
  setModalOpen,
  openModal,
}) {
  const projectData = {
    title: "Omnifood - AI-Powered Meal Prep Service",
    description:
      "Built off of a Udemy course by Jonas Schmedtmann, Omnifood is a great example of how a company can appear both as a startup and as a comforting, client-focused service. As both a tech startup that uses complex meal-prep algorithms and a replacement for delicious home-cooked meals, the goal with Omnifood is to simplify the customers' relationship with their meals using the latest technology. In terms of styling and web personality, Omnifood takes on a softer orange pallete, rounded button corners, eased hover states/transitions, friendly yet modern sans-serif fonts, intuitive and inviting product images, and structured, grid-based sections.",
    tools: ["HTML", "CSS", "Javascript"],
    gallery: [
      OmnifoodGalleryImage1,
      OmnifoodGalleryImage2,
      OmnifoodGalleryImage3,
    ],
    link: "https://roscoe-builds-omnifood.netlify.app",
  };

  return (
    <div className="widget-wrapper item-fade-in">
      <div
        className="omnifood-widget widget-hover"
        style={{ width: width, height: height, animationDelay: "0.2s" }}
      >
        <div className="hover-buttons">
          <button
            className="view-button"
            onClick={() => openModal(projectData)}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
            <span className="button-text">View Project</span>
          </button>
          <LikeButton></LikeButton>
        </div>

        <img src={OmnifoodWidgetImage} className="omnifood-widget-image"></img>
      </div>
    </div>
  );
}
