import "./DonutWidget.css";
import "src/components/widgets/HoverButtons.css";
import LikeButton from "./LikeButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";

export default function DonutWidget({ setModalOpen, openModal }) {
  const projectData = {
    title: "Donuts - A Blender 3D Experience",
    description:
      "Taking inspiration from the BlenderGuru's iconic donut tutorial, I decided to take the animation aspect of the project to the next level, creating a custom music edit in Premiere Pro and After Effects. As my first dive into the world of 3D, the process of sculpting, composition, lighting, and camera frame editing proved to be a challenge for me. To exceed the limits of this project, it took patience, micro-goals, thinking outside the box, and on-the-fly learning of new softwares. Overall, this first creative 3D edit I feel opened my eyes to the possibilities of 3D+Web Integration, while pushing my creative capabilities.",
    tools: [
      "Blender",
      "After Effects",
      "Premiere Pro",
      "Illustrator",
      "Photoshop",
    ],
    gallery: [
      "src/assets/images/donut-gallery-1.png",
      "src/assets/images/donut-gallery-2.png",
      "src/assets/images/donut-gallery-3.png",
    ],
  };

  return (
    <div className="widget-wrapper item-fade-in">
      <div
        className="donut-widget widget-hover"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="donut-text">
          <p>Donuts</p>
        </div>
        <div className="recorder">
          <div className="rec-text">REC</div>
          <div className="rec-dot"></div>
        </div>

        <video
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="donut-video-1"
          src="src/assets/3d/fixed.mp4"
        />
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="donut-video-2"
          src="src/assets/3d/fixed.mp4"
        />
        {/* <video
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="donut-video-3"
          src="src/assets/3d/fixed.mp4"
        /> */}

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
      </div>
    </div>
  );
}
