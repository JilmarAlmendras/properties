import { useEffect, useState } from "react";

interface CardProps {
  digiInfo: {
    name: string;
    href: string;
    image: string;
  };
}

interface InfoDigimon {
  level: string;
  type: string;
  description: string;
}

function Card(props: CardProps) {
  const { digiInfo } = props;
  const [digimon, setDigimon] = useState<InfoDigimon>();

  useEffect(() => {
    fetch(digiInfo.href)
      .then((res) => res.json())
      .then((res) => {
        setDigimon({
          level: res.levels[0].level,
          type: res.types[0].type,
          description: res.descriptions[1].description,
        });
      });
  }, []);

  return (
    <div>
      <img src={digiInfo.image} alt="imagen digimon" />
      <p>nombre: {digiInfo.name}</p>
      <p>nivel: {digimon?.level}</p>
      <p> tipo: {digimon?.type}</p>
      <p>descricion: {digimon?.description}</p>
    </div>
  );
}

export default Card;
