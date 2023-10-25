import express from "express";
import {PORT, URI} from "./config.js";
import mongoose from "mongoose";
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });

app.use('/books', bookRoute);

mongoose.connect(URI)
.then( () => {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log(`App started listening on ${PORT}`);
    }) 
})
.catch((error)=> {
    console.log(error);

})