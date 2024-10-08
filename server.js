const express = require('express');
const path = require('path')
const app = express();

app.set('view engine', 'ejs')


app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.render("home");
})


app.listen(5000, () => console.log('Server is running on port 5000'))
