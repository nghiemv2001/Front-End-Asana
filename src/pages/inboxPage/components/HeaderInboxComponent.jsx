import styles from './HeaderInboxComponent.module.css'; 
export const HeaderInboxComponent = () => {
  return (
    <div className={styles.container_header_inbox_page}>
      <div className={styles.big_content_main_header_inbox_page}>
        <div className={styles.component_text_header_inbox_page_icon}>
          <p>Inbox</p>
        </div>
        <div className={styles.container_option_select_header_inbox_page}>
          <button className={styles.button_option_in_inbox_select_active}>
            Activity
          </button>
          <button className={styles.button_option_in_inbox_select}>
            Archive
          </button>
        </div>
      </div>
    </div>
  );
};
