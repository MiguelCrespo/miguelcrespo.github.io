import React, {Component} from 'react';

export default class HomeCover extends Component {
    render() {
        return <div className="home-cover__content">

            <h1 className="home-cover__content__header">
                Frontend Developer
            </h1>

            <span className="home-cover__content__header__content">
                Hello, I'm Miguel a software developer in love with technology
            </span>

            <button className="button button-primary button-contact button-xl">Contact</button>
        </div>;
    }
}