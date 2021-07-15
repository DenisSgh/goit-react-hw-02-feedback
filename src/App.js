import React, { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round(100 / ((good + neutral + bad) / good)) + '%';
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <FeedbackOptions
          title="Please leave feedback"
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

export default App;
