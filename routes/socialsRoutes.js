import express from 'express';

import {
  createSocials,
  deleteSocials,
  updateSocials,
  getPairSocials,
} from '../controllers/socialsController.js';

const Router = express.Router();

Router.post('/', createSocials);
Router.route('/:id').delete(deleteSocials).patch(updateSocials);
Router.get('/:pairId', getPairSocials);

export default Router;
