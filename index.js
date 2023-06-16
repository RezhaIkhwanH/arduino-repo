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
    try {

        const res = await dataSensor.get("data");
        const data = await res["props"];
        res.send(data)
    } catch (error) {
        res.status(500).send({ Message: "gagal kesalahan server", error })
    }
})

app.post('/updet', async function (req, res) {
    try {
        const dataReq = req.body;

        let data = await dataSensor.set('data', {
            cahaya: dataReq.cahaya,
            suhu: dataReq.suhu,
            kelembapan: dataReq.kelembapan,
        })
        res.send({ pesan: 'updet berhasil', dataReq })
    } catch (error) {
        res.status(500).send({ Message: "gagal kesalahan server", error })
    }
})

app.delete('/products/:id', async function (req, res) {
    try {

        let data = await dataSensor.delete(req.params.id)
        res.send(`Delete record with id ${req.params.id}`);
    } catch (error) {
        res.status(500).send({ Message: "gagal kesalahan server", error })
    }

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
