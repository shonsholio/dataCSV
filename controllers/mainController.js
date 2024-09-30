const controller = {}

controller.inicio = (req, res) => {
  res.render('main')
}

controller.single = (req, res) => {
  const mes = req.body.periodo
  console.log(mes)

  res.send('enviado')
}

export { controller }