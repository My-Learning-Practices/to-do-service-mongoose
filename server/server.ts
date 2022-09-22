import crudOperations from "../database/crudOperations";
import express from "express";

var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app
  .route("/")
  .get(async (req: express.Request, res: express.Response) => {
    const filter = req.query.priority?.toString();

    if (filter === undefined) res.send(await crudOperations.getAllTasks());
    else res.send(await crudOperations.findTask(filter));
  })
  .post((req: express.Request, res: express.Response) => {
    const taskDeatils = req.body.taskDeatils;
    crudOperations.addtask(taskDeatils);
  })
  .delete(async (req: express.Request, res: express.Response) => {
    const taskId = req.body.id;
    res.send(await crudOperations.deleteTask(taskId));
  });

app.listen(3000, () => {
  console.info("Server started at port 3000");
});
