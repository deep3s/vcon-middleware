const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MAPPLS_API_URL = 'https://atlas.mappls.com/api/places/search/json';
const ACCESS_TOKEN = 'a80aa7bf-0471-453e-b3b0-9bee38ae301e';

app.get('/api/places/search', async (req, res) => {
    try {
        const { query } = req.query;
        const response = await axios.get(MAPPLS_API_URL, {
            params: { query, region: 'IND' },
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
