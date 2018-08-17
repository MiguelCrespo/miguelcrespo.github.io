import React, { Component } from 'react';
import jump from 'jump.js'

import Section from './Section';
import HomeCover from './HomeCover';
import WhoAmI from './WhoAmI';
import Experience from './Experience';
import Projects from './Projects';
import AboutPage from './AboutPage';
import Footer from './Footer';

const experiences = [
  {
    id: 1,
    title: 'Frontend Tech Lead',
    description: `Develop a completely new web application with the latest technologies to achieve a better user experience for one of the larger colombian tech companies using React, Redux, Javascript, Redis, ES6/7, Prettier and others.`,
    company: {
      id: 1,
      name: 'Domicilios.com',
      image_url: './app/resources/images/domicilios.png'
    },
    awards: [
      {
        title: 'Strongest Next Gen Web Engagement',
        description: `My team won the prize "Strongest Next Gen Web
        Engagement" a prize given by Google where more than 15 companies from the holding around the world
        participated and after the project was finished the company saw a dramatic growth of the
        CVR in the mobile web.`,
        entity: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
      }
    ],
    startDate: new Date('02/02/2016')
  }, {
    id: 2,
    title: 'Software Developer',
    description: 'I developed an application for Android and iOS where Erasmus students can find the best plans around them and enjoy their Erasmus year!' +
      'This apps had: Chat with images, Push Notifications, Socket communication, Auth with Facebook and Twitter, ' +
      'Camera, GeoPosition features, Social network(Friends, invitations, privacy, etc), User can view and create his own events and share with the community.',
    company: {
      id: 2,
      name: 'Erasmeet',
      image_url: './app/resources/images/erasmeet.jpg'
    },
    startDate: new Date('03/02/2015'),
    endDate: new Date('01/31/2016')
  }, {
    id: 3,
    title: 'Teaching assistant',
    description: 'I have worked at Universidad del Magdalena helping student to learn the Object Oriented ' +
      'programming (That is teach with Java) and Android programming. This was only for 6 months but ' +
      'I was renewed by good performance in the area until December 2015 (The max allowed time for that work)',
    company: {
      id: 3,
      name: 'Universidad del Magdalena',
      image_url: './app/resources/images/universidad-del-magdalena.jpg'
    },
    startDate: new Date('02/01/2015'),
    endDate: new Date('12/31/2015')
  }, {
    id: 4,
    title: 'Seminarist',
    description: 'I imparted an one week course (20 Hrs) about Android Programming to enthusiasts student who was interested in this area, since November 30 to December 4 of 2016.',
    company: {
      id: 3,
      name: 'Universidad del Magdalena',
      image_url: './app/resources/images/universidad-del-magdalena.jpg'
    },
    startDate: new Date('11/30/2015'),
    endDate: new Date('12/04/2015')
  }
];

const projects = [
  {
    id: 6,
    title: 'Domicilios.com PWA',
    shortDescription: 'Progressive Web App developed with performance in mind',
    description: `PWA developed with performance in mind using the latest technologies like React, Webpack, ES8, Redis, Node.js, and others to achieve a great experience in mobile and desktop devices.`,
    tags: [
      'React', 'Redux', 'Redis', 'Webpack', 'Prettier', 'Node.js'
    ],
    image_url: './app/resources/images/domicilios.com_bogota.png',
    links: [
      {
        id: 1,
        name: 'Domicilios.com',
        url: 'https://domicilios.com/bogota'
      }
    ],
    images: [
      './app/resources/images/domicilios.com_bogota.png',
      './app/resources/images/domicilios-responsive-2.png'
    ],
    date: new Date('07/02/2017')
  },
  {
    id: 1,
    title: 'Old ClickDelivery site',
    shortDescription: 'Refactor of the Clickdelivery site',
    description: 'Migrate the ClickDelivery website that was never meant to be responsive and mobile friendly to a new ' +
      'and cool website that work with almost every smartphone in the market.',
    tags: [
      'javascript', 'react', 'jquery', 'php'
    ],
    image_url: './app/resources/images/domicilios-responsive.png',
    links: [
      {
        id: 1,
        name: 'Domicilios.com',
        url: 'https://domicilios.com/bogota'
      }
    ],
    images: [
      './app/resources/images/domicilios-responsive.png',
      './app/resources/images/domicilios-responsive-2.png'
    ],
    date: new Date('12/21/2014')
  }, {
    id: 2,
    title: 'Erasmeet App',
    shortDescription: 'Mobile apps',
    description: 'Mobile app developed for the Erasmeet Limited company using the latest technologies in the market ' +
      '(AngularJS, Ionic Framework, Typescript, Gulp, Sass, Socket.IO, SailsJS, NodeJS, Etc).',
    tags: [
      'javascript', 'ionic', 'angularjs', 'android', 'ios'
    ],
    links: [],
    image_url: './app/resources/images/erasmeet-home.png',
    images: [
      './app/resources/images/erasmeet-home.png',
      './app/resources/images/erasmeet-me.png',
    ],
    date: new Date('12/21/2014')
  },
  {
    id: 3,
    title: 'Personal Page',
    shortDescription: 'My personal page',
    description: 'Create my personal page using technologies like React, ES6, SASS, Webpack to make a good personal site' +
      ' that in the future I hope is going to serve me as my blog.',
    tags: [
      'Javascript', 'React', 'ES6', 'SASS'
    ],
    image_url: './app/resources/images/this-page.png',
    links: [],
    images: [
      './app/resources/images/lighthouse.png',
      './app/resources/images/this-page.png',
      './app/resources/images/this-page-mobile.png'
    ],
    date: new Date('03/02/2016')
  },
  {
    id: 4,
    title: 'PensionAPP',
    shortDescription: 'AngularJS website',
    description: 'Web application developed where I implemented technologies like PHP (Laravel), CSS (Bootstrap), Javascript(AngularJS, CoffeeScript), GIT, and other. ' +
      'The main idea of this initiative is create a space where students can find their new house while they study at my university.',
    tags: [
      'javascript', 'angularjs', 'laravel'
    ],
    image_url: './app/resources/images/pension-app-home.png',
    links: [
      {
        id: 1,
        name: 'Pension Backend',
        url: 'https://bitbucket.org/miguelcrespo/pension-api'
      },
      {
        id: 2,
        name: 'Pension Frontend',
        url: 'https://bitbucket.org/miguelcrespo/pensioncoffee'
      },
    ],
    images: [
      './app/resources/images/pension-app-home.png'
    ],
    date: new Date('12/21/2014')
  }, {
    id: 5,
    title: 'Modern DataBase',
    shortDescription: 'Java ORM for MySQL',
    description: 'ModerDataBase was a simple ORM for MySQL that I developed long time ago when I was learning about Java and because I was come from a Laravel background I was looking for a ORM like ' +
      'Eloquent and I did not find one so I started to create one until... I found Hibernate :)',
    tags: [
      'java', 'orm'
    ],
    image_url: './app/resources/images/modern-database.png',
    links: [
      {
        id: 1,
        name: 'Modern Database',
        url: 'https://github.com/cresposoft/moderndatabase'
      }
    ],
    images: [
      './app/resources/images/modern-database.png'
    ],
    date: new Date('12/21/2014')
  }
];

export default class Home extends Component {
  componentDidMount() {
    if (this.props.location.hash) {
      jump(this.props.location.hash);
    }
  }

  render() {
    return <div>
      <Section sectionClass="home-cover" sectionId="home-cover">
        <HomeCover />
      </Section>

      <Section
        sectionClass="section-padding section-angled who-am-i"
        title="Who am I" sectionId="who-am-i">
        <WhoAmI />
      </Section>

      <Section
        sectionClass="section-padding section-edges experience"
        title="Experience" sectionId="experiences">
        <Experience experiences={experiences} />
      </Section>

      <Section
        sectionClass="section-padding section-angled projects"
        title="Projects" sectionId="projects">
        <Projects projects={projects} />
      </Section>

      <Section
        sectionClass="section-padding section-edges experience"
        title="About this page" sectionId="about-page">
        <AboutPage />
      </Section>

      <Section
        sectionClass="section-padding section-edges contact"
        title="Contact" sectionId="contact">

        <ul className="contact-items">
          <li className="contact-items__item">
            <a href="https://www.linkedin.com/in/miguelcrespov/">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li className="contact-items__item">
            <a href="https://www.facebook.com/MiguelCrespoV">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li className="contact-items__item">
            <a href="https://github.com/MiguelCrespo">
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
  }
}