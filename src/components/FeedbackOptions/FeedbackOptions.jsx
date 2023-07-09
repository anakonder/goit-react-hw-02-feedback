
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="btnList">
      {options.map((option) => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;