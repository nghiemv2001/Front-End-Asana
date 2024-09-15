import styles from './ItemListTaskInBox.module.css'; // Import CSS module
import ic_mark_task from '../../../assets/icons/ic_mark_task.svg';
import ic_check from '../../../assets/icons/ic_check.svg';

export const ItemListTaskInBox = () => {
  return (
    <div className={styles.item_list_task_inbox}>
      <div className={styles.title_item_list_task}>
        <img src={ic_mark_task} className={styles.img_mark_task_inbox} alt="Mark Task"/>
        <p>Your tasks for today</p>
        <div className={styles.ic_cicle_blue}></div>
      </div>
      <div className={styles.information_task_inbox}>
        <img className={styles.ic_check_item_list_task_inbox} src={ic_check} alt="Check"/>
        <p className={styles.text_title}>Create a community file</p>
        <p className={styles.text_time}>Today - Sep 11</p>
      </div>
    </div>
  );
};
