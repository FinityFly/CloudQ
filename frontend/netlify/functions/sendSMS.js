const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilio = require('twilio');


exports.handler = async (event) => {
    console.warn("HELLOO");
    console.log("HELLLSSDDSS");
    console.log(accountSid);
    const client = twilio(accountSid, authToken);

  try {
    const { phone, message } = JSON.parse(event.body);

    const response = await client.messages.create({
      body: message,
      from: '+14786062848', // Your Twilio number
      to: '+16138099825',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: response.body }),
    };
  } catch (error) {
    console.error("Twilio Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};