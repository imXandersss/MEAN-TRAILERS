import express, {Application} from 'express';

import morgan from 'morgan';
import path from 'path';
import cors from 'cors'

const app: Application = express();

import authRoutes from './routes/auth';
import trailerRoutes from './routes/trailer.router';

app.use('../uploads', express.static(path.resolve('uploads')))

//settings
app.set('port', 3000);

//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/trailer', trailerRoutes);
app.use('/api/auth', authRoutes);


export default app;