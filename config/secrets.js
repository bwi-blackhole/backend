module.exports = {
	jwtSecret: process.env.JWT_SECRET || 'stop haxing my password',
	twilioApiKey: process.env.TWILIO_API_KEY || 'key here'
}
