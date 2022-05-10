import './filter.css';

const Filter = () => {
  return (
    <div className="filter d-flex align-items-center">
      <div className="filterText">
        Or filter
      </div>
      <div className="btn-group">
        <button type='button'>Brazil</button>
        <button type='button'>Kenya</button>
        <button type='button'>Columbia</button>
      </div>
    </div>
  );
};

export default Filter;
