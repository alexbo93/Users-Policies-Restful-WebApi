import mongoose from 'mongoose';

const PolicySchema = new mongoose.Schema({
  _id: String,
  amountInsured: Number,
  email: String,
  inceptionDate: Date,
  installmentPayment: Boolean,
  clientId: String
}, {id: false});
mongoose.model('Policy', PolicySchema);

export default mongoose.model('Policy');
