import  ic_arr_down from "../../../assets/icons/ic_arrow_down.svg"
import ic_plus from '../../../assets/icons/ic_plus.svg';
import "./SpreadsheetHeaderInBox.css";

const SpreadsheetHeaderInBox = () => {
  return (
    <div className="conatiner_spreadsheet_header_inbox ">
      <div className="task_name_spreadsheet_header_inbox">
        <p>Task name</p>
        <button><img src={ic_arr_down}/></button>
      </div>
      <div className="due_date_spreadsheet_header_inbox">
        <p>Due day</p>
        
        <button><img src={ic_arr_down}/></button>
      </div>
      <div className="projects_in_spreadsheet_header_inbox">
        <p>Projects</p>
        <button><img src={ic_arr_down}/></button>
      </div>

      <div className="task_visility_spreadsheet_header_inbox">
        <p>Task visbility</p>
        <button><img src={ic_arr_down}/></button>
      </div>
      <div className="Collaborator_spreadsheet_header_inbox">
        <p>Collaborators</p>
        <button><img src={ic_arr_down}/></button>
      </div>
      <div className="ic_plus_in_spreadsheet_header_inbox">
      <button><img src={ic_plus}/></button>
      </div>
    </div>
  );
};

export default SpreadsheetHeaderInBox;
