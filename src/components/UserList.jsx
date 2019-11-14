import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem'

const UserList = ({users, onRemove}) => {
  return(
    <ul className="userList">
      {users.map( ({ name, phoneNumber, id}) => 
        <ListItem key={phoneNumber} 
        name={name} 
        phoneNumber={phoneNumber}  
        onRemove={() => onRemove(id)}/>
      )}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.array,
  onRemove: PropTypes.func,
  id: PropTypes.string,
}

export default UserList