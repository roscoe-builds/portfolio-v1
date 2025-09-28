import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`like-button ${liked ? "liked" : ""}`}
      onClick={() => setLiked(!liked)}
      aria-pressed={liked}
    >
      <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} size="lg" />
    </button>
  );
}
