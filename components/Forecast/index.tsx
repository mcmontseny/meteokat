function Forecast({ children, title, btnName }: any) {
  return (
    <div className="flex flex-col mb-0 justify-between">
      <div className="flex flex-col">
        <p className="text-xl font-bold flex-1 mb-4">{title}</p>
      </div>
      <div className="flex flex-col justify-between rounded-lg mb-4 p-4 shadow-md bg-white h-full">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 mb-4 sm:mb-6">
          {children}
        </div>
        <div className="flex flex-col flex-1 justify-end">
          <div className="w-full sm:w-2/3 sm:self-center bg-[#858585]/10 rounded-lg text-center py-1 shadow-md">
            <p className="text-base font-bold text-black">{btnName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
