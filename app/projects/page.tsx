import React from 'react';
import Link from 'next/link';
import Projects from '../components/Projects';


export default function ProjectsPage(){
  return (
    <div className='flex flex-row place-content-center mt-50 text-white gap-36'>
      <Projects />
    </div>
  )
};
