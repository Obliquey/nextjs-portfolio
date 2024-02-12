import React from 'react';
import Link from 'next/link';


export default function Home(){
  return (
    <div>
      <p>This will be the home page.</p>
      <Link href={"/about/"}> Go To About </Link>
    </div>
  )
};
