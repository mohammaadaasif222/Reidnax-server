import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
  name: String,
  type: String,
  count: Number,
  unique_count: Number,
  unique_percent: Number,
  missing_count: Number,
  missing_percent: Number,
  min_str_length: Number,
  max_str_length: Number,
  avg_str_length: Number,
  space_count: Number,
});


const Entry = mongoose.model('Data', dataSchema);

export default Entry;
 