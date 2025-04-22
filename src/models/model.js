
let tasks = [];
let currentId = 1;

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find(t => t.id === id);
}

function addTask({ title, description, date }) {
  const task = {
    id: currentId++,
    title,
    description,
    date,
    done: false,
  };
  tasks.push(task);
  return task;
}

function markTaskDone(id) {
  const task = getTaskById(id);
  if (task) task.done = true;
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}

function updateTask(id, { title, description, date }) {
  const task = getTaskById(id);
  if (task) {
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.date = date ?? task.date;
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  markTaskDone,
  deleteTask,
  updateTask,
};
