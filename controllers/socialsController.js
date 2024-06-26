import Socials from '../models/socialsModel.js';
import Pair from '../models/tradingPairModel.js';
import AppError from '../utils/AppError.js';

const checkIfExists = async (req, _, next) => {
  console.log('hello');
  const socials = await Socials.findOne({ _id: req.params.id });
  if (!socials) {
    return next(new AppError('No such Socials exists', 400));
  }
};

export const createSocials = async (req, res, next) => {
  try {
    const newSocials = await Socials.create(req.body);
    res.status(201).json({
      status: 'success',
      newSocials,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

// Get all Socials associated to a pair
export const getPairSocials = async (req, res, next) => {
  try {
    const pairId = req.params.pairId;
    const { info } = await Pair.findOne(
      { _id: pairId },
      'info.socials'
    ).populate('info.socials');
    res.status(200).json({
      status: 'success',
      socials: info.socials,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

export const deleteSocials = async (req, res, next) => {
  try {
    await checkIfExists(req, res, next);
    await Socials.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

export const updateSocials = async (req, res, next) => {
  try {
    await checkIfExists(req, res, next);
    const updatedSocials = await Socials.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(200).json({
      status: 'success',
      updatedSocials,
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};
