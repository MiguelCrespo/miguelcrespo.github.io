import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-loading';

export default class WhoAmI extends Component {
  render() {
    return <div className="section-content section-angled-content paragraph-with-image who-am-i-content">
      <ProgressiveImage src="./app/resources/images/me.jpg" className="image-round"/>

      <p className="group">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae totam nesciunt fuga laboriosam, voluptatem ad
        eius eveniet blanditiis laborum ipsam quam, quod magni aspernatur id sit, reprehenderit ex eligendi veniam.
      </p>
    </div>;
  }
}