/*

    SkinsTrde

*/
import Express from "express";


const app = Express();

const PORT = process.env.PORT ?? 3000;




app.listen(PORT, () => {
    console.log("Aplicacion corriendo en :", PORT);
});
