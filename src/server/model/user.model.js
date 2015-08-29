/**
 * Created by Peter on 18/04/15.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  twitter          : {
    id           : {type: String, required: true},
    token        : String,
    displayName  : {type: String, required: true},
    username     : String,
    picture      : String,
    creationDate : {type: Date, default: Date.now},
    updateDate   : {type: Date, default: Date.now}
  }
});

userSchema.path('twitter.displayName').required(true, 'Display name is required');
userSchema.path('twitter.id').required(true, 'Twitter id is required');

export default mongoose.model('User', userSchema);