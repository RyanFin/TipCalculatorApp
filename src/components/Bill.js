export default function Bill({ children, onBillChange }) {
  return (
    <>
      <div>
        <label>{children} </label>
        <input
          type="text"
          placeholder="enter bill amount..."
          onChange={(e) => onBillChange(Number(e.target.value))}
        ></input>
      </div>
    </>
  );
}
