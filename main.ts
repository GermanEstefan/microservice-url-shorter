import express from 'express';
import cors from 'cors';
import { connectToDB } from './db/config';
import { getUrlShorted, saveUrlShorted } from './controllers/urlShorted';
import { config } from 'dotenv'; config();

//Global consts
const PORT = process.env.PORT || 3000;

//Up express server
const expressApp = express();

//Connection DB
connectToDB().then(resp => console.log(resp)).catch(err => console.log(err));

//Middlewares
expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(express.static('public'));

//Endpoints
expressApp.post('/api/shorturl', saveUrlShorted);
expressApp.get('/api/shorturl/:urlShorted', getUrlShorted);

//Listen requests...
expressApp.listen(PORT, () => console.log('Server is running in the port', PORT));