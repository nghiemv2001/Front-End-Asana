import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_drop_down from "../../../assets/icons/ic_arr_dwon_gray.svg";
import ic_filter from '../../../assets/icons/ic_filter.svg';
import ic_sort from '../../../assets/icons/ic_sort.svg';
import ic_group from '../../../assets/icons/ic_group.svg';
import styles from './OptionFunctionMyTask.module.css'; // Importing CSS Module

const OptionFunctionMyTask = () => {
    return (
        <div className={styles.slection_option_function_mytask}>
            <div className={styles.header_in_slection_option_function_mytask}>
                <div className={styles.gr_button_add_task_in_my_task}>
                    <button className={styles.button_add_task_in_header_selection}>
                        <img src={ic_plus} alt="Add task" />
                        Add task
                    </button>
                    <button className={styles.button_drop_down_in_header_selection}>
                        <img src={ic_drop_down} alt="Dropdown" />
                    </button>
                </div>
                <div className={styles.gr_btn_option_action_in_my_task}>
                    <button className={styles.btn_gr_action_my_task}>
                        <img src={ic_filter} alt="Filter" />
                        Filter
                    </button>
                    <button className={styles.btn_gr_action_my_task}>
                        <img src={ic_sort} alt="Sort" />
                        Sort
                    </button>
                    <button className={styles.btn_gr_action_my_task}>
                        <img src={ic_group} alt="Group" />
                        Group
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OptionFunctionMyTask;
