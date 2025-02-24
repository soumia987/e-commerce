import React from 'react';

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => (
  <div className="flex flex-wrap gap-4">
    {products.map((product) => (
      <div key={product._id} className="w-1/4 p-4 bg-gray-800 rounded-lg shadow-lg">
        <img
          src={product.imageUrl || 'https://via.placeholder.com/200'}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-lg text-teal-300 mt-2">{product.title}</h3>
        <p className="text-gray-300 mt-1">{product.description}</p>
        <p className="text-teal-400 font-bold mt-1">${product.price}</p>
        <p className="text-gray-500 mt-1">Stock: {product.stock}</p>
        <div className="flex justify-between mt-4">
          <button onClick={() => onEditProduct(product)} className="bg-teal-600 text-white px-4 py-1 rounded-md">
            Edit
          </button>
          <button onClick={() => onDeleteProduct(product._id)} className="bg-red-600 text-white px-4 py-1 rounded-md">
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default ProductList;
