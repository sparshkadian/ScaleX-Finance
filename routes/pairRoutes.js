import express from 'express';
import {
  createTradingPair,
  getTradingPair,
  deleteTradingPair,
  updateTradingPair,
  getPrices,
  getVolume,
} from '../controllers/pairController.js';

const Router = express.Router();

Router.get('/getPrices/:pairId', getPrices);
Router.get('/getVolume/:pairId', getVolume);

Router.post('/', createTradingPair);

Router.route('/:pairId')
  .get(getTradingPair)
  .delete(deleteTradingPair)
  .patch(updateTradingPair);

export default Router;
