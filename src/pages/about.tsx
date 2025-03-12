import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { useCounter } from "@/store/store";

export default function About() {
  const { count } = useCounter();
  return (
    <>
    <Header name='Juca Labresa'/>
      <div>
        My happinnes: {count} <Button />
      </div>
    </>
  );
}
