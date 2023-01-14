import IMG1 from "../../images/port1.png"
import IMG2 from "../../images/port2.png"
import IMG3 from "../../images/port3.png"
import IMG4 from "../../images/port4.png"
// import IMG5 from "../../images/portfolio5.png"
// import IMG6 from "../../images/portfolio6.jpg"
import React from 'react'
import"./Portfolio.css"

const data = [
  {
    id:1,
    image:IMG1 ,
    title:"Personal-portfolio ",
    github:"https://github.com/ApekshaChouhan/bookshala.git",
    demo:"https://bookshala.netlify.app",
  },
  {
    id:2,
    image:IMG2 ,
    title:"bookshala",
    github:"https://github.com/ApekshaChouhan/bookshala.git",
    demo:"https://bookshala.netlify.app",

  },
  {
    id:3,
    image:IMG3 ,
    title:"daily-news-station",
    github:"https://github.com/ApekshaChouhan/daily-news-station.git",
    demo:"https://daily-news-station.netlify.app"

  },
 
  {
    id:4,
    image:IMG4 ,
    title:"Replica of Snapx website",
    github:"https://github.com/ApekshaChouhan/bookshala.git",
    demo:"https://bookshala.netlify.app",

  },
  // {
  //   id:5,
  //   image:IMG5 ,
  //   title:"Crypto currency Dashboard & Financial Vizualization",
  //   github:"https://github.com",
  //   demo:"https://dribble.com/shots/16541289-orion-UI-kit-Charts-templates-infographics-in-Figma"

  // },
  // {
  //   id:6,
  //   image:IMG6 ,
  //   title:"Crypto currency Dashboard & Financial Vizualization",
  //   github:"https://github.com",
  //   demo:"https://dribble.com/shots/15887665-orion-UI-kit-Charts-templates-infographics-in-Figma"

  // },
]

const Portfolio = () => {
  return (
    <center>
<section id='Portfolio'>
  <center className="headings4">
  <h5>My Recent Work</h5>
  <h2>Portfolio</h2>
  </center>

  <div className="container  Portfolio_container">
    {
      data.map(({id,image,title,github,demo})=>{
        return(
          
  <article key={id} className='portfolio_item'>
  <div className='portfolio_item-image'>
    <img src={image} alt={title} className="img"/>
    <h3>{title}</h3>
   <div className="portfolio_item-cta">
   <a href={github} className='btn'>Github</a>
    <a href={demo} className='btn btn-primary' target="blank">Live Demo</a>
    </div>
          </div>
</article>
        )
      })
    }
     </div>

</section> 
</center>
 )
}

export default Portfolio
