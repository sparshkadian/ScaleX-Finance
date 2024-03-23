import express from 'express';

import {
  createWebsite,
  deleteWebsite,
  updateWebsite,
  getPairWebsites,
} from '../controllers/websiteController.js';

const Router = express.Router();

Router.post('/', createWebsite);

Router.route('/:id').delete(deleteWebsite).patch(updateWebsite);
Router.get('/:pairId', getPairWebsites);

export default Router;
