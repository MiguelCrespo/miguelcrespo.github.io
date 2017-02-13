import React, {Component} from 'react';

import Section from './Section';
import HomeCover from './HomeCover';
import WhoAmI from './WhoAmI';
import Experience from './Experience';

const experiences = [
    {
        id: 1,
        title: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae totam nesciunt fuga laboriosam, voluptatem ad eius eveniet blanditiis laborum ipsam quam, quod magni aspernatur id sit, reprehenderit ex eligendi veniam.',
        company: {
            id: 1,
            name: 'ClickDelivery',
            image_url: './app/resources/images/me.jpg'
        },
        startDate: new Date('02/02/2016')
    },
    {
        id: 2,
        title: 'Software Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae totam nesciunt fuga laboriosam, voluptatem ad eius eveniet blanditiis laborum ipsam quam, quod magni aspernatur id sit, reprehenderit ex eligendi veniam.',
        company: {
            id: 2,
            name: 'Erasmeet',
            image_url: './app/resources/images/me.jpg'
        },
        startDate: new Date('03/02/2015'),
        endDate: new Date('01/31/2016')
    },
];

export default class Home extends Component {
    render() {
        return <div>
            <Section sectionClass="home-cover">
                <HomeCover/>
            </Section>

            <Section sectionClass="section-padding who-am-i" title="Who am I">
                <WhoAmI/>
            </Section>

            <Section sectionClass="section-padding experience" title="Experience">
                <Experience experiences = {experiences}/>
            </Section>
        </div>
    }
}