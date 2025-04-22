let tasks = [];
let currentId = 1;

module.exports = {
  findAll: () => tasks,
  create: (task) => {
    const newTask = { id: currentId++, done: false, ...task };
    tasks.push(newTask);
    return newTask;
  },
  markDone: (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) task.done = true;
    return task;
  },
  delete: (id) => {
    tasks = tasks.filter(t => t.id !== id);
  }
};
