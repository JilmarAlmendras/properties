import { useEffect, useState } from "react";
import Dragonlist from "./Dragonlist";

interface Characters {
  name: string;
  image: string;
  items: string;
}

function Dragondex() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [urlItems] = useState("https://dragonball-api.com/api/characters");

  useEffect(() => {
    fetch(urlItems)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.items);
      });
  }, []);
  return (
    <div>
      <h1>Dragondex</h1>
      <Dragonlist characters={characters} />
    </div>
  );
}

export default Dragondex;
