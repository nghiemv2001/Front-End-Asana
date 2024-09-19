import ListItemInMyTask from "./ListItemInMyTask";
import { useRef, useState, useEffect } from "react";
import { CustomSelectMenu } from "../../../components/selectOptional/CustomerSelectionMenuButton";
import { useOutsideClick } from "../../../hooks/customHook/UseOutsideClick ";
import { createNewTask, useFetchTasks } from "../../../data/home/TaskAPI";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

import ic_boy from "../../../assets/icons/ic_main_avatar_1.svg";
import ic_protect from "../../../assets/icons/ic_protected.svg";
import ic_plus_gray from "../../../assets/icons/ic_plus_gray.svg";
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_eye from "../../../assets/icons/ic_eye.svg";
import ic_remove from "../../../assets/icons/ic_trash.svg";
import ic_check from "../../../assets/icons/ic_check.svg";
import ic_option from "../../../assets/icons/ic_menu_options.svg";
import ic_close from "../../../assets/icons/ic_remove.svg";

import style from "./MyTaskComponent.module.css";

const MyTasKComponent = ({ size, toggleFullSize, toggleHalfSize }) => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const { data, fetchTasks } = useFetchTasks();
  const [task, setTask] = useState({
    title: "",
    due_date: null,
    start_date: new Date(),
  });
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);

  useOutsideClick(buttonRef, () => setIsOpen(false));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.title) {
      try {
        console.log("api front", task);
        await createNewTask(task);
        setTask({ title: "", due_date: null, start_date: new Date() });
        setShowInput(false);
        fetchTasks();
      } catch (err) {
        console.error("Error creating task:", err);
      }
    } else {
      alert("Not data send Backend");
    }
  };

  useEffect(() => {
    if (data) setTasks(data);
  }, [data]);

  const handleOpenSelection = () => {
    setIsOpen(!isOpen);
  };

  const handleShowInput = () => {
    setShowInput(true);
  };

  const formatDate = (date) => {
    if (date !== null) {
      const testDay = new Date(date);
      const year = testDay.getFullYear();
      const month = String(testDay.getMonth() + 1).padStart(2, "0");
      const day = String(testDay.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    return null;
  };

  const getStatus = (dueDate, status) => {
    const today = new Date();
    const taskDate = new Date(dueDate);
    if (status === true) return "Completed";
    if (taskDate < today && dueDate !== null) return "Overdue";
    return "Upcoming";
  };

  const convertedTasks =
    tasks && Array.isArray(tasks)
      ? tasks.map((task, index) => {
          const status = getStatus(task.due_date, task.status);
          const formattedDate =
            task.due_date === null ? null : formatDate(task.due_date);
          return {
            _id: task._id,
            id: index + 1,
            title: task.title,
            start_date: task.start_date,
            projects: task.projects,
            due_date: task.due_date === null ? null : `${formattedDate}`,
            status: status,
            type: "Cross-functional",
          };
        })
      : [];

  const listOptional = [
    {
      src: ic_plus,
      title: "Create task",
      action: () => setShowInput(true),
    },
    {
      src: ic_eye,
      title: "View all my task",
      action: () => {
        navigate("/task");
      },
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
    <div
      className={`${style.container_my_task_home} ${style.card} ${
        size === "full" ? style.fullSize : style.halfSize
      }`}
    >
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
                Tasks you add here are private to you unless you add
                collaborators or add the tasks to a shared project.
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
          <button
            className={style.container_gr_create_task_in_my_task}
            onClick={handleShowInput}
          >
            <img src={ic_plus_gray} alt="Plus Icon" />
            <p>Create task</p>
          </button>
        </div>
      )}
      <div className={style.my_list_task_component}>
        {showInput && activeTab === "Upcoming" && (
          <div className={style.container_create_task_input}>
            <button
              className={style.button_ic_remove}
              onClick={() => {
                setShowInput(false);
              }}
            >
              <img src={ic_close} alt="Close" />
            </button>
            <form onSubmit={handleSubmit} className={style.style_form}>
              <button type="submit" className={style.button_submit}></button>
              <input
                type="text"
                placeholder="Write a task name"
                className={style.input_in_create_task}
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                autoFocus
              />
              <div className={style.container_text_day_icon}>
                {task.due_date ? (
                  <p>{new Date(task.due_date).toLocaleDateString()}</p>
                ) : null}
                <DatePicker
                  className=""
                  style={{ display: "flex", width: 0, paddingRight: "40px" }}
                  onChange={(date) => {
                    if (date) {
                      const dateObject = new Date(date.format("YYYY-MM-DD"));

                      setTask((prevTask) => ({
                        ...prevTask,
                        due_date: dateObject,
                      }));
                    }
                  }}
                />
              </div>
            </form>
          </div>
        )}
        {convertedTasks.length > 0 ? (
          convertedTasks.map((task) =>
            task.status === activeTab ? (
              <ListItemInMyTask
                key={task._id}
                id={task._id}
                activeTab={activeTab}
                start_date={task.start_date}
                nameproject={task.title}
                timeproject={task.due_date}
                projects={task.projects}
                showInput={showInput}
                fetchTasks={fetchTasks}
              />
            ) : null
          )
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default MyTasKComponent;
