import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_drop_down from "../../../assets/icons/ic_arr_dwon_gray.svg";
import ic_filter from '../../../assets/icons/ic_filter.svg';
import ic_sort from '../../../assets/icons/ic_sort.svg';
import ic_group from '../../../assets/icons/ic_group.svg'
import './OptionFunctionMyTask.css'

const OptionFunctionMyTask = () =>{
    return (
        <div className="slection_option_function_mytask">
        <div className="header_in_slection_option_function_mytask">
          <div className="gr_button_add_task_in_my_task">
            <button className="button_add_task_in_header_selection">
              <img src={ic_plus} />
              Add task
            </button>
            <button className="button_drop_down_in_header_selection">
              <img src={ic_drop_down} />
            </button>
          </div>
          <div className="gr_btn_option_action_in_my_task">
            <button className="btn_gr_action_my_task"><img src={ic_filter}/>Filter</button>
            <button className="btn_gr_action_my_task"><img src={ic_sort}/>Sort</button>
            <button className="btn_gr_action_my_task"><img src={ic_group}/>Group</button>
          </div>
        </div>
      </div>
    );
}

export default OptionFunctionMyTask;