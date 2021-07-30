const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = Schema(
	{
		allDay: Boolean,
		end: Date,
		start: Date,
		title: String,
		user_id: String
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at"
		}
	}
);

const schedules = mongoose.model("schedules", scheduleSchema);
module.exports = schedules;
