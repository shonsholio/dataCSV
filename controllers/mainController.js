const controller = {}
import { uploadImage } from "../cloudinaryConfig.js"
import fs from 'fs'

controller.inicio = (req, res) => {
  res.render('main')
}

controller.single = async (req, res) => {
  try {
  const result = await uploadImage(req.file.path, {
    folder: ''
  });
  fs.unlinkSync(req.file.path); // Elimina el archivo local después de subirlo
  console.log('YA SE SUBIO Y YA SE BORRO')
  // res.send('archivo subido con exito')
  res.json({ url: result.secure_url });
}
  catch (error) {
    res.status(500).send(error.message);
  }

}

export { controller }