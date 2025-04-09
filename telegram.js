const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // Built-in in Node 18+, otherwise install it

const app = express();
app.use(bodyParser.json());

const TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

// Set webhook using the Vercel URL dynamically

// Handle incoming updates
app.post('/webhook', async (req, res) => {
  const message = req.body.message;
  console.log('body', req.body);
  if (message && message.text) {
    console.log('Received message:', message.text);  // Log the message content
  } else {
    console.log('No text in the message');
  }

  res.sendStatus(200);  // Respond with HTTP 200 OK
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  // Uncomment to set webhook on startup
  // await setWebhook();
});
