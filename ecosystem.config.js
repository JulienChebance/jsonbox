// pm2 config file, see https://pm2.keymetrics.io/docs/usage/application-declaration/
require('dotenv').config();

module.exports = {
	apps : [{
		name: "jsonbox",
		script: "./server.js",
		exp_backoff_restart_delay: 100,
		env: {
			"NODE_ENV": "production",
			"PORT": process.env.PORT,
			"MONGODB_URI": process.env.MONGODB_URI,
		}
	}]
}
