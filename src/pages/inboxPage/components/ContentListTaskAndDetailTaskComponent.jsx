import "./ContentListTaskAndDetailTaskComponent.css";
import { ItemListTaskInBox } from "./ItemListTaskInBox";

import ic_close from "../../../assets/icons/ic_close.svg";
import ic_check from "../../../assets/icons/ic_check.svg";
export const ContentListTaskAndDetailTaskComponent = () => {
  return (
    <div className="contentlisttaskanddetailtask">
      <div className="list_task_inbox">
        <div className="time_past_for_task">List Task</div>
        <div className="wrap_list_task_inbox">
          <ItemListTaskInBox />
          <ItemListTaskInBox />
          <ItemListTaskInBox />
          <ItemListTaskInBox />
          <ItemListTaskInBox />
          <ItemListTaskInBox />
        </div>
      </div>
      <div className="details_task_inbox">
        <div className="time_past_for_task">
          This task is visible to everyone in My workspace.
        </div>
        <div className="wrap_detail_task_inbox">
          <p className="text_title_name_details_inbox">
            Create a figma community file
          </p>
          <div className="container-assignee_inbox">
            <p>Assignee</p>
            <button className="person_assignee_inbox">
              nghiem <img src={ic_close} />
            </button>
            <button className="recently_assigned_inbox">
              Recently assigned <img src={ic_check} />
            </button>
          </div>
          <div className="container_due_day_inbox">
            <p>Due date</p>
            <button className="person_assignee_inbox">
              <img src={ic_close} />
              Today <img src={ic_close} />
            </button>
          </div>
          <div className="container_assignee_inbox">
            <p>Projects</p>
            <button className="person_assignee_inbox">Add to projects</button>
          </div>
          <div className="container_assignee_inbox">
            <p>Dependencies</p>
            <button className="person_assignee_inbox">Add dependencies</button>
          </div>
          <div className="container_assignee_inbox">
            <p>Description</p>
            <button className="person_assignee_inbox">
              New! <img src={ic_close} />
            </button>
            <button className="recently_assigned_inbox">Send feedbackno</button>
          </div>
        </div>
        <div className="bottom_details_task_inbox"></div>
      </div>
    </div>
  );
};
