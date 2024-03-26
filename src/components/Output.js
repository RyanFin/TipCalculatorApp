export default function Output({ billAmount, rating, friendrating }) {
  // derive state to get the calculation of the mean average
  const ratingAveragePercentage = (rating + friendrating) / 2;

  // use the mean average to calculate the total tip amount
  const totalTipAmount = (ratingAveragePercentage / 100) * billAmount;

  return (
    <h3>
      You pay ${billAmount + totalTipAmount} (${billAmount} + ${totalTipAmount})
      tip
    </h3>
  );
}
