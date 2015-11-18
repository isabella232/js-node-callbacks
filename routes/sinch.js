var express = require('express');
var router = express.Router();

var svamlResponse =
	{
		instructions: [
			{
				"name": "Say",
				"text": "Welcome to the hotline",
				"locale": "en-US"
			}
		],
		action: {
			"name": "ConnectConf",
			"conferenceId": "myconference1",
			"cli": "",
			"suppressCallbacks": true
		}
	}

router.post('/', function (req, res, next) {
	//we know its a ICE event since we supress callbacks for other events
	// set the callerid to the calling number
	svamlResponse.action.cli = req.body.cli;
	//send back the response.
	res.json(svamlResponse);
});
module.exports = router;