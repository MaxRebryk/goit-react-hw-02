export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <h2>Good : {good}</h2>
      <h2>Neutral : {neutral}</h2>
      <h2>Bad : {bad}</h2>
      <h2>Total : {total}</h2>
      <h2>Positive : {positive}%</h2>
    </div>
  );
}
