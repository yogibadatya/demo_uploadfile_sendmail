const express = require("express");
const bodyParser = require("body-parser")
const db = require("./app/models");
const dbConfig = require("./app/config/db.config");
const app = express();
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Successfully connect to MongoDB.");
})
.catch(err => {
    console.error("Connection error", err);
    process.exit();
});

require("./app/routes/testRoutes")(app)

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});