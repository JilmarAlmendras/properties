import Card from "./Card";

interface ListProps {
  digimons: {
    name: string;
    href: string;
    image: string;
  }[];
}

function List(props: ListProps) {
  const { digimons } = props;

  return (
    <div>
      {digimons.map((digimon) => {
        return <Card key={digimon.name} digiInfo={digimon} />;
      })}
    </div>
  );
}

export default List;
