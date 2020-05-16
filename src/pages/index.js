import React, { useEffect } from "react"
import jump from "jump.js"
import Section from "../components/me/Section"
import HomeCover from "../components/me/HomeCover"
import WhoAmI from "../components/me/WhoAmI"
import Experience from "../components/me/Experience"
import Projects from "../components/me/Projects"
import Footer from "../components/me/Footer"

import "font-awesome/css/font-awesome.css"
import Header from "../components/me/Header"
import SEO from "../components/seo"

import "../index.scss"
import { Helmet } from "react-helmet"

const experiences = [
  {
    id: 5,
    title: "Software Engineer",
    startDate: new Date("07/01/2019"),
    description: "",
    location: {
      title: "Berlin, Germany",
      map_url:
        "https://www.google.com/maps/place/Berlin/@52.5069312,13.1445508,10z",
    },
    company: {
      id: 4,
      name: "Delivery Hero",
      image_url: "./resources/images/domicilios.png",
    },
  },
  {
    id: 1,
    title: "Frontend Tech Lead",
    description: `Developed a completely new web application with the latest technologies to achieve a better user experience for one of the larger colombian tech companies using React, Redux, Javascript, Redis, ES6/7, Prettier and others.`,
    location: {
      title: "Bogotá, Colombia",
      map_url:
        "https://www.google.com/maps/place/Bogota,+Colombia/@4.6486259,-74.2478943,11z",
    },
    company: {
      id: 1,
      name: "Domicilios.com",
      image_url: "./resources/images/domicilios.png",
    },
    awards: [
      {
        title: "Strongest Next Gen Web Engagement",
        description: `My team won the prize "Strongest Next Gen Web
      Engagement" a prize given by Google where many companies from the holding around the world
      participated (DH). After the project was finished the company saw a dramatic growth of the
      CVR in the mobile web.`,
        entity:
          "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
      },
    ],
    startDate: new Date("02/02/2016"),
    endDate: new Date("06/29/2019"),
  },
  {
    id: 2,
    title: "Software Developer",
    description:
      "I developed an application for Android and iOS where Erasmus students can find the best plans around them and enjoy their Erasmus year!" +
      "This apps had: Chat with images, Push Notifications, Socket communication, Auth with Facebook and Twitter, " +
      "Camera, GeoPosition features, Social network(Friends, invitations, privacy, etc), User can view and create his own events and share with the community.",
    location: {
      title: "Santa Marta, Colombia",
      map_url:
        "https://www.google.com/maps/place/Santa+Marta,+Magdalena,+Colombia/@11.2316073,-74.2174166,13z",
    },
    company: {
      id: 2,
      name: "Erasmeet",
      image_url: "./resources/images/erasmeet.jpg",
    },
    startDate: new Date("03/02/2015"),
    endDate: new Date("01/31/2016"),
  },
  {
    id: 3,
    title: "Teaching assistant",
    description:
      "I have worked at Universidad del Magdalena helping student to learn the Object Oriented " +
      "programming (That is teach with Java) and Android programming. This was only for 6 months but " +
      "I was renewed by good performance in the area until December 2015 (The max allowed time for that work)",
    location: {
      title: "Santa Marta, Colombia",
      map_url:
        "https://www.google.com/maps/place/Santa+Marta,+Magdalena,+Colombia/@11.2316073,-74.2174166,13z",
    },
    company: {
      id: 3,
      name: "Universidad del Magdalena",
      image_url: "./resources/images/universidad-del-magdalena.jpg",
    },
    startDate: new Date("02/01/2015"),
    endDate: new Date("12/31/2015"),
  },
]

const projects = [
  {
    id: 7,
    title: "Bookmark It",
    shortDescription:
      "The only extension that lets you create awesome notes on Youtube videos",
    description: `Bookmark It is used by more than 2000 people weekly and it is the only extension that lets you create awesome bookmarks on Youtube videos while showing you the best part of videos so you don't waste your time seeing non-useful information.`,
    tags: ["React", "Typescript", "Webpack", "Firebase", "Chrome", "Firefox"],
    image_url: "./resources/images/projects/bookmark-it/face.png",
    links: [
      {
        id: 1,
        name: "Bookmark it site",
        url: "https://bookmark-it.happydevelopers.co/",
      },
    ],
    images: [
      "./resources/images/projects/bookmark-it/1.jpg",
      "./resources/images/projects/bookmark-it/2.jpg",
      "./resources/images/projects/bookmark-it/3.jpg",
      "./resources/images/projects/bookmark-it/4.jpg",
    ],
    date: new Date("07/02/2017"),
  },
  {
    id: 6,
    title: "Domicilios.com PWA",
    shortDescription: "Progressive Web App developed with performance in mind",
    description: `PWA developed with performance in mind using the latest technologies like React, Webpack, ES8, Redis, Node.js, and others to achieve a great experience in mobile and desktop devices.`,
    tags: ["React", "Redux", "Redis", "Webpack", "Prettier", "Node.js"],
    image_url: "./resources/images/domicilios.com_.png",
    links: [
      {
        id: 1,
        name: "Domicilios.com site",
        url: "https://domicilios.com/bogota",
      },
    ],
    images: [
      "./resources/images/domicilios.com_.png",
      "./resources/images/domicilios.com_ (1).png",
    ],
    date: new Date("07/02/2017"),
  },
  {
    id: 1,
    title: "Former ClickDelivery site",
    shortDescription: "Refactor of the Clickdelivery site",
    description:
      "Migrate the ClickDelivery website that was never meant to be responsive and mobile friendly to a new " +
      "and cool website that work with almost every smartphone in the market.",
    tags: ["javascript", "react", "jquery", "php"],
    image_url: "./resources/images/domicilios-responsive.png",
    links: [
      {
        id: 1,
        name: "Domicilios.com",
        url: "https://domicilios.com/bogota",
      },
    ],
    images: [
      "./resources/images/domicilios-responsive.png",
      "./resources/images/domicilios-responsive-2.png",
    ],
    date: new Date("12/21/2014"),
  },
  {
    id: 2,
    title: "Erasmeet App",
    shortDescription: "Mobile apps",
    description:
      "Mobile app developed for the Erasmeet Limited company using the latest technologies in the market " +
      "(AngularJS, Ionic Framework, Typescript, Gulp, Sass, Socket.IO, SailsJS, NodeJS, Etc).",
    tags: ["javascript", "ionic", "angularjs", "android", "ios"],
    links: [],
    image_url: "./resources/images/erasmeet-home.png",
    images: [
      "./resources/images/erasmeet-home.png",
      "./resources/images/erasmeet-me.png",
    ],
    date: new Date("12/21/2014"),
  },
  {
    id: 3,
    title: "Personal Page",
    shortDescription: "My personal page",
    description:
      "Create my personal page using technologies like React, ES6, SASS, Webpack to make a good personal site" +
      " that in the future I hope is going to serve me as my blog.",
    tags: ["Javascript", "React", "ES6", "SASS"],
    image_url: "./resources/images/this-page.png",
    links: [],
    images: [
      "./resources/images/lighthouse.png",
      "./resources/images/this-page.png",
      "./resources/images/this-page-mobile.png",
    ],
    date: new Date("03/02/2016"),
  },
  {
    id: 4,
    title: "PensionAPP",
    shortDescription: "AngularJS website",
    description:
      "Web application developed where I implemented technologies like PHP (Laravel), CSS (Bootstrap), Javascript(AngularJS, CoffeeScript), GIT, and other. " +
      "The main idea of this initiative is create a space where students can find their new house while they study at my university.",
    tags: ["javascript", "angularjs", "laravel"],
    image_url: "./resources/images/pension-app-home.png",
    links: [
      {
        id: 1,
        name: "Pension Backend",
        url: "https://bitbucket.org/miguelcrespo/pension-api",
      },
      {
        id: 2,
        name: "Pension Frontend",
        url: "https://bitbucket.org/miguelcrespo/pensioncoffee",
      },
    ],
    images: ["./resources/images/pension-app-home.png"],
    date: new Date("12/21/2014"),
  },
  {
    id: 5,
    title: "Modern DataBase",
    shortDescription: "Java ORM for MySQL",
    description:
      "ModerDataBase was a simple ORM for MySQL that I developed long time ago when I was learning Java, because I came from a Laravel background I was looking for an ORM like " +
      "Eloquent and I did not find one so I started to create one until... I found Hibernate :)",
    tags: ["java", "orm"],
    image_url: "./resources/images/modern-database.png",
    links: [
      {
        id: 1,
        name: "Modern Database",
        url: "https://github.com/cresposoft/moderndatabase",
      },
    ],
    images: ["./resources/images/modern-database.png"],
    date: new Date("12/21/2014"),
  },
]

const Home = ({ location }) => {
  useEffect(() => {
    if (location.hash) {
      jump(location.hash)
    }
  })

  return (
    <div>
      <Helmet
        script={[
          {
            type: "text/javascript",
            innerHTML: `
            if (
              !document.documentElement.classList.contains("me")
            ) {
              document.documentElement.classList.add("me");
            }
          `,
          },
        ]}
      />
      <SEO
        absoluteTitle
        title="Miguel Crespo | Software Developer"
        description="Personal Website"
      />
      <Header />
      <Section sectionClass="home-cover" sectionId="home-cover">
        <HomeCover />
      </Section>
      <Section
        sectionClass="section-padding section-angled who-am-i"
        title="Who am I"
        sectionId="who-am-i"
      >
        <WhoAmI />
      </Section>
      <Section
        sectionClass="section-padding section-edges experience"
        title="Experience"
        sectionId="experiences"
      >
        <Experience experiences={experiences} />
      </Section>
      <Section
        sectionClass="section-padding section-angled projects"
        title="Projects"
        sectionId="projects"
      >
        <Projects projects={projects} />
      </Section>
      <Section
        sectionClass="section-padding section-edges contact"
        title="Contact"
        sectionId="contact"
      >
        <ul className="contact-items">
          <li className="contact-items__item">
            <a
              href="https://www.linkedin.com/in/miguelcrespov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li className="contact-items__item">
            <a
              href="https://www.facebook.com/MiguelCrespoV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li className="contact-items__item">
            <a
              href="https://github.com/MiguelCrespo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>
        </ul>

        <div className="contact__email">
          <strong>miguel.crespo6@gmail.com</strong>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

export default Home
