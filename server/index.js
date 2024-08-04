//on 02/08 evening 
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import userRoutes from './routes/user.js';
import videoRoutes from './routes/video.js';
import commentsRoutes from './routes/comments.js';
import path from 'path';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use('/uploads', express.static(path.join('uploads')));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Hello");
});

// Define routes
app.use('/api/user', userRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/comment', commentsRoutes);

// 404 handler for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const DB_URL = process.env.CONNECTION_URL;
mongoose.set('strictQuery', false);
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB database connected");
    })
    .catch((error) => {
        console.log(error);
    });
// app.listen(3001, () => console.log('Server running on port 5000'));