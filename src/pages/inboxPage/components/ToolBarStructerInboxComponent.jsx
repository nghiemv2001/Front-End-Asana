import styles from './ToolBarStructerInboxComponent.module.css'; // Import CSS module
import ic_fillter from '../../../assets/icons/ic_filter.svg';
import ic_sort from '../../../assets/icons/ic_sort.svg';
import ic_dots from '../../../assets/icons/ic_tabler_dots.svg';
import ic_check from '../../../assets/icons/ic_check.svg';
import ic_like from '../../../assets/icons/ic_like.svg';
import ic_attachment from '../../../assets/icons/ic_attachment.svg';
import ic_subtask from '../../../assets/icons/ic_subtask.svg';
import ic_link from '../../../assets/icons/ic_task_link.svg';
import ic_expand from '../../../assets/icons/ic_expand.svg';
import ic_menu_options from '../../../assets/icons/ic_menu_options.svg';

export const ToolBarStructerInboxComponent = () => {
  return (
    <div className={styles.container_tool_bar_structer_inbox_component}>
      <div className={styles.container_left_tool_bar_structer_inbox_component}>
        <div className={styles.container_icon_left_tool_bar_structer_inbox_component}>
          <button className={styles.ic_fillter_in_gr_ic_left}>
            <img src={ic_fillter} alt="Filter" />
            Fillter
          </button>
          <button className={styles.ic_sort_in_gr_ic_left}>
            <img src={ic_sort} alt="Sort" />
            Sort: Newest
          </button>
        </div>
        <div className={styles.container_icon_right_tool_bar_structer_inbox_component}>
          <button className={styles.ic_notifications_in_gr_ic_left}>
            Manage notifications
          </button>
          <button className={styles.ic_dots_in_gr_ic_left}>
            <img src={ic_dots} alt="Options" />
          </button>
        </div>
      </div>
      <div className={styles.container_right_tool_bar_structer_inbox_component}>
        <button className={styles.btn_check_mark_complete_in_inbox}>
          <img src={ic_check} alt="Check" />
          Mark complete
        </button>
        <div className={styles.container_list_gr_ic_inbox}>
          <button>
            <img src={ic_like} alt="Like" />
          </button>
          <button>
            <img src={ic_attachment} alt="Attachment" />
          </button>
          <button>
            <img src={ic_subtask} alt="Subtask" />
          </button>
          <button>
            <img src={ic_link} alt="Link" />
          </button>
          <button>
            <img src={ic_expand} alt="Expand" />
          </button>
          <button>
            <img src={ic_menu_options} alt="Menu" />
          </button>
        </div>
      </div>
    </div>
  );
};
