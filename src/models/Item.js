import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Item', ItemSchema);
