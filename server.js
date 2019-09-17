const express = require("express");
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(4200, () => console.log("listening on port 4200"));