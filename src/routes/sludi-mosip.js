const express = require('express');
const router = express.Router();

router.post('/auth/:mispLK/:authPartnerId/:apiKey', (req, res) => {
  const { authorization } = req.headers;
  const { mispLK, authPartnerId, apiKey } = req.params;
  const {
    individualId,
    request,
    transactionID
  } = req.body;

  // Step 1: Check Authorization Header and API Key
  if (authorization !== 'Bearer MOCK-API-KEY' || apiKey !== 'FAKE-API-KEY') {
    return res.status(401).json({
      status: 'failure',
      transactionID,
      errorCode: 'AUTH-403',
      errorText: 'Invalid API Key or Authorization Header',
      message: 'Unauthorized access'
    });
  }

  // Step 2: Check Credentials
  if (individualId === '1234567890' && request.staticPin === 'test123') {
    return res.status(200).json({
      status: 'success',
      transactionID,
      token: 'mock-jwt-token',
      role: 'zonal-admin',
      individualId,
      message: 'Authentication successful'
    });
  } else {
    return res.status(401).json({
      status: 'failure',
      transactionID,
      errorCode: 'AUTH-001',
      errorText: 'Invalid credentials',
      message: 'Authentication failed'
    });
  }
});

module.exports = router;
