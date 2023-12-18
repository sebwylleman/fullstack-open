const Filter = ({ keyword, handleStringSearch }) => {
  return (
    <div>
      filter shown with
      <input value={keyword} onChange={handleStringSearch} />
    </div>
  );
};

export default Filter;
