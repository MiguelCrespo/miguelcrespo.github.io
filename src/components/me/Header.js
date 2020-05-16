import React, { Component } from "react"
import jump from "jump.js"

export default class Header extends Component {
  scrollToComponent(e, componentId) {
    e.preventDefault()
    let toggle

    if (typeof document !== `undefined`)
      toggle = document.getElementById("menu__togle")
    toggle.click()
    jump(componentId)
  }

  render() {
    return (
      <header className="header hidden-print">
        <div className="header__content">
          <div className="brand" title="Miguel Crespo">
            <span className="brand-mobile">MC</span>
            <span className="brand-desktop">Miguel Crespo</span>
          </div>

          <div className="menu">
            <input type="checkbox" id="menu__togle" className="menu__togle" />
            <label
              className="fa fa-bars menu__togle-label"
              aria-hidden="true"
              aria-label="Menu"
              htmlFor="menu__togle"
            />
            <div className="menu__underlay" role="presentation"></div>
            <nav className="menu-nav">
              <ul className="menu-nav__container">
                <li className="menu-nav__item">
                  <a
                    href="#home-cover"
                    onClick={e => {
                      this.scrollToComponent(e, "#home-cover")
                    }}
                  >
                    Home
                  </a>
                </li>

                <li className="menu-nav__item">
                  <a
                    href="#who-am-i"
                    onClick={e => {
                      this.scrollToComponent(e, "#who-am-i")
                    }}
                  >
                    Who am I
                  </a>
                </li>

                <li className="menu-nav__item">
                  <a
                    href="#experiences"
                    onClick={e => {
                      this.scrollToComponent(e, "#experiences")
                    }}
                  >
                    Experience
                  </a>
                </li>

                <li className="menu-nav__item">
                  <a
                    href="#projects"
                    onClick={e => {
                      this.scrollToComponent(e, "#projects")
                    }}
                  >
                    Projects
                  </a>
                </li>

                <li className="menu-nav__item">
                  <a
                    href="#contact"
                    onClick={e => {
                      this.scrollToComponent(e, "#contact")
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
