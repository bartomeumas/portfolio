import React from "react";
import image from "../assets/images/forest.avif";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='Forest image'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <p>
          <h1 className='text-6xl text-white font-bold cursive leading-none  lg:leading-snug home-name'>
            Hi, I'm Bartomeu.
          </h1>
          <br></br>
          <h1 className='text-6xl text-white font-bold cursive leading-none  lg:leading-snug home-name'>
            Hola, soy Bartomeu.
          </h1>
        </p>
      </section>
    </main>
  );
}
