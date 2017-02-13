import React, { Component } from 'react';

import Section from './Section';
import HomeCover from './HomeCover';
import WhoAmI from './WhoAmI';

export default class Home extends Component {
    render() {
        return <div>
            <Section sectionClass="home-cover">
                <HomeCover/>
            </Section>

            <Section sectionClass="who-am-i" title="Who am I">
                <WhoAmI/>
            </Section>
        </div>
    }
}