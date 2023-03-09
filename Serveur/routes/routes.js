module.exports = app => {
    const profile = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create 
    router.post("/", profile.create);
  
    // Retrieve all 
    router.get("/", profile.findAll);

    // Retrieve id
    router.get("/:id", profile.findOne);
  
    // Update id
    router.put("/:id", profile.update);
  
    // Delete id
    router.delete("/:id", profile.delete);
  
    // Delete all
    router.delete("/", profile.deleteAll);
  
    app.use('/api', router);
  };