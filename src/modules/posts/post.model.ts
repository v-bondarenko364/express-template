import mongoose, { Schema, Document } from 'mongoose';
import timestamps from 'mongoose-timestamp';

export interface PostModel extends Document {
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export const PostSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

PostSchema.plugin(timestamps);

export default mongoose.model<PostModel>('Post', PostSchema);
