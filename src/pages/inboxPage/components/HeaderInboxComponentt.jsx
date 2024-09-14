import "./HeaderInboxComponent.css";

export const HeaderInboxComponentt = () => {
  return (
    <div className="cotainer_header_inbox_page">
      <div className="big_content_main_header_inbox_page">
        <div className="component_text_header_inbox_page_icon">
          <p>Inbox</p>
        </div>
        <div className="container_option_select_header_inbox_page">
          <button className="button_option_in_inbox_select_active">Activity</button>
          <button className="button_option_in_inbox_select">Archive</button>
        </div>
      </div>
    </div>
  );
};
