import ic_arr_down_full from "../../../assets/icons/ic_arrow_full_fill.svg";
import ic_plush from "../../../assets/icons/ic_plus.svg";
import ic_tabler_dots from "../../../assets/icons/ic_tabler_dots.svg";
import ItemInTaskForTimeComponent from "./ItemInTaskForTimeComponent";

import "./TaskForTimeComponent.css";

const TaskForTimeComponent = ({ title, listTask }) => {
  console.log(listTask.length)
  return (
    <div className="container_task_for_time_inbox">
      <div className="header_task_for_tiem_inbox">
        <button className="btn_ic_arr_down_header_task">
          <img src={ic_arr_down_full} />
        </button>
        <p>{title}</p>
        <button className="btn_ic_arr_plus_header_task">
          <img src={ic_plush} />
        </button>
        <button className="btn_ic_arr_tabler_dots_header_task">
          <img src={ic_tabler_dots} />
        </button>
      </div>
      {listTask.length != 0 ? (
        <>
          {listTask.map((task, index) => (
            <div key={index} className="container_list_task_for_time_inbox">
              <ItemInTaskForTimeComponent task={task} />
            </div>
          ))}
          <div className="container_add_task_in_bottom_task_for_time">
            <button>Add task...</button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TaskForTimeComponent;
