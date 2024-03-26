import { useState } from "react";
import Bill from "./components/Bill";
import Service from "./components/Service";
import Output from "./components/Output";

export default function App() {
  // bill amount state has to be shared amongst other components
  // must 'lift up' state
  const [billAmount, setBillAmount] = useState(0);

  // rating of the service must be lifted up to parent component
  const [rating, setRating] = useState(10);

  const [friendRating, setFriendRating] = useState(10);

  function handleBillChange(b) {
    setBillAmount(b);
  }

  function handleRatingSelection(r) {
    setRating(r);
  }

  function handleFriendRatingSelection(r) {
    setFriendRating(r);
  }

  return (
    <>
      <h1>Tip Calculator App</h1>
      <Bill onBillChange={handleBillChange}>How much was the bill?</Bill>
      <Service onRatingSelection={handleRatingSelection}>
        How did you like the service?
      </Service>
      <Service
        onFriendRatingSelection={handleFriendRatingSelection}
        friend={true}
      >
        How did your friend like the service?
      </Service>
      <Output
        billAmount={billAmount}
        rating={rating}
        friendrating={friendRating}
      />
    </>
  );
}
