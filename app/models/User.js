import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  role: String
}, {id: false});
mongoose.model('User', UserSchema);

export default mongoose.model('User');
