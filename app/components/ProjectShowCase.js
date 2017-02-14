import React, {Component} from 'react';

export default class ProjectShowCase extends Component {
    render() {
        return <article className="projects-content__item">
            <div
                className="projects-content__item__child"
                style={{
                backgroundImage: `url(${this.props.project.image_url})`
            }}>
                <div className="project-item-details">
                    <h1 className="project-item-details__header">
                        {this.props.project.title}
                    </h1>

                    <div className="project-item-details__icon">
                        <i className="fa fa-plus"/>
                    </div>

                    <p className="project-item-details__description">{this.props.project.description}</p>
                </div>
            </div>
        </article>;
    }
}

ProjectShowCase.propTypes = {
    project: React.PropTypes.object.isRequired
}