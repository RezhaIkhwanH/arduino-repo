const express = require("express");
const myModule = require("./myModule");
// const cors = require("cros");


const app = express();
const port = process.env.PORT || 8080




// app.use()
//form-urlencoded
app.use(express.json(true))



app.get('/', async function (req, res) {
    myModule.simpandata("data", { name: "udin" })
    res.send("api RUN!!! iot run");
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
