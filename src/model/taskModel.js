const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
