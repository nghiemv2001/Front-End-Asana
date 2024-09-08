import "./MyTaskComponent.css";
import ic_boy from "../../../assets/icons/ic_main_avatar_1.svg";
import ic_protect from '../../../assets/icons/ic_protected.svg';

import ic_plus_gray from '../../../assets/icons/ic_plus_gray.svg';
import ListItemInMyTask from "./ListItemInMyTask";
const MyTasKComponent = () => {
  return (
    <div className="container_my_task_home">
      <div className="cotainer_header_my_task">
        <button>
          <img className="ic_avatar_main_1" src={ic_boy} />
        </button>
        <div className="big_content_main_my_task">
          <div className="component_text_my_task_icon">
            <p>My Task</p>
            <button ><img src={ic_protect}/></button>
          </div>
          <div className="container_option_select_my_task">
            <button className="button_option_in_select_active">UpComing</button>
            <button className="button_option_in_select">Overdue(1)</button>
            <button className="button_option_in_select">Completed</button>
          </div>
        </div>
        <button>
          <img />
        </button>
      </div>
      <div className="container_create_task_in_my_task">
        <img src={ic_plus_gray}/>
        <p>Create task</p>
      </div>
      <div className="my_list_task_component">
      <ListItemInMyTask nameproject="Project Web React" timeproject="Today - Sep 10"/>
      <ListItemInMyTask nameproject="Project Mobile React" timeproject="NextDay - Sep 8"/> 
      <ListItemInMyTask nameproject="Project Figma React" timeproject="Yesterday - Sep 6"/>
      </div>
    </div>
  );
};

export default MyTasKComponent;
