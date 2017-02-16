import React, {Component} from 'react';

export default class Section extends Component {
    render() {
        return <section
            className={`${this.props.sectionClass} ${(this.props.cutAngle? this.props.cutAngle : '')}`}
            id={this.props.sectionId}
        >
            
            {this.props.title? <h1 className="section-title">{this.props.title}</h1> : null}

            {this.props.children}
        </section>;
    }
}

Section.propTypes = {
    sectionClass: React.PropTypes.string,
    sectionId: React.PropTypes.string,
    title: React.PropTypes.string,
    cutAngle: React.PropTypes.string
};