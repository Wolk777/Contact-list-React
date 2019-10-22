import React from 'react';
import PropTypes from 'prop-types';

const DataField = ({title, name, value, onChange, placeholder}) => (
  <p>
    <label 
    	className="form_label" 
    	htmlFor={name}>{title}
    </label>
    <input 
    	type="text" 
    	name={name} 
    	id={name} 
    	value={value} 
    	onChange={onChange} 
    	placeholder={placeholder}
    />
  </p>
)

DataField.propTypes = {
  title: PropTypes.string,
  name:PropTypes.string,
  value:PropTypes.string,
  placeholder:PropTypes.string,
  onChange:PropTypes.func,
}

export default DataField 