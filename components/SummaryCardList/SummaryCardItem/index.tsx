function SummaryCardItem({ data }: any) {
  const {
    title,
    value,
    dataType,
    datTypePos,
    bigImg,
    desc,
    bullet,
    smallImg,
    multipleVal,
    leftVal,
    leftBigImg,
    rightVal,
    rightBigImg,
    spaceBetwImgVal,
  } = data;

  return (
    <div className="flex flex-col bg-white rounded-lg w-full p-4 justify-between shadow-md">
      <p className="self-start text-base text-[#858585] font-bold pb-2">
        {title}
      </p>
      <div className="flex flex-row pb-2">
        {!multipleVal ? (
          <>
            {bigImg && <img className="w-10 h-10 self-end" src={bigImg} />}
            <p
              className={`${bigImg ? "pl-4" : ""} ${
                spaceBetwImgVal ? "pr-2" : ""
              } self-end text-4xl text-black`}
            >
              {value}
            </p>
            {dataType && (
              <p
                className={`${
                  datTypePos === "top" ? "self-top" : "self-end"
                } text-xl text-[#858585]`}
              >
                {dataType}
              </p>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-row mr-2">
              <img className="w-10 h-10" src={leftBigImg} />
              <div className="flex flex-col ml-2 self-center">
                <p className="text-black font-bold">{leftVal}</p>
              </div>
            </div>
            <div className="flex flex-row">
              <img className="w-10 h-10" src={rightBigImg} />
              <div className="flex flex-col ml-2 self-center">
                <p className="text-black font-bold">{rightVal}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={`flex flex-row ${bullet ? "items-center" : ""}`}>
        {bullet && (
          <div
            className={`h-3 w-3 bg-gradient-to-r ${bullet} rounded-full mr-2`}
          ></div>
        )}
        {smallImg && <img className="h-5 mr-2 self-end" src={smallImg} />}
        <p className="text-base text-[#858585] self-end">{desc}</p>
      </div>
    </div>
  );
}

export default SummaryCardItem;
