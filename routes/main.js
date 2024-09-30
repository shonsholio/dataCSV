import express from "express";
const router = express.Router()
import { controller } from "../controllers/mainController.js";
import multer from "multer";

const upload = multer({ dest: './uploads/' });
const app = express()

router.get('/', controller.inicio)
router.post('/upload', upload.single('file'), controller.single)



export { router } 
