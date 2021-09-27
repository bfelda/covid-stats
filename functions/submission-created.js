// submission-created.js

// initialize the helper library client
const client = require("twilio")(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

exports.handler = function (event, context, callback) {
	var data = JSON.parse(event.body).payload.data;
	return client.messages.create({
		from: process.env.BOT_NUMBER,
		to: data.phone,
		body:
			data.Country_Region +
			" Covid-19 total confirmed data as of " +
			new Date(data.Last_Update).toLocaleDateString("en-us") +
			".  " +
			data.Country_Region +
			" has " +
			data.Confirmed.toLocaleDateString() +
			" confirmed cases, and " +
			data.Deaths.toLocaleDateString() +
			" Deaths",
	});
};
