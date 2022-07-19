const Body = () => {
  const quarter =
    "basis-1/4 w-full h-10 flex text-lg text-blue-900 shadow-gray-500 shadow-myInner  justify-center items-center rounded-md font-bold bg-white";
  const half =
    "col-span-2 basis-1/2 w-full h-10 flex text-lg text-blue-900 shadow-gray-500 shadow-myInner  justify-center items-center rounded-md font-bold bg-white";
  return (
    <div className="mt-4 rounded-md bg-blue-900 p-8 grid grid-cols-4 gap-4 justify-between">
      <span className={quarter}>7</span>
      <span className={quarter}>8</span>
      <span className={quarter}>9</span>
      <span className={quarter}>del</span>
      <span className={quarter}>4</span>
      <span className={quarter}>5</span>
      <span className={quarter}>6</span>
      <span className={quarter}>+</span>
      <span className={quarter}>1</span>
      <span className={quarter}>2</span>
      <span className={quarter}>3</span>
      <span className={quarter}>-</span>
      <span className={quarter}>.</span>
      <span className={quarter}>0</span>
      <span className={quarter}>/</span>
      <span className={quarter}>x</span>
      <span className={half}>reset</span>
      <span className={half}>=</span>
    </div>
  );
};

export default Body;
