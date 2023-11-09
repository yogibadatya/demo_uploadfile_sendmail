const { sendmail } = require("../middlewares/sendMail");
const db = require("../models");
const TestModel = db.testModel

exports.getAllData = async (req,res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sortField = req.query.sortBy || 'name'; // Default sorting by name
        const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

        const GetAllData = await TestModel.find().sort({ [sortField]: sortOrder }).skip((page - 1) * limit).limit(limit)   
        res.status(200).send({success : true, message:"Get All Data SuccessFully", data :GetAllData})
    } catch (error) {
        res.status(400).send({success : false, message:("Something Went Wrong"|| error.message)})
    }
}

exports.addData = async (req,res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;
        const profile = req.file;
        const addedData = await TestModel.create({
            name : name,
            age : age,
            email : email,
            profile : Date.now() + '_' + profile.originalname
        })
        if(addedData?._id != (undefined||null)){
            const to = email;
            const subject = "Welcome To Test";
            const text = `Welcome to our team`
            const mailsent = await sendmail(to,subject,text)
            res.status(200).send({success : true, message:"Data Added SuccessFully", data : addedData})
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send({success : false, message:("Something Went Wrong"|| error.message)})
    }
}