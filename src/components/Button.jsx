import React from 'react';
import PropTypes from 'prop-types';

const Button = ({valueBtn='button', classBtn='classBtn', handler=f=>f} ) => (
  <button className={classBtn} onClick={handler}>{valueBtn}</button>
)

Button.propTypes = {
	handler:PropTypes.func,
	valueBtn:PropTypes.string,
	classBtn:PropTypes.string,
}

export default Button
