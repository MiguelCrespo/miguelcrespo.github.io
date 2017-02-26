import React, {Component} from 'react';

import Modal from './modal/Modal';

export default class ProjectShowCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }
  }

  render() {
    return <article className="projects-content__item" onClick={() => {
      this.setState({modalOpen: !this.state.modalOpen})
    }}>
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

          <p className="project-item-details__description">{this.props.project.shortDescription}</p>
        </div>
      </div>

      <Modal isOpen={this.state.modalOpen}>
        <div className="modal-header">

          <div className="close">
            <i className="fa fa-times" aria-hidden="true" onClick={() => {
              this.setState({modalOpen: false});
            }}/>
          </div>
        </div>
        <h1>{this.props.project.title}</h1>

        <div className="modal-body">
          {this.props.project.description}
        </div>
      </Modal>
    </article>;
  }
}

ProjectShowCase.propTypes = {
  project: React.PropTypes.object.isRequired
};