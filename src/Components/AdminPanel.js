import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

function AdminPanel() {
  const [products, setProducts] = useState([]);

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleViewProduct = (product) => {
  };

  const handleDeleteProduct = (productId) => {
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ProductForm onProductCreated={handleProductCreated} />
      <h2>Product List</h2>
      <ProductList products={products} onView={handleViewProduct} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default AdminPanel;