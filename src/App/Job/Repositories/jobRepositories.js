'use strict';
const mongoose = require('../../../Database');
const jobsModel = mongoose.model('Job');

module.exports = {
	async get() {
		return await jobsModel.find();
	},

	async post(data) {
		const post = new jobsModel(data);
		await post
		.save();
		
		return post;
	},
};
