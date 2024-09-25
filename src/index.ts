import  Express  from "express"
import medicineRouter from "./router/medicineRouter"
import adminRouter from "./router/adminRouter"

const app = Express()
/** allow to read a body request with JSON format */

app.use(Express.json())

/** prefix from medicine router */
app.use(`/medicine`, medicineRouter)

app.use(`/admin`, adminRouter)

const PORT = 1992
app.listen(PORT, () => {
    console.log(`Server Drugstore run on port ${PORT}`);
 })