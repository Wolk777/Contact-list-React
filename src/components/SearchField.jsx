import React from 'react';
import PropTypes from 'prop-types'

const SearchField = ({searchText, users, foundUsers, onChangeSearch, onSearch}) => {
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
      {foundUsers.length !== 0 && foundUsers.map( ({name, phoneNumber, id}) =>
      <p key={id}><i className="fas fa-user"></i> {name}, Tel: {phoneNumber}</p>)}
    </div>
  ); 
}

SearchField.propTypes = {
  searchText:PropTypes.string,
  users:PropTypes.array,
  foundUsers:PropTypes.array,
  onChangeSearch:PropTypes.func,
  onSearch:PropTypes.func,
}

export default SearchField