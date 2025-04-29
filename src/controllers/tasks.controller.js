
const taskModel = require('../models/model');

exports.getTasks = (req, res) => {
  res.json(taskModel.getAllTasks());
};

exports.createTask = (req, res) => {
  const { title, description, date } = req.body;
  const task = taskModel.addTask({ title, description, date });
  res.status(201).json(task);
};

exports.markTaskDone = (req, res) => {
  const id = parseInt(req.params.id);
  taskModel.markTaskDone(id);
  res.status(200).json({ message: "Tarefa concluída" });
};

exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  taskModel.deleteTask(id);
  res.status(200).json({ message: "Tarefa excluída" });
};

exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, date } = req.body;
  taskModel.updateTask(id, { title, description, date });
  res.status(200).json({ message: "Tarefa atualizada" });
};
