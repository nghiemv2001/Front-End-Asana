import style from "./CustomerTooltip.module.scss";

export const CustomerTooltip = ({image, text, tooltipText}) => {
  return (
    <div className={style.btn_container}>
      <button className="btn">
        {image && <img src={image} className={style.btn_image} />}
        {text}
        <span className={style.tooltip}>{tooltipText}</span>
      </button>
    </div>
  );
};
