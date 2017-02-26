import React, {Component} from 'react';
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
    title: 'Frontend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae totam nesciunt f' +
    'uga laboriosam, voluptatem ad eius eveniet blanditiis laborum ipsam quam, quod m' +
    'agni aspernatur id sit, reprehenderit ex eligendi veniam.',
    company: {
      id: 1,
      name: 'ClickDelivery',
      image_url: './app/resources/images/me.jpg'
    },
    startDate: new Date('02/02/2016')
  }, {
    id: 2,
    title: 'Software Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae totam nesciunt f' +
    'uga laboriosam, voluptatem ad eius eveniet blanditiis laborum ipsam quam, quod m' +
    'agni aspernatur id sit, reprehenderit ex eligendi veniam.',
    company: {
      id: 2,
      name: 'Erasmeet',
      image_url: './app/resources/images/me.jpg'
    },
    startDate: new Date('03/02/2015'),
    endDate: new Date('01/31/2016')
  }
];

const projects = [
  {
    id: 1,
    title: 'Algo',
    shortDescription: 'My Description',
    description: 'My Description',
    tags: [
      'javascript', 'react'
    ],
    image_url: './app/resources/images/me.jpg',
    date: new Date('12/21/2014')
  }, {
    id: 2,
    title: 'Algo 2',
    shortDescription: 'My Description',
    description: 'My Description',
    tags: [
      'javascript', 'react'
    ],
    image_url: './app/resources/images/me.jpg',
    date: new Date('12/21/2014')
  }, {
    id: 3,
    title: 'Algo 3',
    shortDescription: 'My Description',
    description: 'My Description',
    tags: [
      'javascript', 'react'
    ],
    image_url: './app/resources/images/me.jpg',
    date: new Date('12/21/2014')
  }, {
    id: 4,
    title: 'Algo 4',
    shortDescription: 'My Description',
    description: 'My Description',
    tags: [
      'javascript', 'react'
    ],
    image_url: './app/resources/images/me.jpg',
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
        <HomeCover/>
      </Section>

      <Section
        sectionClass="section-padding section-angled who-am-i"
        title="Who am I" sectionId="who-am-i">
        <WhoAmI/>
      </Section>

      <Section
        sectionClass="section-padding section-edges experience"
        title="Experience" sectionId="experiences">
        <Experience experiences={experiences}/>
      </Section>

      <Section
        sectionClass="section-padding section-angled projects"
        title="Projects" sectionId="projects">
        <Projects projects={projects}/>
      </Section>

      <Section
        sectionClass="section-padding section-edges experience"
        title="About this page" sectionId="about-page">
        <AboutPage/>
      </Section>

      <Section
        sectionClass="section-padding section-edges contact"
        title="Contact" sectionId="contact">

        <ul className="contact-items">
          <li className="contact-items__item">
            <a href="https://www.linkedin.com/in/miguelcrespov/">
              <i className="fa fa-linkedin" aria-hidden="true"/>
            </a>
          </li>
          <li className="contact-items__item">
            <a href="https://www.facebook.com/MiguelCrespoV">
              <i className="fa fa-facebook" aria-hidden="true"/>
            </a>
          </li>
          <li className="contact-items__item">
            <a href="https://github.com/MiguelCrespo">
              <i className="fa fa-github" aria-hidden="true"/>
            </a>
          </li>
        </ul>

        <div className="contact__email">
          <strong>miguel.crespo6@gmail.com</strong>
        </div>
      </Section>

      <Footer/>
    </div>
  }
}