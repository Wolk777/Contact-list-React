import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, phoneNumber, onRemove }) => (
	<li>
		<i className="fas fa-user-secret"></i>
		<span> {name}, Tel: {phoneNumber}</span>
		<i className="fas fa-times" onClick={onRemove}/>
	</li>
)

ListItem.propTypes = {
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  id: PropTypes.string,
  onRemove: PropTypes.func,
}

export default ListItem;