import express from "express";
const router = express.Router()
import { controller } from "../controllers/mainController.js";
import { upload } from "../multerConfig.js";

router.get('/', controller.inicio)

router.post('/upload', upload.single('file'), controller.single)



export { router } 
