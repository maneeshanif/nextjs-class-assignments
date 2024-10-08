import React from 'react'
import Link from 'next/link'
import style from '../modules/reason.module.css'

const Reason = () => {
  const inlineStyleReason =  {
    margin: "0.8rem",
    padding: "0.5rem 0",
    fontSize: "0.9rem",
    fontWeight: "bold",
    fontFamily: "cursive",
    color: "#FFAD60",
  }




    
  
  return (
    
<>
    <section className={style.reason}>
          <h1> this is nested page aka reason🥲 page</h1>
      <Link href="/"> back to home 🚑</Link>
     </section>
   
      <p style={inlineStyleReason}>As you know, I am participating in Teknofest Hackathon 2024 as a backend developer with my team. For this reason, I have been focusing on learning backend technologies. I have learned a lot, such as how to create HTTP and Express servers, server-side rendering with template engines like EJS, working with modules like fs and path, and using databases like MongoDB. I also now understand how APIs are made using the MVC architecture. Additionally, I am familiar with monolithic architecture, microservices, reverse proxies, load balancers like Nginx, how servers work, and socket.io. That is all that I have learned. I have been struggling with to conquer the backend, and thatswhy I was unable to submit your assignment on time. I am really sorry, sir. </p>

    </>
  )
}

export default Reason
