import React from 'react';
import PropTypes from 'prop-types';
import DataField from './DataField'

const Form = ({nameText, phoneText, photoUrl, onChange, onAdd, nameValid, photoValid, phoneValid, formValid, messageError}) => 
  <form className="form">
    <p className="massageValid">{formValid ? '' : messageError}</p>
    <DataField 
      name='name'
      valid={nameValid} 
      title='First Name' 
      value={nameText} 
      onChange={onChange}
      placeholder='First Name'/>
    <DataField 
      name='phone'
      valid={phoneValid} 
      title='Mobile Phone' 
      value={phoneText} 
      onChange={onChange}
      placeholder='375-(XX)-XXX-XX-XX'/>
    <DataField 
      name='photo' 
      valid={photoValid}
      title='Photo/URL' 
      value={photoUrl} 
      onChange={onChange}
      placeholder='link to the photo: "https://..."'/>
    <p className="containerBtn">
      <button className="BtnAdd" onClick={onAdd}>Add</button>
    </p>
  </form>

Form.propTypes = {
  nameText: PropTypes.string,
  phoneText:PropTypes.string,
  photoUrl:PropTypes.string,
  nameValid:PropTypes.bool,
  photoValid:PropTypes.bool,
  phoneValid:PropTypes.bool,
  formValid:PropTypes.bool,
  onChange:PropTypes.func,
  onAdd:PropTypes.func,
}

export default Form