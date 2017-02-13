import React, {Component} from 'react';

export default class WhoAmI extends Component {
    render() {
        return <div className="section-content who-am-i-content">
            <img className="image-round image-me" src="./app/resources/images/me.jpg" alt=""/>

            <p className="about-me group">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae totam nesciunt fuga laboriosam, voluptatem ad eius eveniet blanditiis laborum ipsam quam, quod magni aspernatur id sit, reprehenderit ex eligendi veniam.
            </p>
        </div>;
    }
}