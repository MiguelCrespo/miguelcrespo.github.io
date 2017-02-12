import React, {Component} from 'react';

export default class HomeCover extends Component {
    render() {
        return <div className="home-cover__content">
            <h1 className="home-cover__content__header">Hi. I'm Miguel!</h1>

            <h2 className="home-cover__content__header-subtitle">Web developer advocate.</h2>

            <p className="home-cover__content__header__content">
                In love with tecnology and a problems solver
            </p>

            <button className="button button-primary button-contact">Contact</button>
        </div>;
    }
}