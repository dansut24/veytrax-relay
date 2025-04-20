const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send('Connected to Veytrax Relay Server');

  ws.on('message', (msg) => {
    console.log('Message:', msg);
    // Future: implement routing logic
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
