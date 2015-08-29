/**
 * Created by Peter on 18/04/15.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  displayName: {type: String, required: true},
  picture: String,
  twitter: {type: String, required: true},
  creationDate: {type: Date, default: Date.now}
});

userSchema.path('displayName').required(true, 'Display name is required');
userSchema.path('twitter').required(true, 'Twitter id is required');

export default mongoose.model('User', userSchema);