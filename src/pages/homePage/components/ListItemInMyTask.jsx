import { useUpdateTask } from "../../../data/home/TaskAPI";
import ic_check_has_broder from "../../../assets/icons/ic_check.svg";
import style from "./ListItemInMyTask.module.css";

const ListItemInMyTask = ({
  nameproject,
  timeproject,
  id,
  fetchTasks,
  activeTab = activeTab,
}) => {
  const { updateTask } = useUpdateTask(id);

  const handleFinishTask = async (event) => {
    event.preventDefault();

    try {
      await updateTask({ status: true });
      await fetchTasks();
    } catch (err) {
      console.error("Error Update:", err);
    }
  };

  return (
    <div className={style.main_list_item_in_task}>
      {activeTab === "Upcoming" ? (
        <button
          className={style.main_list_item_in_task_left}
          onClick={handleFinishTask}
        >
          <img src={ic_check_has_broder} alt="Check Icon" />
        </button>
      ) : null}

      <p>{nameproject}</p>
      <div className={style.main_list_item_in_task_right}>
        <button>Cross-fu...</button>
        <p>{timeproject}</p>
      </div>
    </div>
  );
};

export default ListItemInMyTask;
