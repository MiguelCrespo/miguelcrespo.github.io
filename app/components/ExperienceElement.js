import React, {Component} from 'react';

export default class ExperienceElement extends Component {
    render() {
        let startDate = this.props.experience.startDate;
        let endDate = this.props.experience.endDate;
        return <li className="experience-item">
            <section className="experience-item__company">
                <img
                    className="image-round image-company"
                    src={this.props.experience.company.image_url}
                    alt={`${this.props.experience.company.name} Logo`}/>

                <h2 className="experience-item__company__name">{this.props.experience.company.name}</h2>

            </section>
            <section className="experience-item__details">

                <div className="experience-timeline"></div>

                <div className="experience-item__details__duration">
                    1y 1m
                </div>

                <h1 className="experience-item__details__title">{this.props.experience.title}</h1>

                <h4 className="experience-item__details__dates">{`( ${startDate.toLocaleString('en-us', {
                        month: "short"})} ${startDate.getFullYear()} - 
                    ${endDate
                            ? `${endDate.toLocaleString('en-us', {
                                month: "short"})} ${endDate.getFullYear()}` : 'Present'}
                    )`}</h4>
                <p className="experience-item__details__description">{this.props.experience.description}</p>
            </section>
        </li>;
    }
}

ExperienceElement.propTypes = {
    experience: React.PropTypes.object.isRequired
}