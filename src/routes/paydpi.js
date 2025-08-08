const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const txnFilePath = path.join(__dirname, '../mockData/transactions.json');

router.post('/transact', (req, res) => {
  const { buildingId, amount, purpose } = req.body;

  const transaction = {
    id: `TXN-${Date.now()}`,
    buildingId,
    amount,
    purpose,
    status: 'Renovation in Progress',
    date: new Date().toISOString()
  };

  let transactions = [];
  if (fs.existsSync(txnFilePath)) {
    transactions = JSON.parse(fs.readFileSync(txnFilePath));
  }

  transactions.push(transaction);
  fs.writeFileSync(txnFilePath, JSON.stringify(transactions, null, 2));

  res.status(200).json(transaction);
});

module.exports = router;
