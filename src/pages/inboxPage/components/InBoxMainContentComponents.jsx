import { ContentListTaskAndDetailTaskComponent } from "./ContentListTaskAndDetailTaskComponent";
import { HeaderInboxComponentt } from "./HeaderInboxComponentt";
import "./InBoxMainContentComponents.css";
import { ToolBarStructerInboxComponent } from "./ToolBarStructerInboxComponent";

export const InBoxMainContentComponents = () => {
  return (
    <div className="inbox_main_content">
      <HeaderInboxComponentt />
      <ToolBarStructerInboxComponent/>
      <ContentListTaskAndDetailTaskComponent/>
    </div>
  );
};
