import express from "express";
import path from "path";
import router from "./src/routes/servers.js";

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'pug')
app.set('views', './src')
//app.use('/images', express.static('/images'));
app.use(express.static(__dirname + '/assets'));

app.use(router)

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
});