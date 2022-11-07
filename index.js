const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
   })

   // TUGAS PRAKTIKUM NOMER 1 //
   
    // end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi) 
    let volume = sisi **3 
    let luas_permukaan = 6 * sisi **2
    let response = {
    sisi: sisi,
    result: {
        volume: volume,
        luas_permukaan: luas_permukaan
    }
    }
    res.json(response)
   })

app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar) 
    let tinggi = Number(req.body.tinggi) 
    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * (panjang*lebar + panjang*tinggi + tinggi*lebar)
    let response = {
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    result:{
        volume: volume,
        luas_permukaan: luas_permukaan
    }
    }
    res.json(response)
   })

   app.post("/tabung", (req,res) => {
    let r = Number(req.body.r)   
    let tinggi = Number(req.body.tinggi)

    if(r % 7 == 0) {
        let volume = 22 * r *2 * tinggi / 7;
        let luas_permukaan = 2 * 22 * r * (r+tinggi) /7;
        let response = {
            jari_jari: r,
            tinggi: tinggi,
            result:{
                volume: volume,
                luas_permukaan: luas_permukaan,
            }
        }
        res.json(response)
    }else{

    let volume = 3.14 * r * tinggi
    let luas_permukaan = 2 * 3.14 * r * (r+tinggi)
    let response = {
        jari_jari: r,
        tinggi: tinggi,
        result:{
            volume: volume,
            luas_permukaan: luas_permukaan,
        }
    }
    res.json(response)
}
})

app.post("/kerucut", (req,res) => {
    let r = Number(req.body.r)   
    let tinggi = Number(req.body.tinggi)
    let sisi_miring = Number(req.body.sisi_miring)

    if(r % 7 == 0) {
        let volume = 22 * r **2 * tinggi /7 /3
        let luas_permukaan = 22 * r * (sisi_miring + r) /7
        let response = {
            r: r,
            tinggi: tinggi,
            sisi_miring: sisi_miring,
            result:{
                volume: volume,
                luas_permukaan: luas_permukaan,
            }
        }
        res.json(response)
    }else{
        
    let volume = 3.14 * r **2 * tinggi /3
    let luas_permukaan = 3.14 * r * (sisi_miring + r)
    let response = {
        r: r,
        tinggi: tinggi,
        sisi_miring: sisi_miring,
        result:{
            volume: volume,
            luas_permukaan: luas_permukaan,
        }
    }
    res.json(response)
    }
   
})


 // TUGAS PRAKTIKUM NOMOR 2 //

app.get("/convert/celcius/:temp", (req,res) => {
    let temp = req.params.temp
    let reamur = 4*temp/5
    let fahrenheit = 9*temp/5+32
    let kelvin = 5*temp/5+273
    let response = {
        celcius: temp,
        result:{
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    res.json(response)
    })
    app.get("/convert/reamur/:temp", (req,res) => {
        let temp = req.params.temp
        let celcius = 5*temp/4
        let fahrenheit = 9*temp/4+32
        let kelvin = 5*temp/4+273
        let response = {
            reamur: temp,
            result:{
                celcius: celcius,
                fahrenheit: fahrenheit,
                kelvin: kelvin
            }
        }
    res.json(response)
    })
    app.get("/convert/kelvin/:temp", (req,res) => {
        let temp = req.params.temp
        let celcius = 5*(temp-273)/5
        let fahrenheit = 9*(temp-273)/5+32
        let reamur = 4*(temp-273)/5
        let response = {
            kelvin: temp,
            result:{
                celcius: celcius,
                fahrenheit: fahrenheit,
                reamur: reamur
            }
        }
    res.json(response)
    })
    app.get("/convert/fahrenheit/:temp"), (req,res) => {
        let temp = req.params.temp
        let celcius = 5*(temp-32)/9
        let reamur = 4*(temp-32)/9
        let kelvin = 5*(temp-32)/9+273
        let response = {
            fahrenheit: temp,
            result:{
                celcius: celcius,
                reamur: reamur,
                kelvin: kelvin
            }
        }
    res.json(response)
    }

    // TUGAS PRAKTIKUM NOMOR 3//

app.get("/convert/biner/:no", (req,res) => {
    let no = req.params.no
    let desimal = parseInt(no, 2).toString(10)
    let oktal = parseInt(no, 2).toString
    let heksadesimal = parseInt(no, 2).toString(16)
    let response = {
        Biner: no,
        result:{
            Desimal: desimal,
            Oktal: oktal,
            Heksadesimal: heksadesimal
        }
    }
res.json(response)

})
app.get("/convert/desimal/:no", (req,res) => {
    let no = req.params.no
    let biner = parseInt(no, 10).toString(2)
    let oktal = parseInt(no, 10).toString
    let heksadesimal = parseInt(no, 10).toString(16)
    let response = {
        Desimal: no,
        result:{
            Biner: biner,
            Oktal: oktal,
            Heksadesimal: heksadesimal
        }
    }
res.json(response)
})
app.get("/convert/oktal/:no", (req,res) => {
    let no = req.params.no
    let biner = parseInt(no, 8).toString(2)
    let desimal = parseInt(no, 8).toString(10)
    let heksadesimal = parseInt(no, 8).toString(16)
    let response = {
        Oktal: no,
        result:{
            Biner: biner,
            Desimal: desimal,
            Heksadesimal: heksadesimal
        }
    }
res.json(response)
})

app.get("/convert/heksadesimal/:no", (req,res) => {
    let no = req.params.no
    let biner = parseInt(no, 16).toString(2)
    let desimal = parseInt(no, 16).toString(10)
    let oktal = parseInt(no, 16).toString
    let response = {
        Heksadesimal: no,
        result:{
            Biner: biner,
            Desimal: desimal,
            Oktal: oktal
        }
    }
res.json(response)
})

// TUGAS PRAKTIKUM NOMOR 4 //

app.post("/bmi", (req,res) => {
    let bb = req.body.berat
    let tb = req.body.tinggi
    let bmi = bb/(tb)**2
    let status = ''
    if (bmi<18.5) {
        status= "Kekurangan berat badan"
    } else if(bmi>=18.5&&bmi<=24.9){
        status= "Normal (Ideal)"
    } else if(bmi>=25.0&&bmi<=29.9){
        status= "Kelebihan berat badan"
    } else if(bmi>=30.0){
        status= "Kegemukan (Obesitas)"
    }
    let response = {
        Berat: bb+' kg',
        Tinggi: tb+' cm',
        BMI: bmi,
        Status: status
    }
    res.json(response)
})

// TUGAS PRAKTIKUM NOMOR 5 //

app.post("/anjiglgenap", (req,res) => {
    let no = req.body.angka
    let ket = ''
    if (no % 2 == 1) {
        ket= "Angka tersebut ganjil"
    } else if(no % 2 == 0){
        ket= "Angka tersebut genap"
    }
    let response = {
        Angka: no,
        Keterangan: ket
    }
    res.json(response)
})






   
