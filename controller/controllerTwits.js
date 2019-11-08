const Twitter = require('twitter');

// let twitter = new Twitter({
// 	consumer_key: process.env.TWITTER_CONSUMER_KEY,
// 	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
// 	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
// 	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });

exports.getTwit = (req, res) => {
	// twitter.get('/statuses/user_timeline.json', { screen_name: 'twitter', count: 5}, function(error, tweets, response) {
	// 	console.log('--------------------response', response);
	// 	if (!error) {
	// 		res.status(200);
	// 	}
	// 	else {
	// 		res.status(500);
	// 	}
	// });
	res.send('ты пидар')

};

