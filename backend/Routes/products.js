const express = require('express');
const Product = require('../models/Products');
const router = express.Router();

// Route pour récupérer tous les produits
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
  }
});

// Route pour ajouter un produit
router.post('/', async (req, res) => {
  const { title, description, price, stock, imageUrl } = req.body;

  // Validation des données
  if (!title || !description || !price || !stock || !imageUrl) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  if (price <= 0 || stock < 0) {
    return res.status(400).json({ message: 'Le prix et le stock doivent être valides' });
  }

  try {
    const newProduct = new Product({ title, description, price, stock, imageUrl });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du produit' });
  }
});

// Route pour modifier un produit
router.put('/:id', async (req, res) => {
  const { title, description, price, stock, imageUrl } = req.body;

  // Validation des données
  if (!title || !description || !price || !stock || !imageUrl) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  if (price <= 0 || stock < 0) {
    return res.status(400).json({ message: 'Le prix et le stock doivent être valides' });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { title, description, price, stock, imageUrl },
      { new: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du produit' });
  }
});

// Route pour supprimer un produit
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression du produit' });
  }
});

module.exports = router;
