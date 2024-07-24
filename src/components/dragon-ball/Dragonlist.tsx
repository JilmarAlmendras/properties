import Dragoncard from "./Dragoncard";

interface DragonlistProps {
  characters: {
    name: string;
    image: string;
    items: string;
  }[];
}

function Dragonlist(props: DragonlistProps) {
  const { characters } = props;

  return (
    <>
      {characters.map((character) => {
        return <Dragoncard key={character.items} characterinfo={character} />;
      })}
    </>
  );
}

export default Dragonlist;
