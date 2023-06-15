const express = require("express");
var cors = require('cors')
const CyclicDb = require("@cyclic.sh/dynamodb")

// const cors = require("cros");

const dataSensor = CyclicDb.collection("dataSensor")
const app = express();
const port = process.env.PORT || 8080




app.use(cors())
//form-urlencoded
app.use(express.json(true))



app.get('/', async function (req, res) {
    res.send("api run...")
});

app.get('/get', async (req, res) => {
    const data = await dataSensor.get("data")
    res.send(data)
})

app.post('/updet', async function (req, res) {
    let data = await dataSensor.set('data', {
        type: 'cat',
        color: 'orange'
    })
    res.send('POST request to the homepage')
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
