export default function Bill({ children, onBillChange }) {
  return (
    <>
      <p>
        {children}
        <form>
          <input
            type="text"
            placeholder="enter bill amount..."
            onChange={(e) => onBillChange(Number(e.target.value))}
          ></input>
        </form>
      </p>
    </>
  );
}
