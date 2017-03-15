import mongoose, { Schema } from 'mongoose'

var tournamentSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  poster: String,
  dates: String,
});

export default mongoose.model('tournament', tournamentSchema);
