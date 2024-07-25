import { useEffect, useState } from "react";

interface DetailProps {
  digimonDetail: {
    href: string;
    setSelected: () => void;
  };
}

interface DetailDigimon {
  level: string;
  type: string;
  description: string;
}

function Detail(props: DetailProps) {
  const { digimonDetail } = props;
  const [digimon, setDigimon] = useState<DetailDigimon>();

  useEffect(() => {
    fetch(digimonDetail.href)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>Detail</div>;
}

export default Detail;
