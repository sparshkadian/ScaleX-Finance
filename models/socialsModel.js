import mongoose from 'mongoose';

const socialsSchema = mongoose.Schema({
  type: String,
  url: String,
});

const Socials = mongoose.model('Socials', socialsSchema);

export default Socials;
