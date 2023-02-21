import styles from './statistics.module.css';
import { Component } from 'react';
import StatItem from './StatItem/StatItem';

class Statistics extends Component {
  render() {
    const { goodScore, neutralScore, badScore } = this.props;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <ul>
        <StatItem prefix={'Good'} score={goodScore} />
        <StatItem prefix={'Neutral'} score={neutralScore} />
        <StatItem prefix={'Bad'} score={badScore} />
        <StatItem prefix={'Total'} score={total} />
        <StatItem
          prefix={'Positive feedback'}
          score={positivePercentage}
          suffix="%"
        />
      </ul>
    );
  }

  countPositiveFeedbackPercentage() {
    const { goodScore } = this.props;
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    return Math.round((100 / total) * goodScore);
  }

  countTotalFeedback() {
    const { goodScore, neutralScore, badScore } = this.props;
    return goodScore + neutralScore + badScore;
  }
}

export default Statistics;
