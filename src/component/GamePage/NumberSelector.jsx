
const NumberSelector = ( selectNum, setSelectNum ) => {
  const numArray = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className="w-full sm:w-auto flex flex-col items-center sm:items-end mt-6 sm:mt-0">
      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
        {numArray.map((value) => (
          <button
            key={value}
            className={`h-12 w-12 sm:h-16 sm:w-16 border border-black text-xl sm:text-2xl font-semibold transition-colors
              ${selectNum === value ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
            onClick={() => setSelectNum(value)}>
            {value}
          </button>
        ))}
      </div>
      <p className="text-lg sm:text-xl font-semibold mt-3">Select Number</p>
    </div>
  );
};

export default NumberSelector;