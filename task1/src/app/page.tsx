import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
const inlineStyle = {
  color:"blue",
  // fontSize:"2rem",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  // margin:"4rem",
}

  return (
 <>
 <div className={styles.home}>
 <div className={styles.nav} >
   <Link href="/"  >home</Link>
   <Link href="/about" >about</Link>
   <Link href="/contact" >contact</Link>
   <Link href="/services"  >services</Link>
   </div>
   <div style={inlineStyle}>
    <p>Assalam Alikum, Sir ✋🏻. How are you? I am Anees. One thing You noticed is that this assignment is very basic considering all 800 students. I will explain the reason in my nested route.  </p>
    </div>
  
   </div>
 
 </>
  );
}
