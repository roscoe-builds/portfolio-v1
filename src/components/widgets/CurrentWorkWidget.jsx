import "./CurrentWorkWidget.css";

export default function CurrentWorkWidget({
  width,
  height,
  header,
  listitem1,
  listitem2,
  listitem3,
  listitem4,
}) {
  return (
    <div className="widget-wrapper item-fade-in">
      <div className="current-work" style={{ width: width, height: height }}>
        <h2 className="current-work-header">{header}</h2>
        <p className="current-work-text">
          <ul className="current-work-list">
            <li className="current-work-text current-work-list-item">
              {listitem1}
            </li>
            <li className="current-work-text current-work-list-item">
              {listitem2}
            </li>
            <li className="current-work-text current-work-list-item">
              {listitem3}
            </li>
            <li className="current-work-text current-work-list-item">
              {listitem4}
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
