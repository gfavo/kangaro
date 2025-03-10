export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="text-3xl font-bold underline">
        <h2>Hello {props.name} !</h2>
      </div>
    </>
  );
}

type HeaderProps = {
  name: string;
};
