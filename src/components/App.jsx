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

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            text="Lorem ipsum"
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

  onLeaveFeedback = event => {
    const normalizedButtonKey = event.target.textContent.toLowerCase();
    this.setState({
      [normalizedButtonKey]: this.state[normalizedButtonKey] + 1,
    });
  };
}

export default App;
