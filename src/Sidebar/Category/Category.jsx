import React, { useState } from 'react';
import "./Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-dropdown">
      <button onClick={toggleDropdown} className="dropdown-btn">
        Category {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <label className="sidebar-label-container">
            <input 
              onChange={handleChange} 
              type="checkbox" 
              value="" 
              name="category" 
            />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="category"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="category"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="category"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="category"
          />
        </div>
      )}
    </div>
  );
}

export default Category;



