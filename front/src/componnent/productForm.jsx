import React, { useState, useEffect } from 'react';


const ProductForm = ({ onProductAdded, onProductEdited, editingProduct }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (editingProduct) setFormData(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingProduct
        ? `http://localhost:5000/api/products/${editingProduct._id}`
        : 'http://localhost:5000/api/products';
      const method = editingProduct ? 'put' : 'post';
      const response = await axios[method](url, formData);
      (editingProduct ? onProductEdited : onProductAdded)(response.data);
      setFormData({ title: '', description: '', price: '', stock: '', imageUrl: '' });
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {['title', 'description', 'price', 'stock', 'imageUrl'].map((field) => (
        <div key={field} className="flex flex-col">
          <label htmlFor={field} className="text-sm font-medium text-white">{field}</label>
          <input
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
            className="mt-2 p-3 border border-teal-300 rounded-md focus:ring-teal-500"
            type={field === 'price' || field === 'stock' ? 'number' : 'text'}
          />
        </div>
      ))}
      <button type="submit" className="px-6 py-3 bg-teal-600 text-white rounded-lg">
        {editingProduct ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
