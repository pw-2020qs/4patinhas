import express from "express"
import * as path from "path"
import bodyParser from "body-parser"

const STATIC_DIR = path.join(__dirname, '..', 'static')
const DIST_DIR = path.join(__dirname, '..', 'dist')
const TOAST_DIR = path.join(__dirname, '..', 'node_modules',
    'jquery-toast-plugin', 'dist')

    const app = express()

app.use('/', express.static(STATIC_DIR))
app.use('/dist', express.static(DIST_DIR))

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});