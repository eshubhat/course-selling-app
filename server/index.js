const express =  require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require('./router/admin');
const userRouter = require('./router/user');

const app = express();

app.use(cors());
app.use(express.json());

app.use('./admin',adminRouter);
app.use('./user',userRouter);

mongoose.connect('mongodb+srv://Eshan:Eshan%40Mongo@clusters.gwcvugc.mongodb.net/Course-selling-app',{ useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" })

app.listen(3000, () => console.log('Server running on port 3000'));