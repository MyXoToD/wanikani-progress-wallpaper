import dotenv from 'dotenv';
import express from 'express';
import errorHandler from './middleware/error-handler.middleware';
import appRoutes from './routes/app.routes';

dotenv.config();

const app = express();
app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', 'src/views');
app.set('view engine', 'pug');

// Routes
app.use(appRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`App listening on http://localhost:${process.env.PORT}`);
});
