import React from 'react';

function ProductList({ products, onView, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products && products.length > 0 ? (
          products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.image && <img src={product.image} alt={product.name} style={{ width: '100px' }} />}
              </td>
              <td>{product.name}</td>
              <td>{product.description.length > 30 ? product.description.slice(0, 30) + '...' : product.description}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => onView(product)}>View</button>
                <button onClick={() => onDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No products available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProductList;