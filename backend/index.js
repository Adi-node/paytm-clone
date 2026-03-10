import express from 'express';
import cors from 'cors';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
    origin:'http://localhost:5173',
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));


app.use('/api/v1',router);



app.listen(3000);
