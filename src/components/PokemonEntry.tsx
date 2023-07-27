import usePokemon from "@/hooks/usePokemon";
import Link from "next/link";
import Image from "next/image";
import style from "@/styles/PokemonEntery.module.css";

export default function PokemonEntry({ name }: { name: string }) {
  const { pokemon, pokemonLoading } = usePokemon(name);
  return (
    <>
      <Link href={"/" + name}>
        <div className='style.entry'>
          {pokemonLoading}
          {pokemon && (
            <>
              <div className={style.card}>
                <h1 className='text-center'>{pokemon.name}</h1>
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt=''
                  width={200}
                  height={200}
                />
                <div className='d-inline-block mt-2'>
                  <div>
                    Types:{" "}
                    {pokemon.types.map((type) => type.type.name).join(", ")}
                  </div>
                  <div>height : {pokemon.height * 10} cm</div>
                  <div>weight : {pokemon.weight * 0.1} kg</div>
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
}
