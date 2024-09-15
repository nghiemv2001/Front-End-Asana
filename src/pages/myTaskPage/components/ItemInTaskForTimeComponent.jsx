
import styles from './ItemInTaskForTimeComponent.module.css'; // Import CSS module

import ic_check_broder from "../../../assets/icons/ic_check_has_border_gray.svg";
import ic_sort from "../../../assets/icons/ic_sort.svg";
import ic_arr_down from "../../../assets/icons/ic_arrow_down.svg";
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_workspace from '../../../assets/icons/ic_workspace.svg';

const ItemInTaskForTimeComponent = ({ task }) => {
  return (
    <div className={styles.conatiner_item_task_for_time_inbox_private}>
      <div className={styles.task_name_item_task_for_time}>
        <button className={styles.btn_check_broder_item_task_for_time}>
          <img src={ic_check_broder} alt="check border" />
        </button>
        <p>{task.title}</p>
        <div className={styles.container_gr_btn_item_in_task_for_time}>
          <button className={styles.btn_sort_item_task_for_time}>
            <img src={ic_sort} alt="sort" />
          </button>
          <button className={styles.btn_arr_down_item_task_for_time}>
            <img src={ic_arr_down} alt="arrow down" />
          </button>
        </div>
      </div>
      <div className={styles.due_date_item_task_for_time}>
        <p>{task.time}</p>
        <button>
          <img src={ic_arr_down} alt="arrow down" />
        </button>
      </div>
      <div className={styles.projects_in_item_task_for_time}>
        <button>
          <div></div>
          <p>Cross-functional project pl...</p>
        </button>
      </div>
      <div className={styles.task_visibility_item_task_for_time}>
        <button>
          <img src={ic_workspace} alt="workspace" />
        </button>
        <p>My workspace</p>
        <button className={styles.btn_first_visibility_item}>
          <img src={ic_arr_down} alt="arrow down" />
        </button>
      </div>
      <div className={styles.Collaborator_item_task_for_time}>
        <p>Collaborators</p>
        <button>
          <img src={ic_arr_down} alt="arrow down" />
        </button>
      </div>
      <div className={styles.ic_plus_in_item_task_for_time}>
        <button>
          <img src={ic_plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default ItemInTaskForTimeComponent;
