import mongoose from 'mongoose';

const websiteSchema = mongoose.Schema({
  label: String,
  url: String,
});

const Website = mongoose.model('Website', websiteSchema);

export default Website;
