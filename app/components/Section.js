import React, {Component} from 'react';

export default class Section extends Component {
    render() {
        return <section
            className={`${this.props.sectionClass} ${(this.props.cutAngle? this.props.cutAngle : '')}`}>
            {this.props.children}
        </section>;
    }
}

Section.propTypes = {
    sectionClass: React.PropTypes.string.isRequired,
    cutAngle: React.PropTypes.string
}