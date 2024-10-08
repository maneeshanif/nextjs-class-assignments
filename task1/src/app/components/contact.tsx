import React from "react";
import Link from "next/link";
import style from "../modules/contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={style.contact}>
        <h1> this is Contact page</h1>
        <Link href="/" style={{ margin: "1rem" }}>
          {" "}
          back to home 🚑
        </Link>
      </section>

      <Link
        href="https://manees-portfolio.netlify.app/"
        style={{ padding: "2rem" }}
      >
        <p>For contact plese vists my another portfolio I made a month ago</p>
      </Link>
    </>
  );
};

export default Contact;
