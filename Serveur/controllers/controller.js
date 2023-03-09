const Profile = require('../models/profils')

// Create 
exports.create = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        if (error.code == 11000)
            res.status(409).json({
                message: "Last name already exist"
            })
    }
};

// Retrieve all 
exports.findAll = async (req, res) => {
    try {
        const profile = await Profile.find({});
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

// Find a single 
exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findById(id)
        !profile ?
            res.status(404).json({ message: `cannot find any profile why this id : ${id}` }) :
            res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

// Update  
exports.update = async (req, res) => {
    if (req.body.firstName && req.body.lastName && req.body.age)
        try {
            const { id } = req.params;
            const profile = await Profile.findByIdAndUpdate(id, req.body);
            !profile ?
                res.status(404).json({ message: `cannot find any profile why this id : ${id}` }) :
                res.status(200).json(req.body);
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    else
        res.status(500).json({
            message: 'Object incomplet'
        })
};

// Delete 
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findByIdAndDelete(id);
        !profile ?
            res.status(404).json({ message: `cannot find any profile why this id : ${id}` }) :
            res.status(204).json(profile);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

// Delete all
exports.deleteAll = async (req, res) => {
    try {
        const { id } = req.params;
        await Profile.deleteMany({})
        res.status(204).json("ok");
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};


