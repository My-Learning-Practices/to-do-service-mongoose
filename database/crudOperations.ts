const task = require("./schema/taskDetails");

const addtask = async (taskDeatils: { taskName: String; priority: String }) => {
  try {
    const newTask = await task.create(taskDeatils);

    console.log(newTask);
  } catch (error) {
    console.log(error);
  }
};

const getAllTasks = async () => {
  try {
    return await task.find();
  } catch (error) {
    console.log(error);
  }
};

const findTask = async (filter: string) => {
  try {
    return await task.find({ priority: filter });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (id: string) => {
  try {
    return await task.deleteOne({ id: id });
  } catch (error) {
    console.log(error);
  }
};

export default { addtask, getAllTasks, findTask, deleteTask };
