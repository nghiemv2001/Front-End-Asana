import { deleteTask, useUpdateTask } from "../../../data/home/TaskAPI";
import { DatePicker } from "antd";

import ic_check_has_broder from "../../../assets/icons/ic_check.svg";
import ic_close from "../../../assets/icons/ic_remove.svg";

import style from "./ListItemInMyTask.module.css";

const ListItemInMyTask = ({
  nameproject,
  timeproject,
  showInput = showInput,
  id,
  projects,
  fetchTasks,
  activeTab = activeTab,
}) => {

  const { updateTask } = useUpdateTask(id);
  const maxVisibleProjects = 2;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTasks();
  };

  const updateTimeTask = async (dataDate) => {
    try {
      await updateTask({ due_date: dataDate });
      await fetchTasks();
    } catch (err) {
      console.log("Error Update:", err);
    }
  };

  const handleFinishTask = async (event) => {
    event.preventDefault();
    try {
      await updateTask({ status: true });
      await fetchTasks();
    } catch (err) {
      console.error("Error Update:", err);
    }
  };

  const HandleDeletedTask = async () => {
    try {
      await deleteTask(id);
      await fetchTasks();
    } catch (err) {
      console.log("Err Delete:", err);
    }
  };

  return (
    <div className={style.main_list_item_in_task}>
      {activeTab !== "Completed" ? (
        <button
          className={style.main_list_item_in_task_left}
          onClick={handleFinishTask}
        >
          <img src={ic_check_has_broder} alt="Check Icon" />
        </button>
      ) : null}
      {activeTab === "Completed" ? (
        <button
          className={style.button_ic_remove}
          onClick={() => {
            HandleDeletedTask(id);
          }}
        >
          <img src={ic_close} alt="Close" />
        </button>
      ) : null}
      <p className={style.text_title_project}>{nameproject}</p>
      <div className={style.main_list_item_in_task_right}>
        {activeTab !== "Completed" ? (
          <div className={style.container_list_project_button}>
            {projects.slice(0, maxVisibleProjects).map((item, index) => (
              <button key={index} className={style.person_assigin_button}>
                {item.project_name}
              </button>
            ))}
            {projects.length > maxVisibleProjects && (
              <button className={style.person_assigin_button_more}>
                +{projects.length - maxVisibleProjects}
              </button>
            )}
          </div>
        ) : (
          <div style={{ width: "10px" }}></div>
        )}
        {timeproject !== null &&
        activeTab !== "Upcoming" &&
        activeTab !== "Completed" ? (
          <p
            className={style.time_project_over_due}
            style={{ color: activeTab === "Overdue" ? "red" : "black" }}
          >
            {timeproject}
          </p>
        ) : (
          activeTab !== "Completed" && (
            <form onSubmit={handleSubmit}>
              <DatePicker
                style={{
                  outline: "none",
                  boxShadow: "none",
                  border: "none",
                }}
                onChange={(dateString) => {
                  updateTimeTask(dateString);
                }}
              />
            </form>
          )
        )}
      </div>
    </div>
  );
};

export default ListItemInMyTask;
