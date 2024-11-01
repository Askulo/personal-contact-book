const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

// CREATE a new contact
router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

// READ all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// READ a single contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).send();
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE a contact by ID
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!contact) return res.status(404).send();
    res.send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE a contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).send();
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
