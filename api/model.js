import mongoose from "mongoose";
const entrySchema = new mongoose.Schema({
  lineChart:Array,
  barChart:Array,
  pieChart:Array,
  scatterChart:Array,
  areaChart:Array,
});


const Entry = mongoose.model('Entry', entrySchema);

export default Entry;
 