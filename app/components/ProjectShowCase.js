import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-loading';

import Modal from './modal/Modal';

export default class ProjectShowCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }
  }

  render() {
    return <article className="projects-content__item">
      <div
        className="projects-content__item__child"
        style={{
          backgroundImage: `url(${this.props.project.image_url})`
        }}>
        <div className="project-item-details" onClick={() => {
          this.setState({modalOpen: !this.state.modalOpen})
        }}>
          <h1 className="project-item-details__header">
            {this.props.project.title}
          </h1>

          <div className="project-item-details__icon">
            <i className="fa fa-plus"/>
          </div>

          <p className="project-item-details__description">{this.props.project.shortDescription}</p>
        </div>
      </div>

      <Modal isOpen={this.state.modalOpen} className="project-item-modal">
        <div className="modal-header">
          <h2 className="project-item-modal__title">{this.props.project.title}</h2>

          <ul className="project-item-modal__tags">
            {
              this.props.project.tags.map((tag) => {
                return <li key={tag}>{tag}</li>
              })
            }
          </ul>

          <div className="close">
            <i className="fa fa-times" aria-hidden="true" onClick={() => {
              this.setState({modalOpen: false});
            }}/>
          </div>
        </div>

        <div className="modal-body">
          <p>
            {this.props.project.description}
          </p>

          {this.props.project.links.length ? <div>
              <b>Links</b>

              <ul >
                {
                  this.props.project.links.map((link) => {
                    return <li key={link.id}>
                      <a target="_blank" href={link.url}>{link.name}</a>
                    </li>
                  })
                }
              </ul>
            </div> : null}

          <ul className="project-item-modal__images">
            {
              this.props.project.images.map((image) => {
                return <li key={image}>
                  <ProgressiveImage src={image}/>
                </li>;
              })
            }
          </ul>
        </div>
      </Modal>
    </article>;
  }
}

ProjectShowCase.propTypes = {
  project: React.PropTypes.object.isRequired
};