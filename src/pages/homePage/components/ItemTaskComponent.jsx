import style from "./ItemTaskComponent.module.css";

import ic_check from "../../../assets/icons/ic_check.svg";

const ItemStack = ({ done, number, text, active, onclick }) => {
  return (
    <button className={`${style.item_task_in_stack_direction_row}  ${active ? 'active' : ''}`}
    onClick={onclick}
    >
      {done ? (
        <div className={style.is_finish_task}>
          <img src={ic_check} />
        </div>
      ) : (
        <div>
          <div className={style.is_not_finish_task}>{number}</div>
        </div>
      )}
      <p>{text}</p>
    </button>
  );
};

export default ItemStack;
