import Website from '../models/websiteModel.js';
import Pair from '../models/tradingPairModel.js';
import AppError from '../utils/AppError.js';

const checkIfExists = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new AppError('No such webiste exists', 400));
  }
};

export const createWebsite = async (req, res, next) => {
  try {
    const newWebsite = await Website.create(req.body);
    res.status(201).json({
      status: 'success',
      newWebsite,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

// Get all Websites associated to a Pair
export const getPairWebsites = async (req, res, next) => {
  try {
    const pairId = req.params.pairId;
    const { info } = await Pair.findOne(
      { _id: pairId },
      'info.websites'
    ).populate('info.websites');
    res.status(200).json({
      status: 'success',
      websites: info.websites,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

export const deleteWebsite = async (req, res, next) => {
  try {
    checkIfExists(req, res, next);
    await Website.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

export const updateWebsite = async (req, res, next) => {
  try {
    checkIfExists(req, res, next);
    const updatedWebsite = await Website.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(200).json({
      status: 'success',
      updatedWebsite,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};
