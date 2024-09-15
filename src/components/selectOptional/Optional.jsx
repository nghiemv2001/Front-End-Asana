import "./Optional.scss";

export const OptionalSelect = ({ src, title }) => {
  return (
    <div className="item_select_optional">
      {src !== "" ? <img src={src} /> : <div></div>}
      <span>{title}</span>
    </div>
  );
};
