import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/simple_crud';

// DB connect
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Mongo connection error:', err));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
import itemsRouter from './src/routes/items.js';
app.use('/', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
