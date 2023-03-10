import Section from './shared/components/Section/Section';
import FeedbackOptions from './modules/FeedbackOptions/FeedbackOptions';
import Statistics from './modules/Statistics/Statistics';
import Notification from './shared/components/Notification/Notification';
import { Component } from 'react';
import { Fragment } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = btnKey => {
    const normalizedButtonKey = btnKey.toLowerCase();
    this.setState({
      [normalizedButtonKey]: this.state[normalizedButtonKey] + 1,
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            text="Lorem ipsum"
            keys={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              goodScore={good}
              neutralScore={neutral}
              badScore={bad}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
