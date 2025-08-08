const express = require('express');
const axios = require('axios');
const router = express.Router();

const NDX_URL = process.env.NDX_URL; // use env variable

// Example: GET /ndx/assets/colombo
router.get('/assets/:zone', async (req, res) => {
  const zone = req.params.zone;
  
  try {
    const response = await axios.get(`https://32f15959-72d1-4702-809f-3d19137913c7.mock.pstmn.io/ndx/assets/${zone}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch NDX data' });
  }
});

module.exports = router;
