const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const router = require('./routes/main.js')
const exp = require('constants')

const app = express();
const _dirname = process.cwd();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(_dirname, './views') )

app.use('/', router)

app.listen(app.get('port'), ()=> {
  console.log('CONECTING')
})    