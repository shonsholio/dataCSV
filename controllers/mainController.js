const controller = {}
import fs from 'fs'

controller.inicio = (req, res) => {
  res.render('main')
}

controller.single = (req, res) => {
  
  const file = req.file;
  const mes = req.body.periodo

  console.log(file)

  if (!file) {
    return res.status(400).send('No se seleccionó ningún archivo.');
  }

  const siPunto = file.originalname.indexOf('.')
  const extension = file.originalname.substring(siPunto + 1)
  console.log(extension)

  if (extension === 'csv') {

    console.log(file.originalname + ' ha sido cargado');
    console.log('Tipo del archivo:', file.mimetype);
    console.log('Tamaño del archivo:', file.size, 'bytes');
  
    const destino = `${process.cwd()}/uploads/${mes}.${extension}`;
    fs.rename(file.path, destino, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al procesar el archivo.');
      }
  
      res.send('Archivo subido exitosamente!');
    });

  } else {
    res.send('SOLO ESTA AUTORIZADO SUBIR ARCHIVOS CSV')
  }

}

export { controller }