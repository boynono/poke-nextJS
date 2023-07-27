import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import usePokemon from "@/hooks/usePokemon";

export default function PokemonDetailsPage() {
  const router = useRouter();
  const pokemonName = router.query.pokemon?.toString() || "";

  const { pokemon, pokemonLoading } = usePokemon(pokemonName);

  return (
    <>
      <Head>{pokemon && <title>{`${pokemon.name}`} Details</title>}</Head>
      <div className='flex flex-col align-middle items-center'>
        <p>
          <Link href='/' className='link'>
            ← Back
          </Link>
        </p>
        {pokemonLoading}
        {pokemon === null && <p>pokemon not found</p>}
        {pokemon && (
          <>
            <h1 className='text-capitalize'> {pokemon.name}</h1>
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=''
              width={400}
              height={400}
            />
            <div className='d-inline-block mt-2'>
              <div>
                Types: {pokemon.types.map((type) => type.type.name).join(", ")}
              </div>
              <div>height : {pokemon.height * 10} cm</div>
              <div>weight : {pokemon.weight * 0.1} kg</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
