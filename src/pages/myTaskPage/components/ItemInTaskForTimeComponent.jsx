import "./ItemInTaskForTimeComponent.css";
import ic_check_broder from "../../../assets/icons/ic_check_has_border_gray.svg";
import ic_sort from "../../../assets/icons/ic_sort.svg";
import ic_arr_down from "../../../assets/icons/ic_arrow_down.svg";
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_workspace from '../../../assets/icons/ic_workspace.svg';
const ItemInTaskForTimeComponent = ({task}) => {
  return (
    <div className="conatiner_item_task_for_time_inbox ">
      <div className="task_name_item_task_for_time">
        <button className="btn_check_broder_item_task_for_time">
          <img src={ic_check_broder} />
        </button>
        <p>{task.title}</p>
        <div className="container_gr_btn_item_in_task_for_time">
          <button className="btn_sort_item_task_for_time">
            <img src={ic_sort} />
          </button>
          <button className="btn_arr_down_item_task_for_time">
            <img src={ic_arr_down} />
          </button>
        </div>
      </div>
      <div className="due_date_item_task_for_time">
        <p>{task.time}</p>
        <button>
          <img src={ic_arr_down} />
        </button>
      </div>
      <div className="projects_in_item_task_for_time">
        <button>
          <div></div>
          <p>Cross-functional project pl...</p>
        </button>
      </div>
      <div className="task_visility_item_task_for_time">
        <button>
          <img src={ic_workspace} />
        </button>
        <p>My workspace</p>
        <button className="btn_first_visility_item">
          <img src={ic_arr_down} />
        </button>
      </div>
      <div className="Collaborator_item_task_for_time">
        <p>Collaborators</p>
        <button>
          <img src={ic_arr_down} />
        </button>
      </div>
      <div className="ic_plus_in_item_task_for_time">
        <button>
          <img src={ic_plus} />
        </button>
      </div>
    </div>
  );
};

export default ItemInTaskForTimeComponent;
