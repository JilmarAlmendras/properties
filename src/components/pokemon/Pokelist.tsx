import Pokecard from "./Pokecard";

interface PokelistProps {
  pokemons: {
    name: string;
    url: string;
  }[];
}

function Pokelist(props: PokelistProps) {
  const { pokemons } = props;

  return (
    <div>
      {pokemons.map((pokemon) => {
        return <Pokecard key={pokemon.name} pokeinfo={pokemon} />;
      })}
    </div>
  );
}

export default Pokelist;
