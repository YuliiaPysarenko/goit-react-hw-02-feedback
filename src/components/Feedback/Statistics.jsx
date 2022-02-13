const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p><b>Total</b>: {total}</p>
        <p><b>Positive Feedback</b>: {positivePercentage}%</p>
    </div>
)

export default Statistics;