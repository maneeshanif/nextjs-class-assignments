import React from 'react';
import Link from 'next/link';
import style from '../modules/contact.module.css';

const Contact = () => {
  return (
    <>
    <section className={style.contact}  >
    <h1> this is Contact page</h1>
    <Link href="/" style={{margin:"2rem"}} > back to home 🚑</Link>
    </section>
      
    </>
  )
}

export default Contact
