import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{
        title,
        date,
        place,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Mis Proyectos</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Estos son algunos de los proyectos en los que he trabajado!
        </h2>
        <section className='grid grid-cols-2 gap-8'></section>
        {projectData &&
          projectData.map((project, index) => (
            <article className='relative rounded-lg shadow-xl bg-green-400 p-16 m-4'>
              <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                <a
                  href={project.link}
                  alt={project.title}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {project.title}
                </a>
              </h3>
              <div className='text-white text-xs space-x-4'>
                <span>
                  <strong className='font-bold'>Terminado el: </strong>
                  {new Date(project.date).toLocaleString()}{" "}
                </span>
                <span>
                  <strong className='font-bold'>Compañia: </strong>
                  {project.place}{" "}
                </span>
                <span>
                  <strong className='font-bold'>Tipo: </strong>
                  {project.projectType}
                </span>
                <p className='my-6 text-lg text-white leading-relaxed'>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-black font-bold hover:underline hover:text-white'>
                  Ver el proyecto{" "}
                  <span role='img' aria-label='right pointer'>
                    👉
                  </span>
                </a>
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}
