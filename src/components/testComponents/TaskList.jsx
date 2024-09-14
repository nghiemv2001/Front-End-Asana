import './test.css'
const TaskList = ({ tasks }) => {
  return (
    <ul className="main_list_item_in_task">
      {tasks.map(task => (
        <li key={task.id} className="task_item">
          <div className="task_title">
            <input type="checkbox" checked={task.status === 'Completed'} readOnly /> {task.title}
          </div>
          <div className="main_list_item_in_task_right">
        <button>Cross-fu...</button>
        <p>{task.time}</p>
      </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
