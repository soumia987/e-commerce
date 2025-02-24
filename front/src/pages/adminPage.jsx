import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from '../Components/ProductForm';
import ProductList from '../Components/ProductList';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Ajouter un produit
  const handleProductAdded = async (newProduct) => {
    try {
      const response = await axios.post('http://localhost:5000/api/products', newProduct);
      setProducts([response.data, ...products]); // Ajouter le nouveau produit au début de la liste
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Modifier un produit
  const handleProductEdited = async (updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/products/${updatedProduct._id}`, updatedProduct);
      setProducts(products.map((product) => product._id === updatedProduct._id ? response.data : product));
      setEditingProduct(null); // Réinitialiser l'édition après mise à jour
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  // Supprimer un produit
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId)); // Filtrer le produit supprimé
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 via-gray-900 to-black overflow-x-hidden">
      <div className="flex-grow">
        {/* Admin Header */}
        <header className="text-center py-6">
          <h1 className="text-5xl font-extrabold text-gray-100">Admin Dashboard</h1>
          <p className="text-lg text-gray-400 mt-2">Manage your store's products with ease</p>
        </header>

        {/* Product Form Section */}
        <main className="flex-grow">
          <section className="bg-gray-800 p-8 max-w-4xl mx-auto rounded-xl shadow-xl border-2 border-teal-700 transition-transform transform hover:scale-105">
            <h2 className="text-4xl font-semibold text-teal-300 mb-4">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <ProductForm
              onProductAdded={handleProductAdded}
              onProductEdited={handleProductEdited}
              editingProduct={editingProduct}
            />
          </section>

          {/* Product List Section */}
          <section className="py-6">
            <h2 className="text-4xl font-semibold text-teal-300 mb-4">Product List</h2>
            <div className="flex flex-wrap gap-4 justify-start w-full">
              <ProductList
                products={products}
                onDeleteProduct={handleDeleteProduct}
                onEditProduct={setEditingProduct} // Définir le produit à éditer
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
