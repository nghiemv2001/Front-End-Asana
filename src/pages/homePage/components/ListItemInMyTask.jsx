import ic_check_has_broder from "../../../assets/icons/ic_check_has_border_gray.svg";

import style from "./ListItemInMyTask.module.css";

const ListItemInMyTask = ({ nameproject, timeproject }) => {
  return (
    <div className={style.main_list_item_in_task}>
    <button className={style.main_list_item_in_task_left}>
      <img src={ic_check_has_broder} alt="Check Icon" />
      <p>{nameproject}</p>
    </button>
    <div className={style.main_list_item_in_task_right}>
      <button>Cross-fu...</button>
      <p>{timeproject}</p>
    </div>
  </div>
  );
};

export default ListItemInMyTask;
