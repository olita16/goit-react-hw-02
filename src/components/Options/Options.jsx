import React from "react";
import css from "./Options.module.css";

const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  onResetFeedback,
  totalFeedback,
}) => {
  return (
    <div>
      {Object.keys(options).map((option) => (
        <button
          className={css.feedbackButton}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}{" "}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button className={css.feedbackButton} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default FeedbackOptions;
