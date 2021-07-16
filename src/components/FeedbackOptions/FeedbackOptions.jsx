import PropTypes from 'prop-types';
import shortid from 'shortid';

import Section from '../Section';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ title, options, onLeaveFeedback }) => {
  return (
    <Section title={title}>
      <ul className={styles.list}>
        {options.map(option => {
          return (
            <li key={shortid.generate()}>
              <button
                type="button"
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

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
