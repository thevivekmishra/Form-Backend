import express from "express";
import { addData } from "../controller/AddData-controller.js";
import { getAllData } from "../controller/AllData-controller.js";
import { deleteForm } from "../controller/DeleteData-controller.js";
import { updateForm } from "../controller/UpdateData-controller.js";
import { fetchDataById } from "../controller/DataById-controller.js";

const formRouter = express.Router();

formRouter.post("/add", addData);
formRouter.get("/all",getAllData);
formRouter.put("/edit/:id",updateForm);
formRouter.delete("/delete/:id",deleteForm)
formRouter.get("/getuser/:id", fetchDataById); 


export default formRouter;
