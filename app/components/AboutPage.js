import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-loading';

import ProjectShowCase from './ProjectShowCase';

export default class AboutPage extends Component {
  render() {
    return <div className="section-content about-content section-angled-content paragraph-with-image">

      <ProgressiveImage src="./app/resources/images/react.png" className="image-round image-me"
                        alt="About this page image"/>

      <p className="about-me group">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae totam nesciunt
        fuga laboriosam, voluptatem ad eius eveniet blanditiis laborum ipsam quam, quod
        magni aspernatur id sit, reprehenderit ex eligendi veniam.
      </p>

      <button className="button button-primary button-primary-inverted button-l button-more">Show more</button>

    </div>;
  }
}