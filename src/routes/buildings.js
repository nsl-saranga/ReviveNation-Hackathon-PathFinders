const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
let buildings = require('../data/buildings.json'); // mock static data

// GET all buildings in user's division (with optional filter)
router.get('/', verifyToken, (req, res) => {
  const { role, username } = req.user;
  const { status, division } = req.query;

  let filtered = buildings;

  // Filter by division (only if zonal)
  if (role === 'zonal') {
    filtered = filtered.filter(b => b.division === division);
  }

  // Optional filter by status
  if (status) {
    filtered = filtered.filter(b => b.status === status);
  }

  res.json(filtered);
});

// PUT update a building
router.put('/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const index = buildings.findIndex(b => b.id === id);

  if (index === -1) return res.status(404).json({ error: "Building not found" });

  // Only allow zonal to edit their division
  if (req.user.role === 'zonal' && buildings[index].division !== req.body.division) {
    return res.status(403).json({ error: "Not authorized to edit this building" });
  }

  // Update building data
  buildings[index] = {
    ...buildings[index],
    ...req.body,
    lastUpdatedBy: req.user.username
  };

  res.json({ message: "Building updated", building: buildings[index] });
});

module.exports = router;
