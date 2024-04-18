import React, { useState } from 'react';

function CategoryForm() {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
      />
      <button type="submit">Create Category</button>
    </form>
  );
}

export default CategoryForm;