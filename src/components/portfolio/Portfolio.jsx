import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/issss.PNG'
import IMG2 from '../../assets/rokk.PNG'
import IMG3 from '../../assets/nni.PNG'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'



const data= [
 {
   id: 1,
   image:IMG1,
  title:'my weather app',
  github:'https://github.com',
  // demo:'htpps://dribbble.com/shots/16673715-Crypto currency-dashboard-and-financial- visualization'

 },
 {
  id: 2,
  image:IMG2,
 title:'Rock Paper Scissors game ',
 github:'https://github.com',
//  demo:'htpps://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'

 },
 {
  id: 3,
  image:IMG3,
 title:'online food store ',
 github:'https://github.com',
//  demo:'htpps://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'

 },
// {
//   id: 4,
//   image:IMG4,
//  title:'Maintaining task and tracking progress ',
//  github:'https://github.com',
// //  demo:'htpps://dribbble.com/shots/16955822-Maintaining-task-and-tracking-progress'

// },
// {

//   id: 5,
//   image:IMG5,
//  title:'Charts templates & infographics in Figma',
//  github:'https://github.com',
// //  demo:'htpps://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'

// },
// {
//   id: 6,
//   image:IMG6,
//  title:'Charts templates & infographics in Figma',
//  github:'https://github.com',
// //  demo:'htpps://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'

// }

]



const Portfolio = () => {
  return <section id='protfolio'>
  <h5>My Recent Work</h5>
  <h2>Portfolio</h2>
  <div className="container protfolio_container">
    {
      data.map(({id,image,title,github,demo}) =>{
        return(
          <article key={id} className="protfolio_items">
      <div className="protfolio_items-image">
        <img src={image} alt={title}></img>
      </div>
      <h3>{title}</h3>
      <div className="protfolio_items-cta">
      <a href={github} className="btn" target="_blank"></a>
      {/* <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a> */}
      </div>
    </article>
   
        )
      })
    }

  </div>
  </section>;
};

export default Portfolio;
