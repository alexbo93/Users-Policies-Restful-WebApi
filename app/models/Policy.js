import mongoose from 'mongoose';
// TODO: Might have issues with Date format
const PolicySchema = new mongoose.Schema({
  id: String,
  amountInsured: Number,
  email: String,
  inceptionDate: Date,
  installmentPayment: Boolean,
  clientId: String
});
mongoose.model('Policy', PolicySchema);

export default mongoose.model('Policy');
