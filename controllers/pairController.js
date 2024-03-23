import Pairs from '../models/tradingPairModel.js';
import AppError from '../utils/AppError.js';

// Fetch Prices for a Trading Pair

const checkIfExists = (req, _, next) => {
  const id = req.params.pairId;
  if (!id) {
    return next(new AppError('No such Pair exists', 400));
  }
};

export const getPrices = async (req, res) => {
  try {
    const prices = await Pairs.findOne(
      { _id: req.params.pairId },
      'priceNative priceUsd'
    );
    res.status(200).json({
      status: 'success',
      prices,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

// Fetch Volume for a Trading Pair
export const getVolume = async (req, res) => {
  try {
    const { volume } = await Pairs.findOne(
      { _id: req.params.pairId },
      'volume'
    );
    res.status(200).json({
      status: 'success',
      volume,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

export const createTradingPair = async (req, res, next) => {
  try {
    const newPair = await Pairs.create(req.body);
    res.status(201).json({
      status: 'success',
      newPair,
    });
  } catch (error) {
    console.log(error);
    next(new AppError(error.message));
  }
};

export const getTradingPair = async (req, res, next) => {
  try {
    const pair = await Pairs.findById(req.params.pairId).populate({
      path: 'info.websites info.socials',
      select: '-__v',
    });
    res.status(200).json({
      status: 'success',
      pair,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

export const deleteTradingPair = async (req, res, next) => {
  try {
    checkIfExists(req, res, next);
    await Pairs.findByIdAndDelete(req.params.pairId);
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

export const updateTradingPair = async (req, res, next) => {
  try {
    checkIfExists(req, res, next);
    const updatedPair = await Pairs.findByIdAndUpdate(
      req.params.pairId,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(200).json({
      status: 'success',
      updatedPair,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};
