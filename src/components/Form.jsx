import React from 'react';
import PropTypes from 'prop-types';
import DataField from './DataField'

const Form = ({nameText, phoneText, photoUrl, onChangeName, onChangePhone, onChangePhoto, onAdd}) => 
  <form className="form">
    <DataField 
      name='name' 
      title='First Name' 
      value={nameText} 
      onChange={onChangeName}
      placeholder='First Name'/>
    <DataField 
      name='phone' 
      title='Mobile Phone' 
      value={phoneText} 
      onChange={onChangePhone}
      placeholder='375-(XX)-XXX-XX-XX'/>
    <DataField 
      name='photo' 
      title='Photo/URL' 
      value={photoUrl} 
      onChange={onChangePhoto}
      placeholder='link to the photo: "https://..."'/>
    <p className="containerBtn">
      <button className="BtnAdd" onClick={onAdd}>Add</button>
    </p>
  </form>

Form.propTypes = {
  nameText: PropTypes.string,
  phoneText:PropTypes.string,
  photoUrl:PropTypes.string,
  onChangeName:PropTypes.func,
  onChangePhone:PropTypes.func,
  onChangePhoto:PropTypes.func,
  onAdd:PropTypes.func,
}

export default Form