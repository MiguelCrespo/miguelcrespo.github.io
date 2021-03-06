import React, { Component } from "react"

import MoreInfoComponent from "./MoreInfoComponent"

export default class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moreInfo: false,
    }
  }

  render() {
    return (
      <div className="section-content section-angled-content paragraph-with-image who-am-i-content">
        <img src="./resources/images/me.jpg" className="image-round" alt="Me" />
        <p>
          Hi. I’m <strong>Miguel</strong>, a Senior Software Developer from
          Colombia with solid foundations about programming with experience
          building and leading complex and large applications used by millions
          of users monthly. I have more than 3 years of demonstrated experience,
          working with multidisciplinary teams. I'm always trying to improve
          myself, help other people, learn new things and give more than what is
          expected of me.
        </p>

        <MoreInfoComponent isOpen={this.state.moreInfo}>
          <p className="group">
            I have solid foundations about programming and languages like
            Javascript (I love Javascript) and its next version ES6/7/8,
            rendering performance and in general an advocate of web performance
            that like to care about every single detail.
          </p>

          <p className="group">
            I also have about 1-year experience as a technical leader facing
            great challenges, training new members of the team, making sure that
            quality is always part of the process and leading the team based on
            data-driven decisions.
          </p>

          <h3>Knowledge</h3>
          <ul>
            <li>Javascript (ES6, TypeScript, CoffeeScript)</li>
            <li>React</li>
            <li>Webpack</li>
            <li>AngularJS</li>
            <li>Ionic</li>
            <li>NodeJS</li>
            <li>SASS</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </MoreInfoComponent>
        <button
          className="button button-primary button-primary-inverted button-l button-more"
          onClick={() => {
            this.setState({ moreInfo: !this.state.moreInfo })
          }}
        >
          {this.state.moreInfo ? "Show less" : "Show more"}
        </button>
      </div>
    )
  }
}
