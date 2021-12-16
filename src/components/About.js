import React from "react";
import forest from "../assets/images/forest.avif";
import bartomeuPhoto from "../assets/images/bartomeu.png";

export default function About() {
  return (
    <main className='relative'>
      <img src={forest} alt='forest' className='absolute w-full' />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img
            src={bartomeuPhoto}
            alt='bartomeuPhoto'
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-white mb-4'>
              Hola, soy Bartomeu.
            </h1>
            <div className='prose lg:prose-xl text-white'>
              Tengo 21 años. Me gusta la programación tanto web usando React y
              móvil usando Flutter. También tengo experiencia con .NET, SQL,
              Firebase y varias tecnologías más que pueden ver en mi perfil de
              LinkedIn.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
