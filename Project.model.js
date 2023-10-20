const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    project_name :{
        type:String,
    },
    frontend_url:{
        type:String
    },
    backend_url:{
        type:String
    },
    category:{
        type:String
    }
});

const Project = mongoose.model("Project",projectSchema);
module.exports = Project;