const ToDoModel = require("../models/ToDoModel.js");

module.exports.getToDo = async (req, res) => {
  try {
    const toDo = await ToDoModel.find();
    res.send(toDo);
  } catch (error) {
    console.error("Error while fetching ToDo:", error);
    res.status(500).send("Error while fetching ToDo.");
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  try {
    const createdToDo = await ToDoModel.create({ text });
    console.log("Added Successfully.....!");
    console.log(createdToDo);
    res.send(createdToDo);
  } catch (error) {
    console.error("Error while creating ToDo:", error);
    res.status(500).send("Error while creating ToDo.");
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    const updatedToDo = await ToDoModel.findByIdAndUpdate(
      _id,
      { text },
      { new: true }
    );
    console.log("Updated Successfully.....!");
    console.log(updatedToDo);
    res.status(201).send("Updated SuccessFully....");
  } catch (error) {
    console.error("Error while updating ToDo:", error);
    res.status(500).send("Error while updating ToDo.");
  }
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  try {
    await ToDoModel.findByIdAndDelete(_id);
    res.status(201).send("Deleted SuccessFully....");
  } catch (error) {
    console.error("Error while deleting ToDo:", error);
    res.status(500).send("Error while deleting ToDo.");
  }
};
