import React, {Component} from 'react';

import ExperienceElement from './ExperienceElement';

export default class Experience extends Component {
    render() {
        return <div className="section-content experience-content">
            <ul>
                {
                    this.props.experiences.map(experience => {
                        return <ExperienceElement key={experience.id} experience={experience}/>
                    })
                }
            </ul>
        </div>;
    }
}

Experience.propTypes = {
    experiences: React.PropTypes.array.isRequired
};