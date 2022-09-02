import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children, click, sty, dataTestId,
}) {
  const color = {
    backgroundColor: '#00DB87',
  };

  return (
    <button
      type="button"
      className={`btn mt-3 fw-bold ${sty}`}
      style={color}
      onClick={click}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  sty: '',
  children: '',
  click: () => {},
  dataTestId: '',
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  click: PropTypes.func,
  sty: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default Button;
