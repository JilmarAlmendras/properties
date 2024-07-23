import Son from "./Son";

interface FatherProps {
  tittle: string;
  disabled: boolean;
}

function Father(props: FatherProps) {
  const { tittle, disabled } = props;
  return (
    <>
      <button disabled={disabled}>{tittle}</button>
      <Son presentation="I'm only the son" />
    </>
  );
}

export default Father;
