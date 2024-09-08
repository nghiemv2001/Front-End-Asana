import "./ContainerCardProject.css";
import ic_arr_down_gray from "../../../assets/icons/ic_arr_dwon_gray.svg";
import ic_project from "../../../assets/icons/ic_project_drawer_blue.svg";
import plus_has_broder_gray from '../../../assets/icons/plus_has_broder_gray.svg';
import ic_project2 from "../../../assets/icons/ic_project_drawer_pink.svg";
const ContainerCardProject = () => {
  return (
    <div className="container_card_project">
      <div className="head_container_card_project">
        <p className="name_project">Project</p>
        <p className="title_time">Recents</p>
        <img src={ic_arr_down_gray} />
      </div>
      <div className="main_list_container_card_project">
        <div className="item_in_list_card_project">
          <button>
            <img src={plus_has_broder_gray} />
            <p>Create project</p>
          </button>
        </div>
        <div className="item_in_list_card_project">
          <button>
            <img src={ic_project} />
            <p>Create project</p>
          </button>
        </div>
        <div className="item_in_list_card_project">
        <button>
          <img src={ic_project2}/>
          <p>Create project</p>
        </button>
      </div>
      </div>
    </div>
  );
};

export default ContainerCardProject;
