import PropTypes from "prop-types"


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
                <h2>Statistics</h2>
                <ul className="resultList">
                    <li className="resultItem"><p>Good: {good}</p></li>
                    <li className="resultItem"><p>Neutral: {neutral}</p></li>
                    <li className="resultItem"><p>Bad: {bad}</p></li>
                    <li className="resultItem"><p>Total: {total}</p></li>
                    <li className="resultItem"><p>Positive feedback: {positivePercentage}%</p></li>
                </ul>        
        </>

    )
}


export default Statistics



Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}