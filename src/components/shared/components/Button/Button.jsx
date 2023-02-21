import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ callback, text = '' }) => {
  return (
    <button onClick={callback} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  callback: PropTypes.func,
  text: PropTypes.string,
};
