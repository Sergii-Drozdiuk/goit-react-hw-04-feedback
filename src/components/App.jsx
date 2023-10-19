import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = [
    { text: 'good', color: 'rgb(163 230 53)' },
    { text: 'neutral', color: 'rgb(250 204 21)' },
    { text: 'bad', color: 'rgb(248 113 113)' },
  ];
  const title = 'Please leave feedback';
  const notificationText = 'There is no feedback';

  const onChangeFeedback = key => {
    switch (key) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title={title}>
        <FeedbackOptions buttons={buttons} onChangeFeedback={onChangeFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}
          notificationText={notificationText}
        />
      </Section>
    </>
  );
};
