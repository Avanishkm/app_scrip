import React, { useState } from "react";
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="colors-dropdown">
      <button onClick={toggleDropdown} className="dropdown-btn">
        Colors {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test1" />
            <span className="checkmark all"></span>
            All
          </label>

          <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test1"
            color="black"
          />

          <Input
            handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test1"
            color="blue"
          />

          <Input
            handleChange={handleChange}
            value="red"
            title="Red"
            name="test1"
            color="red"
          />

          <Input
            handleChange={handleChange}
            value="green"
            title="Green"
            name="test1"
            color="green"
          />

          <label className="sidebar-label-container">
            <input
              onChange={handleChange}
              type="radio"
              value="white"
              name="test1"
            />
            <span
              className="checkmark"
              style={{ background: "white", border: "2px solid black" }}
            ></span>
            White
          </label>
        </div>
      )}
    </div>
  );
};

export default Colors;




