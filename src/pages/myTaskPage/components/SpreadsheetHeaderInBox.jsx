import ic_arr_down from "../../../assets/icons/ic_arrow_down.svg";
import ic_plus from '../../../assets/icons/ic_plus.svg';
import styles from './SpreadsheetHeaderInBox.module.css'; // Importing CSS Module

const SpreadsheetHeaderInBox = () => {
  return (
    <div className={styles.conatiner_spreadsheet_header_inbox}>
      <div className={styles.task_name_spreadsheet_header_inbox}>
        <p>Task name</p>
        <button><img src={ic_arr_down} alt="Sort" /></button>
      </div>
      <div className={styles.due_date_spreadsheet_header_inbox}>
        <p>Due day</p>
        <button><img src={ic_arr_down} alt="Sort" /></button>
      </div>
      <div className={styles.projects_in_spreadsheet_header_inbox}>
        <p>Projects</p>
        <button><img src={ic_arr_down} alt="Sort" /></button>
      </div>

      <div className={styles.task_visility_spreadsheet_header_inbox}>
        <p>Task visibility</p>
        <button><img src={ic_arr_down} alt="Sort" /></button>
      </div>
      <div className={styles.Collaborator_spreadsheet_header_inbox}>
        <p>Collaborators</p>
        <button><img src={ic_arr_down} alt="Sort" /></button>
      </div>
      <div className={styles.ic_plus_in_spreadsheet_header_inbox}>
        <button><img src={ic_plus} alt="Add" /></button>
      </div>
    </div>
  );
};

export default SpreadsheetHeaderInBox;
