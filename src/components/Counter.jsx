export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p className="counter">
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
