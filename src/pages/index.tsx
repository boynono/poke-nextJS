import PokemonEntry from "@/components/PokemonEntry";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Pokemon List</div>
      <Link href='/1'>Bulbasour</Link>
      <PokemonEntry name='bulbasaur' />
    </>
  );
}
