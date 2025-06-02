export default function Search({ formChangeHandler }) {
  return (
    <input
      onChange={formChangeHandler}
      type="text"
      name="search"
      placeholder="Search food..."
    />
  );
}
