import "./Modal.css";

export default function Modal({
  onClose,
  title,
  description,
  tools,
  gallery,
  link,
}) {
  return (
    <div className={`modal-overlay`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>

        <h2 className="modal-title">{title}</h2>
        <div className="modal-main-content">
          <div className="modal-tools-wrapper">
            <h3 className="modal-tools-title">Tools Used:</h3>
            <ul className="modal-tools">
              {tools?.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>

            <a
              href={link}
              target="_blank"
              className="modal-live-link-button"
              rel="noopener noreferrer"
            >
              <span className="modal-live-link-button-text">View Project</span>
            </a>
          </div>

          <div className="modal-description">
            <h2 className="modal-description-title">Project Description</h2>
            <p>{description}</p>
          </div>
        </div>

        <h3 className="gallery-title">Gallery</h3>
        <div className="gallery">
          {gallery?.map((src, i) => (
            <img key={i} src={src} alt={`Gallery image ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
