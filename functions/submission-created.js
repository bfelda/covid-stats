// submission-created.js

// initialize the helper library client
const client = require("twilio")(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

exports.handler = function (event, context, callback) {
	console.log(JSON.parse(event.body));
	// Promise.all(
	// 	// split the string of several messages into single numbers
	// 	// send message to each of them
	// 	event..split(";").map((num) => {
	// 		return client.messages.create({
	// 			from: process.env.BOT_NUMBER,
	// 			to: num,
	// 			body: process.env.BOT_MESSAGE,
	// 		});
	// 	})
	// )
	// 	.then(() => callback(null, { statusCode: 200, body: "Created" }))
	// 	.catch((e) => {
	// 		console.log(e);
	// 		callback(e);
	// 	});
};
