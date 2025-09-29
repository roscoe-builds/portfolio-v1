import "./TreesWidget.css";
import "./HoverButtons.css";

// image imports
import TreesWidgetImage from "../../assets/images/trees-widget-image.png";
import TreesGalleryImage1 from "../../assets/images/trees-gallery-1.png";
import TreesGalleryImage2 from "../../assets/images/trees-gallery-2.png";
import TreesGalleryImage3 from "../../assets/images/trees-gallery-3.png";

import LikeButton from "./LikeButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

export default function TreesWidget({
  width,
  height,
  setModalOpen,
  openModal,
}) {
  const projectData = {
    title: "Trees - Interactive Project Visualization Tool",
    description:
      "I came up with the idea of Trees to simplify project management in a fun, creative, interactive way. As a visual learner + worker, extensive to-do lists aren't always my favorite way of staying on track. A simple node-based canvas UI and toggled notepad are the essential tools. And basic but useful features like color-switching for state management, easily editable names, quick add/delete options, smooth panning + canvas functionality, and automatic saved progress for users makes this an incredibly intuitive tool for project(s) any size. ",
    tools: [
      "HTML",
      "CSS",
      "Javascript + D3.js",
      "Python + Flask",
      "Node.js",
      "JSON (Backend Data Management)",
    ],
    gallery: [TreesGalleryImage1, TreesGalleryImage2, TreesGalleryImage3],
    link: "https://roscoe-builds-trees.onrender.com",
  };

  return (
    <div className="widget-wrapper item-fade-in">
      <div
        className="trees-widget widget-hover"
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

        <img src={TreesWidgetImage} className="trees-widget-image"></img>
      </div>
    </div>
  );
}
