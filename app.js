const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { addProject } = require("./projectCOntroller");
const Project = require("./Project.model");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/Project")
  .then(() => console.log("Connected!"));

app.use(express.json());
app.use(cors());

app.post("/project", async (req, res) => {
  try {
    console.log;
    const createProject = await Project.create({ ...req.body });
    if (!createProject) throw "project not created";

    res.status(200).json({ data: createProject });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/project", async (req, res) => {
  try {
    console.log;
    const getProject = await Project.find();
    if (!getProject) throw "here is no data";

    res.status(200).json({ data: getProject });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});


app.put("/project/:id", async (req, res) => {
  try {
    const id= req.params.id;
    const updateProject = await Project.findByIdAndUpdate(
        { _id: id },
        req.body
      );
    if (!updateProject) throw "data not updated";

    const updateRecordFind = await Project.findById(id);

    res.status(200).json({ data: updateRecordFind });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});


app.delete("/project/:id", async (req, res) => {
    try {
      const id= req.params.id;
      console.log(id);
      const deleteRecord = await Project.findByIdAndDelete({ _id: id });
      if (!deleteRecord) throw "data not updated";
  
      
  
      res.status(200).json({ data: deleteRecord });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });

//  return EmployeeCollecton.findByIdAndDelete({ _id: id });

app.listen(8080);
