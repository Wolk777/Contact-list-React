import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'

const SearchField = ({onChange=f=>f, onSearch=f=>f , foundUsers=[], searchText='', onRemove=f=>f}) => {
  return(
    <div className="containerSearch">
      <input type="text" name='search' className="inputSearch" onChange={onChange} 
        value={searchText} placeholder='Enter name to search'/>
      <Button valueBtn="Search" classBtn="classBtnSearch"  handler={onSearch}/>
      <div>
        {foundUsers.length !== 0 &&
          foundUsers.map(({name, phoneNumber, id}) =>
            <p key={id}>{name}, Tel: {phoneNumber}<span onClick={() => onRemove(id)}>&times;</span></p>)}
      </div>
    </div>
  ); 
}

SearchField.propTypes = {
  onChange: PropTypes.func,
  onSearch:PropTypes.func,
  onRemove:PropTypes.func,
  searchText:PropTypes.string,
  foundUsers:PropTypes.array,
}

export default SearchField