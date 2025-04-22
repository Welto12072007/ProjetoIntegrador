const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks.controller");

router.get("/", controller.getAllTasks);
router.post("/", controller.createTask);
router.patch("/:id/done", controller.markTaskAsDone);
router.delete("/:id", controller.deleteTask);

module.exports = router;
