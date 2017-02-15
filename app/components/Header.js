import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return <header className="header">
            <div className="header__content">
                <div className="brand" title="Miguel Crespo">
                    <span className="brand-mobile">MC</span>
                    <span className="brand-desktop">Miguel Crespo</span>
                </div>

                <div className="menu">
                    <input type="checkbox" id="menu__togle" className="menu__togle"/>
                    <label className="fa fa-bars menu__togle-label" aria-hidden="true" aria-label="Menu" htmlFor="menu__togle"/>
                    <div className="menu__underlay" role="presentation"></div>
                    <nav className="menu-nav">
                        <ul className="menu-nav__container">
                            <li className="menu-nav__item"><a href="#home">Home</a></li>
                            <li className="menu-nav__item"><a href="#experience">Experience</a></li>
                            <li className="menu-nav__item"><a href="#works">Works</a></li>
                            <li className="menu-nav__item"><a href="#about-this">About this page</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    }
}