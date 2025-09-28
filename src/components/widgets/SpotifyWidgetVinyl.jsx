import "./SpotifyWidgetVinyl.css";
import SpotifyVinyl from "../../assets/images/vinyl-widget.png";
import SpotifyVinylArm from "../../assets/images/spotify-widget-vinyl-tonearm.png";
export default function SpotifyWidgetVinyl() {
  return (
    <div className="widget-wrapper item-fade-in">
      <div className="vinyl-widget " style={{ animationDelay: "0.1s" }}>
        <a
          href="https://open.spotify.com/playlist/3UVLr6OOhrmhyQzJhw6Ll9?si=4f76e1e627504a81"
          target="_blank"
        >
          <div className="vinyl-label">My current listens</div>
          <div className="vinyl-record">
            <img src={SpotifyVinyl} className="vinyl-record-image"></img>
          </div>
        </a>
        <img src={SpotifyVinylArm} className="vinyl-record-tonearm"></img>
      </div>
    </div>
  );
}
