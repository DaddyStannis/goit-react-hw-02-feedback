import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ callback, text = '', className = null }) => {
  const fullClassName = !className
    ? styles.button
    : `${styles.button} ${className}`;

  return (
    <button onClick={callback} className={fullClassName}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  callback: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};
