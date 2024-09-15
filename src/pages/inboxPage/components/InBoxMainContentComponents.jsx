import { ContentListTaskAndDetailTaskComponent } from "./ContentListTaskAndDetailTaskComponent";
import { HeaderInboxComponent } from "./HeaderInboxComponent";
import styles from "./InBoxMainContentComponents.module.css";
import { ToolBarStructerInboxComponent } from "./ToolBarStructerInboxComponent";
export const InBoxMainContentComponents = () => {
  return (
    <div className={styles.inbox_main_content}>
      <HeaderInboxComponent/>
      <ToolBarStructerInboxComponent/>
      <ContentListTaskAndDetailTaskComponent/>
    </div>
  );
};
