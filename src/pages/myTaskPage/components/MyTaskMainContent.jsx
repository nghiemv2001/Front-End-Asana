import "./myTaskMainContent.css";
import HeaderMyTaskComponent from "./HeaderMyTaskComponent";
import OptionFunctionMyTask from "./OptionFunctionMyTask";
import SpreadsheetHeaderInBox from "./SpreadsheetHeaderInBox";
import TaskForTimeComponent from "./TaskForTimeComponent";

const MyTaskMainContent = () => {
  return (
    <div className="mytask_main_content">
      <HeaderMyTaskComponent />
      <OptionFunctionMyTask />
      <SpreadsheetHeaderInBox />
      <TaskForTimeComponent
        title={"Recently assigned"}
        listTask={[
          {
            title: "Schedule kickoff meeting",
            time: "Today - Sep 11",
            visbility: "My workspace",
            Collaborators: "Collaborators",
          },
          {
            title: "Schedule kickoff meeting",
            time: "Today - Sep 10",
            visbility: "My workspace",
            Collaborators: "Collaborators",
          },
          {
            title: "Schedule kickoff meeting",
            time: "Today - Sep 9",
            visbility: "My workspace",
            Collaborators: "Collaborators",
          },
          {
            title: "Schedule kickoff meeting",
            time: "Today - Sep 7",
            visbility: "My workspace",
            Collaborators: "Collaborators",
          },
        ]}
      />

      <TaskForTimeComponent
        title={"Todo day"}
        listTask={[
          {
            title: "Schedule kickoff meeting",
            time: "Today - Sep 11",
            visbility: "My workspace",
            Collaborators: "Collaborators",
          },
        ]}
      />

      <TaskForTimeComponent
        title={"Do next week"}
        listTask={[
          {
            title: "Schedule kickoff meeting",
            time: "Today - Sep 11",
            visbility: "My workspace",
            Collaborators: "Collaborators",
          },
          {
            title: "Schedule kickoff meeting",
            time: "Today - Sep 10",
            visbility: "My workspace",
            Collaborators: "Collaborators",
          },
        ]}
      />

      <TaskForTimeComponent
        title={"Do later"}
        listTask={[
          {
            title: "Schedule kickoff meeting",
            time: "Today - Sep 11",
            visbility: "My workspace",
            Collaborators: "Collaborators",
          }
        ]}
      />
      <TaskForTimeComponent
        title={"Add section"}
        listTask={[]}
      />
    </div>
  );
};

export default MyTaskMainContent;
