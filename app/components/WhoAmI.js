import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-loading';

import MoreInfoComponent from './MoreInfoComponent';
import SkillBar from './SkillBar';

export default class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInfo: false
    };

  }

  render() {
    return <div className="section-content section-angled-content paragraph-with-image who-am-i-content">
      <ProgressiveImage src="./app/resources/images/me.jpg" className="image-round"/>

      <p>
        Hi. I’m Miguel a Software developer from Colombia who loves programming and solve problems.
        In constant competition to improve myself.
      </p>

      <MoreInfoComponent isOpen={this.state.moreInfo}>
        <p className="group">
          I have solid foundations about programming and languages like Javascript (I love Javascript) and its next
          version ES6, rendering performance and in general an advocate of web performance that like to care about every
          single detail.
        </p>

        <h3>Knowledge</h3>
        <ul>
          <li>Javascript (ES6, TypeScript, CoffeeScript)</li>
          <li>React</li>
          <li>AngularJS</li>
          <li>Ionic</li>
          <li>NodeJS</li>
          <li>SASS</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        {/*<SkillBar primaryColor="#f0db4f" accentColor="#ae9a12" title="Javascript" textColor="#fff"
         avoidRun={!this.state.moreInfo}/>
         <SkillBar primaryColor="red" accentColor="blue" title="React" textColor="#fff" avoidRun={!this.state.moreInfo}/>
         <SkillBar primaryColor="red" accentColor="blue" title="AngularJS" textColor="#fff" avoidRun={!this.state.moreInfo}/>
         <SkillBar primaryColor="red" accentColor="blue" title="Ionic" textColor="#fff" avoidRun={!this.state.moreInfo}/>
         <SkillBar primaryColor="red" accentColor="blue" title="NodeJS" textColor="#fff" avoidRun={!this.state.moreInfo}/>
         <SkillBar primaryColor="red" accentColor="blue" title="PHP" textColor="#fff" avoidRun={!this.state.moreInfo}/>
         <SkillBar primaryColor="red" accentColor="blue" title="Laravel" textColor="#fff" avoidRun={!this.state.moreInfo}/>
         <SkillBar primaryColor="red" accentColor="blue" title="MySQL" textColor="#fff" avoidRun={!this.state.moreInfo}/>
         <SkillBar primaryColor="red" accentColor="blue" title="MongoDB" textColor="#fff" avoidRun={!this.state.moreInfo}/>
         */}
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