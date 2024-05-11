export default function options({ updateFeedback, setFeedback, total }) {
  const handleFeedback = feedbackType => {
    updateFeedback(feedbackType);
  };
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => handleFeedback('good')}>Good</button>
        </li>
        <li>
          <button onClick={() => handleFeedback('neutral')}>Neutral</button>
        </li>
        <li>
          <button onClick={() => handleFeedback('bad')}>Bad</button>
        </li>
        {total > 0 && (
          <li>
            <button onClick={handleReset}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
}
