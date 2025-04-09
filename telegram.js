const express = require('express');
const bodyParser = require('body-parser');  // Use body-parser with `require`

const app = express();
app.use(bodyParser.json());  // Correct usage of `body-parser`

const TOKEN = '7743875186:AAEh9s3E7WCJU7ZW-QLXoNzjakVZM-3KD_s';
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

// Handle incoming updates
app.post('/webhook', async (req, res) => {
  
  console.log(req);
  res.sendStatus(200);  // Respond with HTTP 200 OK
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  // Uncomment to set webhook on startup
  // await setWebhook();
});
