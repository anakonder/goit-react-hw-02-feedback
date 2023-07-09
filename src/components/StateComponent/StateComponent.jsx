import { Component } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification"





export class StateComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0    
        }
    }
    
    countTotalFeedback() {
        let total = this.state.good + this.state.neutral + this.state.bad
        return total 
    }

    countPositiveFeedbackPercentage() {
        return Math.floor(this.state.good / this.countTotalFeedback() * 100)
    }
    
    handleFeedback = (option) => {
        this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
    }

    render() {
        const options = ["good", "neutral", "bad"];
        const {title} = this.props
        const {good, neutral, bad} = this.state
        return (
            <div className="cardWrap">
                <Section
                    title={title}
                />
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.handleFeedback}
                />
                {good !== 0 || neutral !== 0 || bad !== 0
                    ?
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                    :
                    <Notification message="There is no feedback" />}
                              
            </div>
        )
    }
}




export default StateComponent;