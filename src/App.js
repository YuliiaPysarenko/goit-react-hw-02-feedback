import {Component} from 'react';
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {

  buttonNames = ['Good', 'Neutral', 'Bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addGood = () => {
    this.setState((prev) => {
      return {
        good: prev.good + 1
      };
    });
  };

  addNeutral = () => {
    this.setState((prev) => {
      return {
        neutral: prev.neutral + 1
      };
    });
  };

  addBad = () => {
    this.setState((prev) => {
      return {
        bad: prev.bad + 1
      };
    });
  };

  onClickFeedback = (e) => {
    switch (e.target.textContent) {
      case "Good":
        this.setState((prev) => ({good: prev.good + 1}));
        break;
 
      case "Neutral":
        this.setState((prev) => ({neutral: prev.neutral + 1}));
        break;
 
        case "Bad":
          this.setState((prev) => ({bad: prev.bad + 1}));
          break;
      
      default:
        console.log("invalid button type");
    }
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    const totalCount = this.countTotalFeedback();
    return !totalCount ? 0 : Math.round((this.state.good / totalCount) * 100);
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.buttonNames} onLeaveFeedback={this.onClickFeedback} />
        </Section>
        
        <Section title="Statistics">
          {!this.countTotalFeedback() ? 
          <Notification message="There is no feedback"></Notification> :
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          }
        </Section>
      </div>
      )
  }
}

export default App;