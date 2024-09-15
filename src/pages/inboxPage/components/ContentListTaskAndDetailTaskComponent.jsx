import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./ContentListTaskAndDetailTaskComponent.module.css"; // Import CSS module
import { ItemListTaskInBox } from "./ItemListTaskInBox";

import ic_close from "../../../assets/icons/ic_close.svg";
import ic_check from "../../../assets/icons/ic_check.svg";
import ic_calendar_has_border from "../../../assets/icons/ic_calendar_has_border.svg";
import ic_check_has_border from "../../../assets/icons/ic_check_has_border_gray.svg";
import ic_avatar from '../../../assets/images/ic_main_avatar_1.svg'
import ic_plus from '../../../assets/icons/ic_plus.svg'
import { useState } from "react";

export const ContentListTaskAndDetailTaskComponent = () => {
  const [convertedText, setConvertedText] = useState("");

  return (
    <div className={styles.contentlisttaskanddetailtask}>
      <div className={styles.list_task_inbox}>
        <div className={styles.time_past_for_task}>List Task</div>
        <div className={styles.wrap_list_task_inbox}>
          <ItemListTaskInBox />
          <ItemListTaskInBox />
          <ItemListTaskInBox />
          <ItemListTaskInBox />
          <ItemListTaskInBox />
          <ItemListTaskInBox />
        </div>
      </div>
      <div className={styles.details_task_inbox}>
        <div className={styles.time_past_for_task}>
          This task is visible to everyone in My workspace.
        </div>
        <div className={styles.wrap_detail_task_inbox}>
          <p className={styles.text_title_name_details_inbox}>
            Create a figma community file
          </p>
          <div className={styles.container_gird_detail_task_inbox}>
            <p>Assignee</p>
            <div className={styles.gr_btn_container_person_assignee_inbox}>
              <button className={styles.person_assignee_inbox}>
                nghiem <img src={ic_close} alt="close" />
              </button>
              <button className={styles.recently_assigned_inbox}>
                Recently assigned <img src={ic_check} alt="check" />
              </button>
            </div>
            <div className={styles.container_due_day_inbox}>
              <p>Due date</p>
            </div>
            <div className={styles.gr_btn_container_calendar_inbox}>
              <button className={styles.person_calendar_inbox}>
                <img src={ic_calendar_has_border} alt="calendar" />
                Today
              </button>
              <button className={styles.ic_close_in_calendar_inbox}>
                <img src={ic_close} alt="close" />
              </button>
            </div>
            <p>Projects</p>
            <div className={styles.container_projects_inbox}>
              <button className="">Add to projects</button>
            </div>
            <div className={styles.container_dependencies_inbox}>
              <p>Dependencies</p>
            </div>
            <div className={styles.gr_btn_container_dependencies_inbox}>
              <button className={styles.btn_add_prject_inbx}>Add dependencies</button>
            </div>

            <p id="text_fileds_grid">Fields</p>
            <table className={styles.table_layout}>
              <tbody>
                <tr>
                  <td className={styles.td_first_filed}>
                    <img src={ic_check_has_border} alt="icon" />
                    Priority
                  </td>
                  <td>adads</td>
                </tr>
                <tr>
                  <td className={styles.td_first_filed}>
                    <img src={ic_check_has_border} alt="icon" />
                    Priority
                  </td>
                  <td>adsad</td>
                </tr>
              </tbody>
            </table>

            <p id="text_fileds_grid">Description</p>
            <div className={styles.container_react_quill}>
              <ReactQuill
                className={styles.react_quill}
                placeholder="type/ for menu"
                theme="snow"
                value={convertedText}
                onChange={setConvertedText}
              />
            </div>
            <button className={styles.btn_add_subtask_inbox}>
              <img src={ic_plus} alt="plus" /> Add subtask
            </button>
          </div>
        </div>
        <div className={styles.bottom_details_task_inbox}>
          <div className={styles.container_div_img_and_input}>
            <img src={ic_avatar} alt="avatar" />
            <div className={styles.container_input_rich_text}>
              <input placeholder="abc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
