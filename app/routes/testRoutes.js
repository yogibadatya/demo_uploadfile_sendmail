const controller = require("../controllers/testController");
const { upload } = require("../middlewares/uploadFile");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get("/test/getAllData",controller.getAllData)

    app.post("/test/addData",[upload.single('profile')],controller.addData)
}
