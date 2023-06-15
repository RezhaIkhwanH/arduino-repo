const fs = require('fs');
const phat = "./data/";



if (!fs.existsSync(phat + "data.json")) {
    fs.writeFileSync(phat + "data.json", "[]")
}
const ambilFile = (namaFile) => {
    return new Promise((berjasil, gagal) => {
        fs.readFile(`${phat}${namaFile}`, 'utf-8', (err, data) => {
            berjasil(JSON.parse(data))
        })
    })
}

const simpandata = async (namaFile, dataBaru) => {

    const dataLama = await ambilFile(namaFile + ".json");
    dataLama.push(dataBaru);
    fs.writeFile(phat + namaFile + ".json", JSON.stringify(dataLama), (err) => {
        if (err) throw err
    })

}

const deletData = async (namefile, file) => {
    const dataLama = await ambilFile(namefile + ".json");
    const dataBaru = dataLama.filter(e => e.name != file)
    console.log(dataBaru);
    fs.writeFile(phat + namefile + ".json", JSON.stringify(dataBaru), (err) => {
        if (err) throw err
    })
}

const getAll = async (namaFile) => {
    const dataFile = await ambilFile(namaFile + ".json")
    return dataFile
}

module.exports = { simpandata, ambilFile, getAll, deletData }