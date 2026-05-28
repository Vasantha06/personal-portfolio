const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  techStack:   [String],          // ["React", "Node.js", "MongoDB"]
  githubUrl:   String,
  liveUrl:     String,
  imageUrl:    String,
  featured:    { type: Boolean, default: false }
}, { timestamps: true });         // auto adds createdAt, updatedAt

module.exports = mongoose.model('Project', ProjectSchema);