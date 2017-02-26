import React, {Component} from 'react';

export default class Modal extends Component {
  render() {
    let isOpen = this.props.isOpen ? ' modal-open' : '';
    return <div className={`modal${isOpen}`} id={this.props.id}>
      <div className="modal-content">
        {this.props.children}
      </div>
    </div>
  }
}

Modal.PropTypes = {
  isOpen: React.PropTypes.bool,
  id: React.PropTypes.string
};

Modal.defaultProps = {
  isOpen: false
};