const router = require("express").Router();
const scheduleController = require("../controllers/schedule");

router.get("/user/me/schedule/:id", function(req, res) {
	scheduleController
		.getScheduleById(req.context, req.params.id)
		.then(result => {
			return res.send({ success: true, data: result });
		});
});

router.post("/user/me/schedule", function(req, res) {
	scheduleController.createSchedule(req.context, req.body).then(result => {
		return res.send({ success: true, data: result });
	});
});

router.delete("/user/me/schedule/:id", function(req, res) {
	scheduleController.deleteSchedule(req.context, req.params.id).then(result => {
		return res.send({ success: true, data: result });
	});
});

router.put("/user/me/schedule/:id", function(req, res) {
	scheduleController
		.updateSchedule(req.context, req.params.id, req.body)
		.then(result => {
			return res.send({ success: true, data: result });
		});
});

module.exports = router;
