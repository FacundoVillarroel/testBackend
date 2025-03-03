const express = require("express");
const {
  getAllTasks,
  getById,
  createTask,
  deleteTask,
  updateTask,
} = require("../controller/tasksController");

const tasksRouter = express.Router();

tasksRouter.get("/:id", getById);

tasksRouter.get("/", getAllTasks);

tasksRouter.post("/", createTask);

tasksRouter.put("/:id", updateTask);

tasksRouter.delete("/:id", deleteTask);

module.exports = tasksRouter;
