import mongoose from 'mongoose';

// It describes how user will be saved in the mongodb database
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

//Create user model(collection) with name 'User' based on the userSchema
const userModel = mongoose.model('User', userSchema);

export default userModel;
