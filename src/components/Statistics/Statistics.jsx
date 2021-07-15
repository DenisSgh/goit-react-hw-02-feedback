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
  return (
    <Section title={title}>
      {total(good, neutral, bad) > 0 ? (
        <ul>
          <li className={styles.item}>Good: {good}</li>
          <li className={styles.item}>Neutral: {neutral}</li>
          <li className={styles.item}>Bad: {bad}</li>
          <li className={styles.item}>Total: {total(good, neutral, bad)}</li>
          <li className={styles.item}>
            Positive feedback: {positiveFeedbackPercentage(good, neutral, bad)}
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
};

export default Statistics;
