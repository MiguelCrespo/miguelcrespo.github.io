import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-loading';

import ProjectShowCase from './ProjectShowCase';

import MoreInfoComponent from './MoreInfoComponent';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInfo: false
    };

  }

  render() {
    return <div className="section-content about-content section-angled-content paragraph-with-image">

      <ProgressiveImage src="./app/resources/images/react.png" className="image-round image-me"
                        alt="About this page image"/>

      <p className="group">
        This page is a <strong>Progressive Web App</strong> that was built with <strong>React</strong>,
        <strong> ES6</strong>, <strong>SASS</strong> and <strong>webpack</strong> to allow me
        have a very simple project where I can
        test easily new technologies and features from web platforms.
      </p>

      <MoreInfoComponent isOpen={this.state.moreInfo}>
        <p className="group">
          This page uses different technologies and approaches to get a good experience to everyone
          from people who has a low internet connection to people who needs assistive technologies
          like a screen reader for example
        </p>

        <ul className="about-content-list">
          <li>
            <strong>Offline first approaching: </strong>
            This page takes advantage of service workers to cache web resources and content, so
            <strong> You can see this page
              even without an internet connection.
            </strong>
          </li>
          <li>
            <strong>
              Built to everyone: </strong>
            and thinking in accessibility (Beta) implementing
            a11y advices so
            <strong> You can access to the content of this page perfectly with a screen reader</strong>.
          </li>
          <li>
            <strong>Can be added to the home screen: </strong>
            This page can be added to the home screen and behaves like a native apps in phones.
          </li>
        </ul>
      </MoreInfoComponent>

      <button className="button button-primary button-primary-inverted button-l button-more" onClick={() => {
        this.setState({moreInfo: !this.state.moreInfo});
      }
      }>
        {this.state.moreInfo ? 'Show less' : 'Show more'}
      </button>

    </div>;
  }
}