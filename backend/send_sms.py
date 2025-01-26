import os
from dotenv import load_dotenv
from twilio.rest import Client

# Load environment variables from .env file
load_dotenv()

# Retrieve credentials
account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")

# Debugging: Print values to check if they are loaded correctly
print(f"Account SID: {account_sid}")
print(f"Auth Token: {auth_token}")

location = "Leacock RM-XXX"
event_name = "McHacks 12 Check-in"
# Check if credentials are loaded
if not account_sid or not auth_token:
    raise ValueError("Twilio credentials are missing. Check your .env file or environment variables.")

# Initialize Twilio client
client = Client(account_sid, auth_token)

# Send SMS
message = client.messages.create(
    body=f"Congratulations! You're next in line for {event_name}! Head to {location} now and be ready—your turn is coming up!",
    from_="+14786062848",  # Your Twilio phone number
    to="+16138099825"  # The recipient's phone number
)

# Print message SID
print(f"Message sent! SID: {message.sid}")
