import express from 'express';
import Item from '../models/Item.js';
const router = express.Router();

// Home redirect
router.get('/', async (req, res) => {
  return res.redirect('/items');
});

// List
router.get('/items', async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 }).lean();
  res.render('index', { items });
});

// New form
router.get('/items/new', (req, res) => {
  res.render('new');
});

// Create
router.post('/items', async (req, res) => {
  const { title, description } = req.body;
  await Item.create({ title, description });
  res.redirect('/items');
});

// Edit form
router.get('/items/:id/edit', async (req, res) => {
  const item = await Item.findById(req.params.id).lean();
  if (!item) return res.status(404).send('Not found');
  res.render('edit', { item });
});

// Update
router.put('/items/:id', async (req, res) => {
  const { title, description, done } = req.body;
  await Item.findByIdAndUpdate(req.params.id, {
    title,
    description,
    done: done === 'on',
  });
  res.redirect('/items');
});

// Delete
router.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect('/items');
});

export default router;
