import SummaryCardItem from "./SummaryCardItem";

function SummaryCardList({ data }: any) {
  const summaryCardItems: any[] = [
    {
      title: "Índex ultraviolat (UVI)",
      spaceBetwImgVal: false,
      value: "1",
      dataType: "/12",
      bigImg: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      desc: "No disponible",
      bullet: "from-amber-400 to-amber-600",
    },
    {
      title: "Estat del vent",
      spaceBetwImgVal: true,
      value: "17.4",
      dataType: "km/h",
      bigImg: "https://cdn-icons-png.flaticon.com/512/3093/3093317.png",
      desc: "SEE",
      smallImg: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
    },
    {
      title: "Sortida i posta de sol",
      multipleVal: true,
      leftVal: "06:35",
      leftBigImg: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      rightVal: "17:42",
      rightBigImg: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      desc: "11 hores i 7 minuts de llum",
    },
    {
      title: "Humitat",
      spaceBetwImgVal: true,
      value: "23",
      dataType: "%",
      datTypePos: "top",
      bigImg: "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
      desc: "Normal",
      bullet: "from-green-400 to-green-600",
    },
    {
      title: "Visibilitat",
      value: "5.2",
      dataType: "km",
      desc: "Bona visibilitat",
      bullet: "from-green-400 to-green-600",
    },
    {
      title: "Qualitat de l'aire",
      value: "105",
      desc: "No saludable",
      bullet: "from-amber-400 to-amber-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {summaryCardItems.map((item, index) => (
        <SummaryCardItem data={item} key={index} />
      ))}
    </div>
  );
}

export default SummaryCardList;
