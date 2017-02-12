import React, { Component } from 'react';

import Section from './Section';
import HomeCover from './HomeCover';

export default class Home extends Component {
    render() {
        return <div>
            <Section sectionClass="home-cover">
                <HomeCover/>
            </Section>
        </div>
    }
}