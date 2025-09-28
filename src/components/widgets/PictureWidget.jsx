import "./PictureWidget.css";

export default function PictureWidget({ src, alt, title, width, height }) {
  return (
    <div
      className="picture-widget item-fade-in"
      style={{ width: width, height: height }}
    >
      <img src={src} alt={alt || "image"} className="widget-image"></img>
      {title && <p className="image-title">{title}</p>}
    </div>
  );
}
