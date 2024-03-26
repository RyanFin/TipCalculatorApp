export default function Service({
  children,
  onRatingSelection,
  friend,
  onFriendRatingSelection,
}) {
  return (
    <>
      <p>{children}</p>
      <form>
        <select
          onChange={(e) => {
            friend
              ? onFriendRatingSelection(Number(e.target.value))
              : onRatingSelection(Number(e.target.value));
          }}
        >
          <option value={10}>It could have been better (10%)</option>
          <option value={20}>It was ok (20%)</option>
          <option value={30}>It was good (30%)</option>
          <option value={40}>It was better (40%)</option>
          <option value={50}>It was amazing! (50%)</option>
          <option value={60}>Absolutely stunning! (60%)</option>
          <option value={70}>Keep the change! (70%)</option>
          <option value={80}>Would buy more! (80%)</option>
          <option value={90}>Absolutely stellar (90%) 🌟</option>
          <option value={100}>I will pay double! (100%)🤑</option>
        </select>
      </form>
    </>
  );
}
