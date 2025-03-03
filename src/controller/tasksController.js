const TaskModel = require("../model/taskModel");

//get all tasks
const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find();
    res.send(tasks);
  } catch (error) {
    console.error("Error getting tasks:", error);
    res.status(500).send("Error getting tasks");
  }
};

//get task by id
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskFound = await TaskModel.findById(id);
    if (!taskFound) {
      res.status(404).send({ message: "Task not found" });
    }
    res.send(taskFound);
  } catch (error) {
    console.error("Error getting task:", error);
    res.status(500).send("Error getting task");
  }
};

//create a task
const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newTask = new TaskModel({ title, description });
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    console.error("Error creating a task", error);
    res.status(500).send({ message: "Error creating a task" });
  }
};

//update a task
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedTask) {
      res.status(404).send({ message: "Task not found" });
    }
    res.send(updatedTask);
  } catch (error) {
    console.error("Error updating a task", error);
    res.status(500).send({ message: "Error updating a task" });
  }
};

//delete a task
const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await TaskModel.findByIdAndDelete(taskId);
    if (!deletedTask) {
      res.status(404).send({ message: "Task not found" });
    }
    res.send({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    console.error("Error deleting a task", error);
    res.status(500).send("Error deleting the task.");
  }
};

module.exports = { getAllTasks, getById, createTask, updateTask, deleteTask };
