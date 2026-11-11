const mongoose = require('mongoose');

const UserPositionSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
  z: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('UserPosition', UserPositionSchema);