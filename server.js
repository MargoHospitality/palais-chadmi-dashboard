const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// HTTP Basic Auth middleware
const AUTH_USERNAME = process.env.AUTH_USERNAME || 'palais';
const AUTH_PASSWORD = process.env.AUTH_PASSWORD || 'changeme';

app.use(basicAuth({
    users: { [AUTH_USERNAME]: AUTH_PASSWORD },
    challenge: true,
    realm: 'Palais Chadmi Dashboard'
}));

// Serve static files
app.use(express.static(__dirname));

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Palais Chadmi Dashboard running on port ${PORT}`);
    console.log(`🔐 Protected with HTTP Basic Auth (username: ${AUTH_USERNAME})`);
});
