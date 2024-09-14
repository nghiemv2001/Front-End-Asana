import  { useState } from 'react';
import TaskList from "./testComponents/TaskList";

const tasks = [
    { id: 1, title: 'Project Web React', date: 'Today - Sep 10', status: 'Upcoming', type: 'Cross-functional' },
    { id: 2, title: 'Project Mobile React', date: 'NextDay - Sep 8', status: 'Upcoming', type: 'Cross-functional' },
    { id: 3, title: 'Project Figma React', date: 'Yesterday - Sep 6', status: 'Overdue', type: 'Cross-functional' }
  ];

export const TestComPonent = () => {
    const [activeTab, setActiveTab] = useState('Upcoming');

  const filteredTasks = tasks.filter(task => task.status === activeTab);
  
  return (
    <div className="tasks_view">
    <div className="tabs">
      <button onClick={() => setActiveTab('Upcoming')} className={activeTab === 'Upcoming' ? 'active' : ''}>
        Upcoming
      </button>
      <button onClick={() => setActiveTab('Overdue')} className={activeTab === 'Overdue' ? 'active' : ''}>
        Overdue (1)
      </button>
      <button onClick={() => setActiveTab('Completed')} className={activeTab === 'Completed' ? 'active' : ''}>
        Completed
      </button>
    </div>

    <TaskList tasks={filteredTasks} />
  </div>
  );
};

