const express = require("express");
const myModule = require("./myModule");
const CyclicDb = require("@cyclic.sh/dynamodb")



const db = CyclicDb("rich-jade-colt-yokeCyclicDB")

// const cors = require("cros");

const animals = db.collection("animals")
const app = express();
const port = process.env.PORT || 8080




// app.use()
//form-urlencoded
app.use(express.json(true))



app.get('/', async function (req, res) {
    try {
        let leo = await animals.set("leo", {
            type: "cat",
            color: "orange"
        })

        // get an item at key "leo" from collection animals
        let item = await animals.get("leo")
        console.log(item)

        res.send("api RUN!!! iot run");
    } catch (error) {
        res.send("error gagal" + error)
    }
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
