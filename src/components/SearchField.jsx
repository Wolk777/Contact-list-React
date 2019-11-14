import React from 'react';
import PropTypes from 'prop-types'

const SearchField = ({searchText, users, foundContacts, isFound, onChangeSearch, onSearch}) => {
  return(
    <div className="containerSearch">
      <div>
        <input 
          type="text" 
          name="search" 
          className="inputSearch"
          value={searchText} 
          onChange={onChangeSearch}
          placeholder="Enter name to search"/>
        <button className="BtnSearch" onClick={onSearch}>Search</button>
      </div>
      {foundContacts.length !== 0 && foundContacts.map( ({name, phoneNumber, id}) =>
      <p key={id} className="foundContacts"><i className="fas fa-user"></i> {name}, Tel: {phoneNumber}</p>)}
      {isFound && <p className="massageNotFound"><i className="fas fa-user-times"></i>Contact not found</p>}
    </div>
  ); 
}

SearchField.propTypes = {
  searchText:PropTypes.string,
  users:PropTypes.array,
  foundContacts:PropTypes.array,
  onChangeSearch:PropTypes.func,
  onSearch:PropTypes.func,
}

export default SearchField