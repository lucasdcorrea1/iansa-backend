const mongoose = require('mongoose');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

const transparencySchema = new mongoose.Schema({
  expirationDate: {
    type: Date,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  name: String,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

transparencySchema.pre('save', function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  };
});

transparencySchema.pre('remove', function () {
  if (process.env.STORAGE_TYPE === 's3') {
    return s3.deleteObject({
      Bucket: process.env.BUCKET_NAME,
      Key: this.key,
    }).promise()
  } else {
    return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'uploads', this.key))
  }
});

module.exports = mongoose.model('transparency', transparencySchema);