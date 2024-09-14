import ic_fillter from "../../../assets/icons/ic_filter.svg";
import ic_sort from "../../../assets/icons/ic_sort.svg";
import ic_dots from "../../../assets/icons/ic_tabler_dots.svg";
import ic_check from '../../../assets/icons/ic_check.svg'
import ic_like from '../../../assets/icons/ic_like.svg'
import ic_attachment from '../../../assets/icons/ic_attachment.svg'
import ic_subtask from '../../../assets/icons/ic_subtask.svg';
import ic_link from '../../../assets/icons/ic_task_link.svg';
import ic_expand from '../../../assets/icons/ic_expand.svg';
import ic_menu_options from '../../../assets/icons/ic_menu_options.svg'


import "./ToolBarStructerInboxComponent.css";
export const ToolBarStructerInboxComponent = () => {
  return (
    <div className="conatiner_tool_bar_structer_inbox_component">
      <div className="conatiner_left_tool_bar_structer_inbox_component">
        <div className="container_icon_left_tool_bar_structer_inbox_component">
          <button className="ic_fillter_in_gr_ic_left">
            <img src={ic_fillter} /> Fillter
          </button>
          <button className="ic_sort_in_gr_ic_left">
            <img src={ic_sort} />
            Sort: Newest
          </button>
        </div>
        <div className="container_icon_right_tool_bar_structer_inbox_component">
          <button className="ic_notifications_in_gr_ic_left">
            Manage notifications
          </button>
          <button className="ic_dots_in_gr_ic_left">
            <img src={ic_dots} />
          </button>
        </div>
      </div>
      <div className="conatiner_right_tool_bar_structer_inbox_component">
            <button className="btn_check_mark_complete_in_inbox">
                <img src={ic_check}/>
                Mark complete
            </button>
            <div className="container_list_gr_ic_inbox">
                <button>
                    <img src={ic_like}/>
                </button>
                <button>
                    <img src={ic_attachment}/>
                </button>
                <button>
                    <img src={ic_subtask}/>
                </button>
                <button>
                    <img src={ic_link}/>
                </button>
                <button>
                    <img src={ic_expand}/>
                </button>
                <button>
                    <img src={ic_menu_options}/>
                </button>
            </div>
      </div>
    </div>
  );
};
