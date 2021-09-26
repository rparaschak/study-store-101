import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
  },
});

export const Book = mongoose.model('Book', bookSchema);
