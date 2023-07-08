import { Component } from "react";
import GoodBtn from "components/GoodBtn/GoodBtn";
import NeutralBtn from "components/NeutralBtn/NeutralBtn";
import BadBtn from "components/BadBtn/BadBtn";
import styles from "../GeneralStyles.css"




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
    

    render() {
        const {title, statistic} = this.props
        const {good, neutral, bad} = this.state
        return (
             <div className="cardWrap">
                <h2 className="title">{title}</h2>
             <ul className="btnList">
                 <li className="btnItem">
                        {/* <GoodBtn /> */}
                        <button type="button" onClick={() => 
                            this.setState(
                                {
                                    ...this.state,
                                    good: good + 1
                                })
                        }>Good</button>
                 </li>
                 <li className="btnItem">
                        {/* <NeutralBtn /> */}
                        <button type="button" onClick={() =>
                            this.setState(
                                {
                                    ...this.state,
                                    neutral: neutral + 1
                                })
                        }>Neutral</button>
                 </li>
                 <li className="btnItem">
                        {/* <BadBtn /> */}
                        <button type="button" onClick={() =>
                            this.setState(
                                {
                                    ...this.state,
                                    bad: bad + 1
                                })
                        }>Bad</button>
                 </li>
             </ul>
                <h2>{statistic}</h2>
             <ul className="resultList">
                    <li className="resultItem"><p>Good: {good}</p></li>
                    <li className="resultItem"><p>Neutral: {neutral}</p></li>
                    <li className="resultItem"><p>Bad: {bad}</p></li>
                    <li className="resultItem"><p>Total: {this.countTotalFeedback()}</p></li>
                    <li className="resultItem"><p>Positive fitback: {this.countPositiveFeedbackPercentage()}%</p></li>
             </ul>
         </div>
        )
    }
}




export default StateComponent;