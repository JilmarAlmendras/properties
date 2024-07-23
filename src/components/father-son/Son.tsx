interface SonProps {
  presentation: string;
}

function Son(props: SonProps) {
  const { presentation } = props;
  return (
    <>
      <h1>{presentation}</h1>
    </>
  );
}

export default Son;
