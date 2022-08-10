require('./backend/config/db')
const express = require('express')
const app = express()
const lost = require('./backend/routes/lost')

const dotenv = require("dotenv");
dotenv.config();
const connectDB = require('./backend/config/db')


//middleware
app.use(express.json())

//routes
app.get('/hello',(req,res)=>{
    res.send('Lofo App')
})
//app.get('/api/v1/lost') -get all the lost pagination: request pull :ajax query
//app.post('/api/v1/lost') -create a new lost
//app.get('/api/v1/lost/:id') -get single lost
//app.patch('/api/v1/lost/:id') -update lost
//app.delete('/api/v1/lost/:id') -delete lost

const port = 3000
const url=process.env.MONGO_URI
const start = async () => {
    try{

        await connectDB(url);
        app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`))
    }
    catch(error) {
        console.log(error);
    }
};

start()
app.use('/api/v1/lost',lost)

