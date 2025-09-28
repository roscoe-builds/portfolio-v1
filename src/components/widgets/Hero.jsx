import "./Hero.css";

export default function Hero({ width, height, text }) {
  return (
    <div className="widget-wrapper item-fade-in">
      <div className="hero" style={{ width: width, height: height }}>
        <p className="hero-text">{text}</p>
        <button
          className="hero-button"
          onClick={() =>
            (window.location.href =
              "mailto:judeparzybok@gmail.com?subject=Work Inquiry&body=Hi, I want to work with you on...")
          }
        >
          <span className="hero-button-text">Work with me</span>
        </button>
      </div>
    </div>
  );
}
