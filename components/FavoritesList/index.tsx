import FavoriteItem from "./FavoriteItem";

function FavoritesList(props: any) {
  let { favoriteLocations } = props;
  favoriteLocations = [];
  return (
    <div className="flex flex-col">
      <span className="text-lg font-bold mb-4 text-[#858585]">
        Llocs preferits
      </span>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {favoriteLocations.length === 0 ? (
          <p className="text-sm">Actualment, no tens cap lloc a preferits.</p>
        ) : (
          favoriteLocations.map((location: any) => <FavoriteItem location={location}/>)
        )}
      </div>
    </div>
  );
}

export default FavoritesList;
