const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb+srv://711haidarhanif:@cluster0.jyfyy1x.mongodb.net/testCrud')

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})


const userModel = mongoose.model("emp", userSchema);

const emp1 = new userModel({
    name:"Rijushree",
    age:23
});

emp1.save()
  .then(() => {
    console.log("Employee saved to DB ✅");
  })
  .catch((err) => {
    console.error("Error saving employee ❌", err);
  });


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('TimeNest API is Running');
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
