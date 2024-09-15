import "./Optional.scss";

export const OptionalSelect = ({ src, title, action }) => {
  return (
    <div className="item_select_optional" onClick={action}>
      {src !== "" ? <img src={src} /> : <div></div>}
      <span>{title}</span>
    </div>
  );
};
