import React from 'react';
import Link from 'next/link';
import style from '../modules/services.module.css';

const Services = () => {
  return (
    <>
    <section className={style.services}  >
    <h1> this is services page</h1>
    <Link href="/" style={{margin:"2rem"}} > back to home 🚑</Link>
    </section>
    <div style={{margin:"2rem",padding:"2rem",fontSize:"2rem",fontWeight:"bold",fontFamily:"cursive",color:"#87A2FF"}}>
        <Link href="https://learning-next-js-amber-psi.vercel.app/"> here is my portfolio. i think portfolio almost cover every thing u give in this assignment 😉</Link>
        <Link href="https://hackhaton-fk5x-qkco8gl4l-mohummadanees-projects.vercel.app/"> here is little glance of one of my hackhathon project of resume builder 😉</Link>
    </div>
      
    </>
  )
}

export default Services