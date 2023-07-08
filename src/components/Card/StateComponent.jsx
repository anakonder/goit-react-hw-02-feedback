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
                    <li className="resultItem">Good: {good}</li>
                 <li className="resultItem">Neutral: {neutral}</li>
                 <li className="resultItem">Bad: {bad}</li>
             </ul>
         </div>
        )
    }
}


export default StateComponent;