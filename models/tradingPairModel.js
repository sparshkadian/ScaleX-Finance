import mongoose from 'mongoose';

const tradingPairSchema = new mongoose.Schema({
  chainId: { type: String, required: true },
  dexId: { type: String, required: true },
  url: { type: String, required: true },
  pairAddress: { type: String, required: true, unique: true },
  baseToken: {
    address: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
  },
  quoteToken: {
    address: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
  },
  priceNative: { type: Number, required: true },
  priceUsd: { type: Number, required: true },
  txns: {
    m5: {
      buys: { type: Number, default: 0 },
      sells: { type: Number, default: 0 },
    },
    h1: {
      buys: { type: Number, default: 0 },
      sells: { type: Number, default: 0 },
    },
    h6: {
      buys: { type: Number, default: 0 },
      sells: { type: Number, default: 0 },
    },
    h24: {
      buys: { type: Number, default: 0 },
      sells: { type: Number, default: 0 },
    },
  },
  volume: {
    h24: { type: Number, default: 0 },
    h6: { type: Number, default: 0 },
    h1: { type: Number, default: 0 },
    m5: { type: Number, default: 0 },
  },
  priceChange: {
    m5: { type: Number, default: 0 },
    h1: { type: Number, default: 0 },
    h6: { type: Number, default: 0 },
    h24: { type: Number, default: 0 },
  },
  liquidity: {
    usd: { type: Number, default: 0 },
    base: { type: Number, default: 0 },
    quote: { type: Number, default: 0 },
  },
  pairCreatedAt: { type: Date, required: true },
  info: {
    imageUrl: { type: String, required: true },
    websites: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Website',
      },
    ],
    socials: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Socials',
      },
    ],
  },
});

const Pairs = mongoose.model('Pairs', tradingPairSchema);

export default Pairs;
