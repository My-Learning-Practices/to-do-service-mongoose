import mongooes from "../connection";

export const taskSchema = new mongooes.Schema({
  taskName: String,
  priority: String,
});

module.exports = mongooes.model("TaskDeatils", taskSchema);
