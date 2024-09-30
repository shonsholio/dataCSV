import express from 'express'
import bodyParser from 'body-parser';
import path from 'path'
import cors from 'cors'
import { router } from './routes/main.js';
import exp from 'constants';

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