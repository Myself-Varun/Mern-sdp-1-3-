import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path"; // For resolving paths
import { fileURLToPath } from "url"; // To handle ES module paths

// Import routes
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';
import PostRoute from './routes/PostRoute.js';
import UploadRoute from './routes/UploadRoute.js';
import ChatRoute from './routes/ChatRoute.js';
import MessageRoute from './routes/MessageRoute.js';

const app = express();
dotenv.config(); // Load environment variables

mongoose.set('strictQuery', false); // Disable deprecation warnings (optional)

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'https://peerlinkf.onrender.com', // Update with your frontend URL
        methods: ['GET', 'POST'],
    },
});

 
app.use(cors());

// To serve images inside the public folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// MongoDB connection
const PORT = process.env.PORT || 5000; // Provide a default port if env variable is missing
const CONNECTION = process.env.MONGODB_CONNECTION;

mongoose
  .connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Helps with connection handling
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
  .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));

// Routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/posts', PostRoute);
app.use('/upload', UploadRoute);
app.use('/chat', ChatRoute);
app.use('/message', MessageRoute);
