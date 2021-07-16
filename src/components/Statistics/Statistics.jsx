import PropTypes from 'prop-types';

import Section from '../Section/Section';
import Notification from '../Notification';

import styles from './Statistics.module.css';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  const totalFeedback = total(good, neutral, bad);
  const positiveFeedback = positiveFeedbackPercentage(good, neutral, bad);

  return (
    <Section title={title}>
      {total(good, neutral, bad) > 0 ? (
        <ul>
          <li className={styles.item}>Good: {good}</li>
          <li className={styles.item}>Neutral: {neutral}</li>
          <li className={styles.item}>Bad: {bad}</li>
          <li className={styles.item}>Total: {totalFeedback}</li>
          <li className={styles.item}>Positive feedback: {positiveFeedback}</li>
        </ul>
      ) : (
        <Notification />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
