import express from 'express';
import mongoose from 'mongoose';



mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const port = 3001;

        app.listen(port, () => {
            console.log('its running and connect on mongodb🚀');
        });
    })
    .catch(() => console.log('nao conseguiu conectar'))
