import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({users=[]}) => {
  return(
    <div className="UserList">
      { users.length === 0 ?
        <p>User list is empty</p> :
        <ol>
          {users.map(({name, phoneNumber}) =>
            <li key={phoneNumber}>
            {name}, Tel: {phoneNumber}</li>
          )}
        </ol>
      }
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array,
  name:PropTypes.string,
  phoneNumber:PropTypes.number,
}

export default UserList