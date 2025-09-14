import { taskForm, taskList } from './refs';

import { renderTask } from './tasks';

import { setTask, removeTask, getTasks } from './local-storage-api';

taskForm.addEventListener('submit', addTask);

populateTasks();

export function addTask(event) {
  event.preventDefault();

  const taskName = event.target.taskName.value.trim();

  const taskDescription = event.target.taskDescription.value.trim();

  if (!taskName || !taskDescription) {
    alert('Please enter all fields');

    return;
  }

  const task = {
    name: taskName,

    description: taskDescription,
  };

    renderTask(task);
    

    setTask(task);

  taskForm.reset();
}

taskList.addEventListener('click', deleteTask);

function deleteTask(event) {


  if (event.target.classList.contains('task-list-item-btn')) {
      const taskListItem = event.target.closest('.task-list-item');

      const index = [...taskList.children].indexOf(taskListItem);

      removeTask(index);

    taskListItem.remove();
  }
}

function populateTasks() { 
  const tasks = getTasks();

  tasks.map(task => renderTask(task));
}