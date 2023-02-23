import styles from './feedback-options.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Button from '../../shared/components/Button/Button';

class FeedbackOptions extends Component {
  handleLeaveFeedback = e => {
    const { onLeaveFeedback } = this.props;
    onLeaveFeedback(e.target.textContent);
  };

  render() {
    const { keys } = this.props;

    const buttons = keys.map(key => (
      <Button callback={this.handleLeaveFeedback} text={key} />
    ));

    return <div className={styles.wrapper}>{buttons}</div>;
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
