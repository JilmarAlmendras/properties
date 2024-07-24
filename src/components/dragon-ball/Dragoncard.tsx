import { useEffect, useState } from "react";

interface DragoncardProps {
  characterinfo: {
    name: string;
    image: string;
    items: string;
  };
}

interface InfoCharacter {
  photo: string;
  race: string;
  originPlanet: string;
}

function Dragoncard(props: DragoncardProps) {
  const { characterinfo } = props;
  const [character, setCharacter] = useState<InfoCharacter>();

  useEffect(() => {
    fetch(characterinfo.items)
      .then((res) => res.json())
      .then((res) => {
        setCharacter({
          photo: res.image,
          race: res.race,
          originPlanet: res.originPlanet,
        });
      });
  }, []);
  return (
    <div>
      <img src={characterinfo.image} alt="imagen character" />
      <h2>{characterinfo.name}</h2>
      <p>{character?.race}</p>
      <p>{character?.originPlanet}</p>
    </div>
  );
}

export default Dragoncard;
