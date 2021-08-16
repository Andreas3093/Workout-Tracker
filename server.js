const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require('path')


const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use (require("./routes/apiRoutes.js"));
app.use (require("./routes/htmlRoutes"));

app.listen(PORT, () => { 
    console.log(`App listening on Port ${PORT}`);
});


