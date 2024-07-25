import { useEffect, useState } from "react";
import List from "./List";

interface Digimon {
  name: string;
  href: string;
  image: string;
}

function Dex() {
  const [digimons, setDigimons] = useState<Digimon[]>([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    fetch("https://digi-api.com/api/v1/digimon")
      .then((res) => res.json())
      .then((res) => {
        setDigimons(res.content);
      });
  }, []);

  return (
    <div>
      <List digimons={digimons} />
    </div>
  );
}

export default Dex;
