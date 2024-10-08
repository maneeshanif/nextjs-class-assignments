import React from 'react';
import Link from 'next/link';
import style from '../modules/about.module.css';

const About = () => {
const inlinestyles = 
  {margin:"2rem",padding:"2rem",fontSize:"1.5rem",fontWeight:"bold",fontFamily:"cursive",color:"#87A2FF"}
  


  return (
    <>
    <section className={style.about}  >
    <h1> this is About page</h1>
    <Link href="/" > back to home 🚑</Link>
  
    <Link href="/" > wanna see the reason🥲</Link>

    </section>
    
    <p style={inlinestyles}>
    In Next.js, I learned dynamic route navigation, route grouping (group routes), and nested routes. For APIs, you create a folder named api, and inside it, you write a file named route.ts. I also learned about dynamic rendering, static rendering, and most importantly, ISR (Incremental Static Regeneration/Rendering). I now understand how these rendering methods were done before version 13 using getStaticProps and getServerProps, and how they are handled in version 14. The only concepts I have left to cover are server actions, authentication in Next.js, and working with PostgreSQL using Prisma (ODM), with a little experience in Supabase 🤔. I plan to explore these topics in depth in the coming week, along with the remaining concepts.

Then, I plan to start working on a full-stack e-commerce website for Milestone 3 🎉, inshallah.
    
      </p>
      
    </>
  )
}

export default About
