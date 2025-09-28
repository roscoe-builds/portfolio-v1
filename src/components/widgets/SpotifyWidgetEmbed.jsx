import "./SpotifyWidgetEmbed.css";

export default function SpotifyWidgetEmbed() {
  return (
    <div className="spotify-widget-container">
      <a
        className="spotify-widget-before"
        href="https://open.spotify.com/playlist/3UVLr6OOhrmhyQzJhw6Ll9?si=4f76e1e627504a81"
      >
        Listen fully on Spotify
      </a>

      <iframe
        className="spotify-widget"
        src="https://open.spotify.com/embed/playlist/3UVLr6OOhrmhyQzJhw6Ll9?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
