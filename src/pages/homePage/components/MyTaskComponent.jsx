import ListItemInMyTask from "./ListItemInMyTask";
import { useRef, useState, useEffect } from "react";
import { CustomSelectMenu } from "../../../components/selectOptional/CustomerSelectionMenuButton";
import { useOutsideClick } from "../../../hooks/customHook/UseOutsideClick ";
import { useFetchTasks } from "../../../data/home/TaskAPI";

import ic_boy from "../../../assets/icons/ic_main_avatar_1.svg";
import ic_protect from "../../../assets/icons/ic_protected.svg";
import ic_plus_gray from "../../../assets/icons/ic_plus_gray.svg";
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_eye from "../../../assets/icons/ic_eye.svg";
import ic_remove from "../../../assets/icons/ic_trash.svg";
import ic_check from "../../../assets/icons/ic_check.svg";
import ic_option from "../../../assets/icons/ic_menu_options.svg";

import style from "./MyTaskComponent.module.css";

const MyTasKComponent = ({ size, toggleFullSize, toggleHalfSize }) => {

  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const { data, fetchTasks } = useFetchTasks();
  const [tasks, setTasks] = useState([]);
  
  useOutsideClick(buttonRef, () => setIsOpen(false));
  useEffect(() => {
    if (data) {
      setTasks(data);  
    }
  }, [data]);

  const handleOpenSelection = () => {
    setIsOpen(!isOpen);
  };

  
  const formatDate = (date) => {
    const options = { month: "short", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  };

  const getStatus = (dueDate, status) => {
    const today = new Date();
    const taskDate = new Date(dueDate);
    if (status === true) return "Completed";
    if (taskDate < today) return "Overdue";
    if (taskDate > today) return "Upcoming";
  };

  
  const convertedTasks = (tasks && Array.isArray(tasks))
    ? tasks.map((task, index) => {
        const status = getStatus(task.due_date, task.status);
        const formattedDate = formatDate(task.due_date);
        return {
          _id: task._id,
          id: index + 1,
          title: task.title,
          date: `${status === "Today" ? "Today" : "NextDay"} - ${formattedDate}`,
          status: status,
          type: "Cross-functional",
        };
      })
    : [];

  const listOptional = [
    {
      src: ic_plus,
      title: "Create task",
      action: () => console.log("Upload Full Size Widget"),
    },
    {
      src: ic_eye,
      title: "View all my task",
      action: () => console.log("Upload Full Size Widget 1"),
    },
    {
      src: size === "half" ? ic_check : "",
      title: "Half size",
      action: toggleHalfSize,
    },
    {
      src: size === "full" ? ic_check : "",
      title: "Full size",
      action: toggleFullSize,
    },
    {
      src: ic_remove,
      title: "Remove widget",
      action: () => console.log("Remove Widget"),
    },
  ];

  return (
    <div className={`${style.container_my_task_home} ${style.card} ${size === "full" ? style.fullSize : style.halfSize}`}>
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
              <img src={ic_protect} alt="Protect" />
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
              Overdue
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
      {activeTab === "Upcoming" && (
        <div className={style.container_create_task_in_my_task}>
          <div className={style.container_gr_create_task_in_my_task}>
            <img src={ic_plus_gray} alt="Plus Icon" />
            <p>Create task</p>
          </div>
        </div>
      )}
      <div className={style.my_list_task_component}>
        {convertedTasks.length > 0 ? (
          convertedTasks.map((task) =>
            task.status === activeTab ? (
              <ListItemInMyTask
                key={task._id}
                id={task._id}
                activeTab ={activeTab}
                nameproject={task.title}
                timeproject={task.date}
                fetchTasks={fetchTasks}
              />
            ) : null
          )
        ) : (
          <p>No tasks available for this tab.</p>
        )}
      </div>
    </div>
  );
};

export default MyTasKComponent;
