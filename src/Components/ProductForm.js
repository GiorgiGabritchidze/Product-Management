import React, { useState } from 'react';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState(getProductsFromLocalStorage());

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!productName.trim()) return; 

    const newProduct = {
      id: Date.now(),
      name: productName.trim(),
    };

    
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    addProductToLocalStorage(newProduct);

    
    setProductName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={handleInputChange}
          placeholder="Enter product name"
        />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};


const addProductToLocalStorage = (product) => {
  const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
  const updatedProducts = [...existingProducts, product];
  localStorage.setItem('products', JSON.stringify(updatedProducts));
};


const getProductsFromLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  return products;
};

export default ProductForm;