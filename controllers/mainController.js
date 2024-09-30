const controller = {}
const SumarArray = require('../funciones.js')
const Percent = require('../funciones.js')
const data = require('../src/sept04.json')
const paypal = require('../src/recibido.json')


controller.inicio = async (req, res) => {

  const contador = {};
  let fechasDiferentes = 0;

  for ( i = 0 ; i < data.length; ++i ){
    if (contador[data[i].Fecha]){
      contador[data[i].Fecha]++;
    } else {
      contador[data[i].Fecha] = 1;
      fechasDiferentes++;
    }
  }

  const cash = []
  const pago1 = []
  const pago2 = []
  const pago3 = []
  const pago4 = []
  
  const arrayFechas = Object.keys(contador);
  for (a = 0; a < data.length; ++a){
    let y = 1
    if ((data[a].Fecha === arrayFechas[0]) && (data[a].Anuncio !== ' ') ){
      pago1.push(data[a])
      cash.push(data[a].Monto)
    } else if ((data[a].Fecha === arrayFechas[y]) && data[a].Anuncio ) {
      pago2.push(data[a])
    } else if ((data[a].Fecha === arrayFechas[y+1]) && data[a].Anuncio ) {
      pago3.push(data[a])
    } else if ((data[a].Fecha === arrayFechas[y+2]) && data[a].Anuncio ) {
      pago4.push(data[a])
    }
    
  }
  
  const cashIn = SumarArray.sumElements(cash)
  
  const porcentajes = []
  for (a = 0; a < pago1.length; ++a){
    const pago = pago1[a].Monto
    const porcent = (pago/cashIn)*100
    porcentajes.push(porcent.toFixed(2))
  }

  const pagado = []
  for (a = 0; a < pago1.length; ++a){
    console.log(pago1[a].Monto)
    console.log(porcentajes[a])

    const pago = (paypal[0].cantidad * porcentajes[a])/100
    console.log(pago)

    pagado.push(pago)
  }
  console.log(pagado)
  
  res.render('main',{
    pago1,
    pago2,
    pago3,
    pago4,
    paypal,
    cashIn,
    porcentajes,
    pagado
  })
}

module.exports = controller