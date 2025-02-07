
import "./NumSelector.css";

const NumberSelector = ({selectNum, setSelectNum}) => {
  const numArray = [1, 2, 3, 4, 5, 6];
  

  return (
    <div className="num-selector">
      <div className="container">
        {numArray.map((value) => (
          <button
            key={value}
            className={selectNum === value ? "selected" : ""}
            onClick={() => setSelectNum(value)}>
            {value}
          </button>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;
