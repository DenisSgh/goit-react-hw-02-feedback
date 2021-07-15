import Section from '../Section';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ title, options, onLeaveFeedback }) => {
  return (
    <Section title={title}>
      <ul className={styles.list}>
        {options.map(option => {
          return (
            <li>
              <button
                type="button"
                key={option}
                className={styles.button}
                onClick={() => onLeaveFeedback(option)}
              >
                {option[0].toUpperCase() + option.slice(1)}
              </button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default FeedbackOptions;
