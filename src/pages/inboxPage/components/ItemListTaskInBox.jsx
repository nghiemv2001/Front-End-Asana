import "./ItemListTaskInBox.css";
import ic_mark_task from "../../../assets/icons/ic_mark_task.svg";
import ic_check from "../../../assets/icons/ic_check.svg";

export const ItemListTaskInBox = () => {
  return (
    <div className="item_list_task_inbox">
      <div className="title_item_list_task">
        <img src={ic_mark_task} className="img_mark_task_inbox" />
        <p>Your tasks for today</p>
        <div className="ic_cicle_blue"></div>
      </div>
      <div className="information_task_inbox">
        <img className="ic_check_item_list_task_inbox" src={ic_check} />
        <p className="text_title">Create a community file</p>
        <p className="text_time">Today - Sep 11</p>
      </div>
    </div>
  );
};
