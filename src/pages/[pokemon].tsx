import { useRouter } from "next/router";
import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api";
import Head from "next/head";
import Link from "next/link";

export default function PokemonDetailsPage() {
  const router = useRouter();
  const pokemonName = router.query.pokemon?.toString() || "";

  const { data: pokemon, isLoading: pokemonLoading } = useSWR(
    pokemonName,
    PokemonApi.getPokemon
  );

  return (
    <>
      <Head>{pokemon && <title>{`${pokemon.name}`} Details</title>}</Head>
      <div className="flex flex-col align-middle items-center">
        <p>
          <Link href="/" className="link">
            ← Back
          </Link>
        </p>
        {pokemonLoading}
        {pokemon && pokemon.name}
      </div>
    </>
  );
}
