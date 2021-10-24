import "./Header.css";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useState } from "react";

function valuetext(value) {
  return `${value}`;
}
function Header({ categoryList, onChangeCategory, onChangeSlider }) {
  const [value, setValue] = useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChangeSlider(newValue);
  };

  return (
    <nav className="product-filter">
      <h1>Shop</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={(e) => onChangeCategory(e.target.value)}>
            <option value="Categories">Categories</option>
            {categoryList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
        <Box sx={{ width: 200, margin: 2 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={1000}
          />
        </Box>
      </div>
    </nav>
  );
}

export default Header;
