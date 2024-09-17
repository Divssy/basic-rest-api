import  Express  from "express"
import medicineRouter from "./router/medicineRouter"

const app = Express()
/** allow to read a body request with JSON format */

app.use(Express.json())

/** prefix from medicine router */
app.use(`/medicine`, medicineRouter)

const PORT = 1992
app.listen(PORT, () => {
    console.log(`Server Drugstore run on port ${PORT}`);
 })