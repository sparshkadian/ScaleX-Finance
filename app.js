import express from 'express';
import morgan from 'morgan';
import PairRouter from './routes/pairRoutes.js';
import WebsiteRouter from './routes/websitesRoutes.js';
import socialsRouter from './routes/socialsRoutes.js';
import AppError from './utils/AppError.js';
import globalErrorHandler from './controllers/errorController.js';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/pair', PairRouter);
app.use('/api/website', WebsiteRouter);
app.use('/api/socials', socialsRouter);

app.all('/*', (req, _, next) => {
  next(
    new AppError(
      `The route ${req.originalUrl} does not exist on this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

export default app;
