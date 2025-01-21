const app = require("./src/server")
const conDB = require("./src/config/conDB")

conDB().then((res)=>{
    app.listen(3000, ()=>{
        console.log("servidor levantado");
    })
})
.catch(err=>{
    console.log("Error al conectar con la base de datos.");
})