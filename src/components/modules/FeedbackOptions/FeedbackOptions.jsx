import styles from './feedback-options.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Button from '../../shared/components/Button/Button';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className={styles.wrapper}>
        <Button callback={onLeaveFeedback} text="Good" />
        <Button callback={onLeaveFeedback} text="Neutral" />
        <Button callback={onLeaveFeedback} text="Bad" />
      </div>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
