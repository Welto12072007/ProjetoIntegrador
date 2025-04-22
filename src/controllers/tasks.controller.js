const Task = require("../models/model");

exports.getAllTasks = (req, res) => {
  res.json(Task.findAll());
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).send("Campos obrigatórios");
  const newTask = Task.create({ title, description });
  res.status(201).json(newTask);
};

exports.markTaskAsDone = (req, res) => {
  const { id } = req.params;
  const task = Task.markDone(Number(id));
  if (!task) return res.status(404).send("Tarefa não encontrada");
  res.json(task);
};

exports.deleteTask = (req, res) => {
  Task.delete(Number(req.params.id));
  res.status(204).send();
};
