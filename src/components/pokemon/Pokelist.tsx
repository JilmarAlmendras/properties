interface PokelistProps {
  photo: string;
  name: string;
  type: string;
}

function Pokelist(props: PokelistProps) {
  const { photo, name, type } = props;

  return (
    <>
      <img src={photo} alt="imagen pokemon" />
      <p>{name}</p>
      <p>{type}</p>
    </>
  );
}

export default Pokelist;
