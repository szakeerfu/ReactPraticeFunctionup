import "./portfolio.css";

import IMG1 from "../../assets/nikeshoes Website.png";
import IMG2 from "../../assets/RubyCode Blog Project.png";
import IMG3 from "../../assets/Startup Agency Project.png";
import IMG4 from "../../assets/Kanban Project.png";
import IMG5 from "../../assets/gymportfilo.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: " Nike Website with React.js",
      img: IMG1,
      description:
        "An  Shoes website is a huge interactive platform to present various  Types of shoes for people.",
      technologies: " Javascript | React Js | Redux-toolkit | Frame-motation ",
      link: " https://shopvibemochi.netlify.app/",
      github:
        " https://github.com/szakeerfu/ReactPraticeFunctionup/tree/Nikeshoeswebsite",
    },
    {
      id: 2,
      title: "Kanban - app ",
      img: IMG4,
      description:
        "The  Kanban-app is use tohelp visualize work, limit work-in-progress, and maximize efficiency (or flow). It can help both agile and DevOps teams establish order in their daily work. ",
      technologies: "React | Redux",
      link: "https://thisiskanbanprojects.netlify.app/",
      github: " https://github.com/szakeerfu/kanban-project",
    },
    {
      id: 3,
      title: " Movix-cenimx",
      img: IMG2,
      description:
        "This site is a kind of  Movies platform. You can  Watch the Trailers and cast also.",
      technologies: "React | Redux | scss | Loding - skeleton ",
      link: " https://zakeermoviexcom.netlify.app/",
      github: " https://github.com/szakeerfu/ReactPraticeFunctionup/tree/movix",
    },
    {
      id: 4,
      title: " Twitter-Clone",
      img: IMG3,
      description:
        "This  is Grop project Twitter-clone that we can uplode the twite and like the twite and remove the twite and we can remove the followers also and we can follow and unfollow",
      technologies: "React | Redux |  ",
      link: "  https://twitter-clone-sachin.netlify.app/",
   
    },
    {
      id: 5,
      title: " Gym-Website",
      img: IMG5,
      description:
        "This  is gymwebsite which Represent there workout stuf and good quality of work ",
      technologies: "React | Redux |  ",
      link: "  https://zakeergymwebsitecom.netlify.app/",
      github: "  https://github.com/szakeerfu/gymwebsiteportfilo",
   
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
