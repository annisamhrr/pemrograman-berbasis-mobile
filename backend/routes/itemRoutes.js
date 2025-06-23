const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET semua barang
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST tambah barang
router.post('/', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

// PUT edit barang
router.put('/:id', async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE hapus barang
router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
