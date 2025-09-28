import "./AboutMe.css";

export default function AboutMe({ width, height, header, text }) {
  return (
    <div className="widget-wrapper item-fade-in">
      <div className="about-me" style={{ width: width, height: height }}>
        <h2 className="about-me-header">{header}</h2>
        <p className="about-me-text">{text}</p>
      </div>
    </div>
  );
}
