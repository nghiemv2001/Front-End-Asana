
import img_avatar from "../../../assets/images/avatar.png";
import ic_arrow_down_gray from "../../../assets/icons/ic_arr_dwon_gray.svg";
import ic_protected from "../../../assets/icons/ic_protected.svg";
import ic_gr_customsize from "../../../assets/icons/ic_gr_customsize.svg";

import styles from "./HeaderMyTaskComponent.module.css"; // Import CSS module

const HeaderMyTaskComponent = () => {
  return (
    <div className={styles.cotainer_header_mytask_page}>
      <button>
        <img className={styles.ic_avatar_mytask_page} src={img_avatar} alt="avatar" />
      </button>
      <div className={styles.big_content_main_header_mytask_page}>
        <div className={styles.component_text_header_mytask_page_icon}>
          <p>My Task</p>
          <button>
            <img src={ic_arrow_down_gray} alt="arrow down" />
          </button>
        </div>
        <div className={styles.container_option_select_header_mytask_page}>
          <button className={styles.button_option_in_select_active}>List</button>
          <button className={styles.button_option_in_select}>Overdue(1)</button>
          <button className={styles.button_option_in_select}>Completed</button>
        </div>
      </div>
      <div className={styles.gr_customesize_share_mytask}>
        <button className={styles.button_share_header_mytask}>
          <img src={ic_protected} alt="protected" />
          share
        </button>
        <div></div>
        <button className={styles.button_custome_header_mytask}>
          <img src={ic_gr_customsize} alt="custom size" />
          customsize
        </button>
      </div>
    </div>
  );
};

export default HeaderMyTaskComponent;
