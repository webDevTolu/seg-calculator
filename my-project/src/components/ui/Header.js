const Header = () => {
  return (
    <header className="w-1/2 max-w-md flex items-center justify-between">
      <h2>calc</h2>

      <div className="flex gap-x-4 items-end">
        <span className="uppercase text-sm font-bold">theme</span>
        <div className="flex flex-col gap-y-1 w-14">
          <div className="flex justify-between w-full">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="w-full h-5 p-1 bg-blue-900 rounded-full">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
