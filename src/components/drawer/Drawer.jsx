import ic_home from "../../assets/icons/ic_home.svg";
import ic_outline_check from "../../assets/icons/ic_outline_check.svg";
import ic_inbox from "../../assets/icons/ic_inbox.svg";
import ic_reporting from "../../assets/icons/ic_reporting.svg";
import ic_portfolios from "../../assets/icons/ic_portfolios.svg";
import ic_goals from "../../assets/icons/ic_goals.svg";
import ic_arrow_full_fill from "../../assets/icons/ic_arrow_full_fill.svg";
import ic_plus from "../../assets/icons/ic_plus.svg";
import ic_project_drawer_pink from "../../assets/icons/ic_project_drawer_pink.svg";
import ic_project_drawer_blue from "../../assets/icons/ic_project_drawer_blue.svg";
import ic_gr_team_workshop from "../../assets/icons/ic_gr_team_workshop.svg";
import ic_arrow_right from "../../assets/icons/ic_arrow_right.svg";
import ic_email from "../../assets/icons/ic_email.svg";

import "./Drawer.css";
import { Link } from "react-router-dom";


const DrawerComponent = ({ isOpenDrawer }) => {

  return (
    <div className={`drawer_component ${isOpenDrawer ? 'open' : 'closed'}`}>
      
      {/* Header drawer */}
      <div className="main_navigation">
        <div className="item_main_navigation">
          <Link to={"/"} className="btn_drawer_click">
            <img src={ic_home} />
            <p>Home</p>
          </Link>
        </div>
        <div className="item_main_navigation">
          <Link to={"/task"} className="btn_drawer_click">
            <img src={ic_outline_check} /> <p>My Tasks</p>
          </Link>
        </div>
        <div className="item_main_navigation">
          <Link to={'/inbox'} className="btn_drawer_click">
            <img src={ic_inbox} /> <p>Inbox</p>
          </Link>
        </div>
      </div>

      {/* Body Drawer */}
      <div className="div_conatiner_drawer_section_sortable">
        <div className="div_title_gr_navigation">
          <button className="btn_drawer_click">
            <img src={ic_arrow_full_fill} />
            <p>Insights</p>
          </button>
          <button className="btn_plus">
            <img src={ic_plus} />
          </button>
        </div>
        <div className="item_main_navigation">
          <button className="btn_drawer_click">
            <img src={ic_reporting} /> <p>Reporting</p>
          </button>
        </div>
        <div className="item_main_navigation">
          <button className="btn_drawer_click">
            <img src={ic_portfolios} /> <p>Portfolios</p>
          </button>
        </div>
        <div className="item_main_navigation">
          <button className="btn_drawer_click">
            <img src={ic_goals} />
            <p>Goals</p>
          </button>
        </div>
        <div className="div_title_gr_navigation">
          <button className="btn_drawer_click">
            <img src={ic_arrow_full_fill} />
            <p>Projects</p>
          </button>
          <button className="btn_plus">
            <img src={ic_plus} />
          </button>
        </div>
        <div className="item_main_navigation">
          <button className="btn_drawer_click">
            <img src={ic_project_drawer_pink} /> <p>Mobile Project</p>
          </button>
        </div>
        <div className="item_main_navigation">
          <button className="btn_drawer_click">
            <img src={ic_project_drawer_blue} /> <p>Web Project</p>
          </button>
        </div>
        <div className="div_title_gr_navigation">
          <button className="btn_drawer_click">
            <img src={ic_arrow_full_fill} />
            <p>Team</p>
          </button>
          <button className="btn_plus">
            <img src={ic_arrow_right} />
          </button>
        </div>
        <div className="item_main_navigation">
          <button className="btn_drawer_click">
            <img src={ic_gr_team_workshop} /> <p>My WorkSpace</p>
          </button>
        </div>
        <div className="item_main_navigation">
          <button className="btn_browse_team">
            <p>Browse teams</p>
          </button>
        </div>
      </div>
      {/* Bottom Drawer */}
      <div className="bottom_drawer_navigation">
        <button className="btn_drawer_email_click">
          <img src={ic_email} />
          <p>Invite Teammates</p>
        </button>
        <button className="btn_drawer_click_help_with">
          <p>Help with Invent </p>
        </button>
      </div>
    </div>
  );
};

export default DrawerComponent;
