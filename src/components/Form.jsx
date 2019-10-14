import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import DataField from './DataField'

const Form = ({nameText, phoneText, photoUrl, onChange, onAdd, onRemove}) => 
  <form className="form">
    <DataField name='name' title='First Name' value={nameText} 
      onChange={onChange} placeholder='Your name'/>
    <DataField name='phone' title='Mobile Phone' value={phoneText} 
      onChange={onChange} placeholder='375-(XX)-XXX-XX-XX'/>
    <DataField name='photo' title='Photo/URL' value={photoUrl} 
      onChange={onChange} placeholder='https://www.nice_photo.ru'/>
    <p className="containerBtn">
      <Button valueBtn="Add" classBtn="classBtn" handler={onAdd}/>
      <Button valueBtn="Delete" classBtn="classBtn" handler={(e) => {
	    e.preventDefault();
      	onRemove(`${nameText}-${phoneText}`)}}/>
    </p>
  </form>

Form.propTypes = {
  nameText: PropTypes.string.isRequired,
  phoneText:PropTypes.string.isRequired,
  photoUrl:PropTypes.string,
  onChange:PropTypes.func,
  onAdd:PropTypes.func,
}

  export default Form