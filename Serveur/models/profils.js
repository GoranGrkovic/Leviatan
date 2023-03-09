const mongoose = require('mongoose');

var profileSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "firstName required."],
        },
        lastName: {
            type: String,
            unique: true,
            required: [true, "lastName required."],
        },
        age: {
            type: Number,
            required: [true, "Please enter a age"]
            
        }
    },
    {
        timestamps: true
    }
);

profileSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });


const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
