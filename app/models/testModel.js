const mongoose = require("mongoose");

const TestModel = mongoose.model(
    "TestModel",
    new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
        profile: String
    },{timestamps:true})
)

module.exports = TestModel