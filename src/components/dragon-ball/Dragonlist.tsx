import Dragoncard from "./Dragoncard";

interface DragonlistProps {
  characters: {
    name: string;
    image: string;
    items: string;
    race: string;
    ki: string;
  }[];
}

function Dragonlist(props: DragonlistProps) {
  const { characters } = props;

  return (
    <div className="flex flex-wrap gap-2">
      {characters.map((character) => {
        return <Dragoncard key={character.items} characterinfo={character} />;
      })}
    </div>
  );
}

export default Dragonlist;
