import React, { Component } from "react";
import Section from "./Description/Description";
import FeedbackOptions from "./Options/Options";
import Statistics from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import css from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      this.setState(JSON.parse(savedFeedback));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem("feedback", JSON.stringify(this.state));
    }
  }

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  handleResetFeedback = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem("feedback");
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
        <Section
          title="Sip Happens Café"
          text="Please leave your feedback about our service by selecting one of the options below."
        >
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleLeaveFeedback}
            onResetFeedback={this.handleResetFeedback}
            totalFeedback={totalFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback yet" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
