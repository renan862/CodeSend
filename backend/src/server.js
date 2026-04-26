import express from 'express';
import cors from 'cors';

import routes from './routes/routes.js ';
import whatsappService from './services/whatsappService.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(3000, async () => {
    console.log('Server is running on port 3000');
    //await whatsappService.start();


});