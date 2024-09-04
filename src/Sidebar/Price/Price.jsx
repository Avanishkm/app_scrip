import React, { useState } from "react";
import "./Price.css";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="price-dropdown">
      <button onClick={toggleDropdown} className="dropdown-btn">
        Price {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>

          <Input
            handleChange={handleChange}
            value={50}
            title="$0 - $50"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={100}
            title="$50 - $100"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={150}
            title="$100 - $150"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
          />
        </div>
      )}
    </div>
  );
};

export default Price;





