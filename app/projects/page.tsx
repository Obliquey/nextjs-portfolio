import React from 'react';
import Link from 'next/link';
import Projects from '../components/Projects';


export default function ProjectsPage(){
  return (
    <div className='flex flex-ro flex-wrap place-content-center mt-50 text-white gap-20 ml-20 mt-10'>
      <Projects />
    </div>
  )
};
