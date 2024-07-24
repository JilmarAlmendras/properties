// import { useEffect, useState } from "react";

interface DragoncardProps {
  characterinfo: {
    name: string;
    image: string;
    items: string;
    race: string;
    ki: string;
  };
}

// interface InfoCharacter {
//   photo: string;
//   race: string;
//   originPlanet: string;
// }

function Dragoncard(props: DragoncardProps) {
  const { characterinfo } = props;
  //   const [character, setCharacter] = useState<InfoCharacter>();

  //   useEffect(() => {
  //     fetch(characterinfo.items)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setCharacter({
  //           photo: res.image,
  //           race: res.race,
  //           originPlanet: res.originPlanet,
  //         });
  //       });
  //   }, []);
  return (
    <div className="w-[300px] h-[450px] p-2 bg-blue-400 rounded-lg">
      <img
        className="w-[250px] h-[350px]"
        src={characterinfo.image}
        alt="imagen character"
      />
      <h2 className="text-xl font-bold">{characterinfo.name}</h2>
      <div className="flex gap-5 justify-center pt-4">
        <p className="text-lg">{characterinfo.race}</p>
        <p className="text-lg">{characterinfo.ki}</p>
      </div>
    </div>
  );
}

export default Dragoncard;
