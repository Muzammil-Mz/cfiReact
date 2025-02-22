import mongoose from "mongoose";

const MasjidSchema = new mongoose.Schema({
    masjidName: {
      type: String,
      required: true,
      trim: true
    },
    masjidArea: {
      type: String,
      required: true,
      trim: true
    },
    masjidCity: {
      type: String,
      required: true,
      trim: true
    },
    masjidTime: {
      type: String,
      required: true
    },
    contactNumber: {
      type: String,
      trim: true
    },
    website: {
      type: String,
      trim: true
    },
    facilities: [{
      type: String
    }],
      },
      {
    timestamps:true
  });
const masjidModel=mongoose.model("masjid",MasjidSchema,"masjid")
export default masjidModel