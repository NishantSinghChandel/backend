const scheduleModel = require("../models/schedule");

module.exports = class ScheduleController {
	static async getScheduleById(context, id) {
		try {
			let criteria = { filter: { user_id: id.toString() } };
			let result = await scheduleModel.find(criteria.filter);
			return result;
		} catch (err) {
			throw err;
		}
	}

	static async createSchedule(context, document) {
		try {
			let result = await new scheduleModel(document).save();
			return result;
		} catch (err) {
			throw err;
		}
	}

	static async deleteSchedule(context, id) {
		try {
			let result = await scheduleModel.deleteOne({ _id: id });
			return result;
		} catch (err) {
			throw err;
		}
	}

	static async updateSchedule(context, id, document) {
		try {
			let result = await scheduleModel.findOneAndUpdate(
				{ _id: id },
				{ $set: { ...document } }
			);
			return result;
		} catch (err) {
			throw err;
		}
	}
};
