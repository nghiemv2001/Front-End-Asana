import { AddNew } from "./AddNew";
import { Appreciations } from "./Appreciations";
import { Attachment } from "./Attachment";
import { DueDate } from "./DueDate";
import { Emoji } from "./Emoji";
import { Expand } from "./Expand";
import { Filter } from "./Filter";
import { IconComponentNode } from "./IconComponentNode";
import { LeaveTask } from "./LeaveTask";
import { Like } from "./Like";
import { Mention } from "./Mention";
import { More } from "./More";
import { Options } from "./Options";
import { RecordAVideo } from "./RecordAVideo";
import { Remove } from "./Remove";
import { Status } from "./Status";
import { Subtasks } from "./Subtasks";
import { TaskLink } from "./TaskLink";
import { Tasks } from "./Tasks";
import { UnassignedUser } from "./UnassignedUser";
import { YourTasks } from "./YourTasks";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="rectangle" />
        <div className="view-options">
          <div className="text-input">
            <div className="horizontal-container">
              <Filter className="icon-instance-node" />
              <div className="text-wrapper">Filter</div>
            </div>
            <div className="frame-wrapper">
              <div className="div-2">
                <img className="vector" alt="Vector" src="vector.svg" />
                <div className="text-wrapper-2">Sort: Newest</div>
              </div>
            </div>
          </div>
          <div className="container">
            <Options className="icon-instance-node-2" />
          </div>
          <div className="text-wrapper-3">Manage notifications</div>
        </div>
        <div className="div-3">
          <div className="button">
            <Tasks className="icon-instance-node" />
            <div className="button-w-icon">Mark complete</div>
          </div>
          <div className="div-4">
            <Like className="icon-instance-node-2" />
            <Attachment className="icon-instance-node-2" />
            <Subtasks className="icon-instance-node-2" />
            <TaskLink className="icon-instance-node-2" />
            <Expand className="icon-instance-node-2" />
            <Options className="icon-instance-node-2" />
          </div>
        </div>
        <div className="div-5">
          <div className="div-wrapper">
            <div className="text-wrapper-4">Today</div>
          </div>
          <div className="div-6">
            <div className="div-7">
              <div className="div-8">
                <YourTasks className="icon-instance-node-3" />
                <div className="text-wrapper-5">Your tasks for today</div>
              </div>
              <Status className="icon-instance-node-2" />
            </div>
            <div className="div-9">
              <IconComponentNode className="icon-instance-node-3" />
              <div className="text-wrapper-6">Create a community file</div>
              <div className="text-wrapper-7">Today - Sep 11</div>
            </div>
          </div>
          <div className="div-wrapper-2">
            <div className="text-wrapper-4">Past 7 Days</div>
          </div>
          <div className="frame-wrapper-2">
            <div className="div-wrapper-3">
              <p className="p">This task is visible to everyone in My workspace.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper-3">
        <div className="frame-wrapper-4">
          <div className="div-10">
            <div className="text-wrapper-8">Inbox</div>
            <div className="frame-wrapper-5">
              <div className="div-11">
                <div className="text-wrapper-9">Activity</div>
                <div className="text-wrapper-10">Archive</div>
              </div>
            </div>
            <div className="rectangle-2" />
          </div>
        </div>
      </div>
      <div className="div-wrapper-4">
        <p className="text-wrapper-11">Create a figma community file</p>
      </div>
      <div className="div-12">
        <div className="div-13">
          <div className="div-wrapper-5">
            <div className="text-wrapper-12">Assignee</div>
          </div>
          <div className="div-14">
            <div className="div-15">
              <div className="div-8">
                <div className="users" />
                <div className="text-wrapper-13">nghiem</div>
              </div>
              <Remove className="icon-instance-node" />
            </div>
            <div className="div-8">
              <div className="text-wrapper">Recently assigned</div>
              <More className="icon-instance-node" />
            </div>
          </div>
        </div>
        <div className="div-13">
          <div className="div-wrapper-5">
            <div className="text-wrapper-12">Due date</div>
          </div>
          <div className="div-8">
            <DueDate className="icon-instance-node-3" />
            <div className="text-wrapper-14">Today</div>
            <Remove className="icon-instance-node" />
          </div>
        </div>
        <div className="div-16">
          <div className="div-wrapper-5">
            <div className="text-wrapper-12">Projects</div>
          </div>
          <div className="div-wrapper-6">
            <div className="text-wrapper">Add to projects</div>
          </div>
        </div>
        <div className="div-13">
          <div className="div-wrapper-5">
            <div className="text-wrapper-12">Dependencies</div>
          </div>
          <div className="text-wrapper-15">Add dependencies</div>
        </div>
        <div className="div-13">
          <div className="div-wrapper-5">
            <div className="text-wrapper-12">Description</div>
          </div>
          <div className="message">
            <div className="text-wrapper-16">New!</div>
            <div className="text-wrapper-17">Send feedback</div>
          </div>
        </div>
      </div>
      <div className="div-17">
        <div className="div-18">
          <div className="users-2" />
          <div className="div-19">
            <p className="text-wrapper-18">Ask a question or post an update…</p>
            <div className="div-11">
              <RecordAVideo className="icon-instance-node-2" />
              <Mention className="icon-instance-node-2" />
              <Emoji className="icon-instance-node-2" />
              <Appreciations className="icon-instance-node-2" />
            </div>
          </div>
        </div>
        <div className="div-20">
          <div className="div-21">
            <div className="text-wrapper-19">Collaborators</div>
            <div className="div-22">
              <div className="div-23">
                <div className="users-3" />
                <UnassignedUser className="icon-instance-node-3" />
                <UnassignedUser className="icon-instance-node-3" />
              </div>
              <AddNew className="icon-instance-node" />
            </div>
          </div>
          <div className="div-24">
            <LeaveTask className="icon-instance-node-2" />
            <div className="text-wrapper-20">Leave task</div>
          </div>
        </div>
      </div>
    </div>
  );
};
