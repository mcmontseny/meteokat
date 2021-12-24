function SummaryCard({ children, title }: any) {
  return (
    <div className="flex flex-col bg-white rounded-lg w-full p-4 justify-between shadow-md">
    <p className="self-start text-base text-[#858585] font-bold pb-2">
        {title}
    </p>
    {children}
  </div>
  );
}

export default SummaryCard;
