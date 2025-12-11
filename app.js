const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Node.js in a Docker container!');
});

// Start server with friendly logs
app.listen(port, () => {
  console.log('-----------------------------------------');
  console.log(`🚀 Server is running on port ${port}`);
  console.log(`➡️  http://localhost:${port}`);
  console.log('----------------------------------------------');
});

console.log("we are in dev branch");


// Optional: Handle unexpected errors
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled Rejection:', reason);
});
