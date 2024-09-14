import "./MyTaskComponent.css";
import ic_boy from "../../../assets/icons/ic_main_avatar_1.svg";
import ic_protect from "../../../assets/icons/ic_protected.svg";

import ic_plus_gray from "../../../assets/icons/ic_plus_gray.svg";
import ListItemInMyTask from "./ListItemInMyTask";
import ic_option from "../../../assets/icons/ic_menu_options.svg";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "Project Web React",
    date: "Today - Sep 10",
    status: "Upcoming",
    type: "Cross-functional",
  },
  {
    id: 2,
    title: "Project Mobile React",
    date: "NextDay - Sep 8",
    status: "Upcoming",
    type: "Cross-functional",
  },
  {
    id: 3,
    title: "Project Figma React",
    date: "Yesterday - Sep 6",
    status: "Overdue",
    type: "Cross-functional",
  },
];

const MyTasKComponent = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div className="container_my_task_home">
      <button className="ic_option_my_task_component">
        <img src={ic_option} />
      </button>
      <div className="cotainer_header_my_task">
        <button className="avatar_profile_my_task">
          <img className="ic_avatar_main_1" src={ic_boy} />
          <span className="tooltip_text_view_profile">View profile</span>
        </button>
        <div className="big_content_main_my_task">
          <div className="component_text_my_task_icon">
            <p>My Task</p>
            <button className="btn_protect_in_my_task">
              <img src={ic_protect} />
              <span className="tooltip_text_protect_my_task">
                Task you add here pravite to you unless you add collaborators or
                add the tasks to a shared project.
              </span>
            </button>
          </div>
          <div className="tabs">
            <button
              onClick={() => setActiveTab("Upcoming")}
              className={activeTab === "Upcoming" ? "active" : ""}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("Overdue")}
              className={activeTab === "Overdue" ? "active" : ""}
            >
              Overdue (1)
            </button>
            <button
              onClick={() => setActiveTab("Completed")}
              className={activeTab === "Completed" ? "active" : ""}
            >
              Completed
            </button>
          </div>
        </div>
        <button>
          <img />
        </button>
      </div>
      <div className="container_create_task_in_my_task">
        <div className="container_gr_create_task_in_my_task">
          <img src={ic_plus_gray} />
          <p>Create task</p>
        </div>
      </div>
      <div className="my_list_task_component">
        {tasks.map((task, index) =>
          task.status === activeTab ? (
            <ListItemInMyTask
              key={index}
              nameproject={task.title}
              timeproject={task.date}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default MyTasKComponent;
