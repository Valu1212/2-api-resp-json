const express = require('express')
const fs = require('fs') //Permite trabajar con archivos (file system) viene incluida en node, no se instala
const app = express()
const port = 3000

//middle ware

app.use(express.json())

//Funcion para leer los datos del archivo.json 

const leerDatos = ()=>{
    try{
    const datos = fs.readFileSync('./data/datos.json')
    return JSON.parse(datos) 

    // console.log(JSON.parse(datos))
    }catch(error){
        console.log(error)
    }
}

    // leerDatos()



    //Escribir Datos

    const escribirDatos = ()=>{
        try{
       fs.writeFileSync('./data/datos.json',JSON.stringify(datos)) //(JSON.stringify(datos)) convierte un objeto js en un json

        // console.log(JSON.parse(datos))
        }catch(error){
            console.log(error)
        }
    }




app.get('/productos',(req,res)=>{
    res.send('listado de productos')

})

app.post('/productos',(req,res)=>{
    res.send('guardando nuevo producto')

})


app.get('/productos/:id',(req,res)=>{
    res.send('listado de productos')

})


app.put('/productos/:id',(req,res)=>{
    res.send('actualizando producto')

})


app.delete('/productos/:id',(req,res)=>{
    res.send('eliminando producto')

})



app.listen(port, () =>{
    console.log("servidor corriendo")
})

