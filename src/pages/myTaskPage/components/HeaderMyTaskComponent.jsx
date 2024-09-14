import img_avatar from "../../../assets/images/avatar.png";
import ic_arrow_down_gray from "../../../assets/icons/ic_arr_dwon_gray.svg";
import ic_protected from "../../../assets/icons/ic_protected.svg";
import ic_gr_customsize from "../../../assets/icons/ic_gr_customsize.svg";

import "./HeaderMyTaskComponent.css";

const HeaderMyTaskComponent = () => {
  return (
    <div className="cotainer_header_mytask_page">
      <button>
        <img className="ic_avatar_mytask_page" src={img_avatar} />
      </button>
      <div className="big_content_main_header_mytask_page">
        <div className="component_text_header_mytask_page_icon">
          <p>My Task</p>
          <button>
            <img src={ic_arrow_down_gray} />
          </button>
        </div>
        <div className="container_option_select_header_mytask_page">
          <button className="button_option_in_select_active">List</button>
          <button className="button_option_in_select">Overdue(1)</button>
          <button className="button_option_in_select">Completed</button>
        </div>
      </div>
      <div className="gr_customesize_share_mytask">
        <button className="button_share_header_mytask">
          <img src={ic_protected} />
          share
        </button>
        <div></div>
        <button className="button_custome_header_mytask">
          <img src={ic_gr_customsize} />
          customsize
        </button>
      </div>
    </div>
  );
};

export default HeaderMyTaskComponent;
