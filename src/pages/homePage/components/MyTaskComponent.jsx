
import ListItemInMyTask from "./ListItemInMyTask";
import { useRef, useState } from "react";
import { CustomSelectMenu } from "../../../components/selectOptional/CustomerSelectionMenuButton";
import { useOutsideClick } from "../../../hooks/customHook/UseOutsideClick ";

import ic_boy from "../../../assets/icons/ic_main_avatar_1.svg";
import ic_protect from "../../../assets/icons/ic_protected.svg";
import ic_plus_gray from "../../../assets/icons/ic_plus_gray.svg";
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_eye from "../../../assets/icons/ic_eye.svg";
import ic_remove from "../../../assets/icons/ic_trash.svg";
import ic_check from "../../../assets/icons/ic_check.svg";
import ic_option from "../../../assets/icons/ic_menu_options.svg";

import style from "./MyTaskComponent.module.css";

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

const MyTasKComponent = ({ size, toggleFullSize, toggleHalfSize }) => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const handleOpenSelection = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(buttonRef, () => setIsOpen(false));

  const uploadFullSizeWidget = () => {
    console.log('Upload Full Size Widget');
  };

  const uploadFullSizeWidget1 = () => {
    console.log('Upload Full Size Widget 1');
  };
  
  const removeWidget = () => {
    console.log('Remove Widget');
  };

  const listOptional = [
    {
      src: ic_plus,
      title: "create task",
      action: uploadFullSizeWidget, 
    },
    {
      src: ic_eye,
      title: "View all my task",
      action: uploadFullSizeWidget1, 
    },
    {
      src: size === 'half' ? ic_check : '',
      title: "Half size",
      action: toggleHalfSize, 
    },
    {
      src: size === 'full' ? ic_check : '',
      title: "Full size",
      action: toggleFullSize, 
    },
    {
      src: ic_remove,
      title: "remove widget",
      action: removeWidget, 
    },
  ];
  return (
    <div className={`${style.container_my_task_home} ${style.card} ${size === 'full' ? style.fullSize : style.halfSize}`}>
      <button
        className={style.ic_option_my_task_component}
        ref={buttonRef}
        onClick={handleOpenSelection}
      >
        {isOpen ? <CustomSelectMenu listOptional={listOptional} /> : null}
        <img src={ic_option} alt="Options" />
      </button>
      <div className={style.cotainer_header_my_task}>
        <button className={style.avatar_profile_my_task}>
          <img className={style.ic_avatar_main_1} src={ic_boy} alt="Avatar" />
          <span className={style.tooltip_text_view_profile}>View profile</span>
        </button>
        <div className={style.big_content_main_my_task}>
          <div className={style.component_text_my_task_icon}>
            <p>My Task</p>
            <button className={style.btn_protect_in_my_task}>
              <img src={ic_protect}  />
              <span className={style.tooltip_text_protect_my_task}>
                Task you add here are private to you unless you add collaborators or
                add the tasks to a shared project.
              </span>
            </button>
          </div>
          <div className={style.tabs}>
            <button
              onClick={() => setActiveTab("Upcoming")}
              className={activeTab === "Upcoming" ? style.active : ""}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("Overdue")}
              className={activeTab === "Overdue" ? style.active : ""}
            >
              Overdue (1)
            </button>
            <button
              onClick={() => setActiveTab("Completed")}
              className={activeTab === "Completed" ? style.active : ""}
            >
              Completed
            </button>
          </div>
        </div>

      </div>
      <div className={style.container_create_task_in_my_task}>
        <div className={style.container_gr_create_task_in_my_task}>
          <img src={ic_plus_gray} alt="Plus Icon" />
          <p>Create task</p>
        </div>
      </div>
      <div className={style.my_list_task_component}>
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
