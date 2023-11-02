import express from "express";
import path from "path";
import router from "./src/routes/servers.js";

const __dirname = path.resolve();
console.log('---------')
console.log(__dirname)
console.log('---------')
const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'pug')
app.set('views', './src')

app.use(express.static(__dirname + '/assets'));
app.use(router)

//app.get('/', (req, res) => {
//res.send('<h1>Hello</h1>');
//res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
//res.render('pug/pages/index')
//});
//app.get('/features', (req, res) => {
//res.send('<h1>Hello</h1>');
//res.sendFile(path.resolve(__dirname, 'static', 'features.html'));
//});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
});