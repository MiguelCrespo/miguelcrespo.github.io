import React, {Component} from 'react';

export default class Modal extends Component {
  componentWillMount() {
    this._body = document.getElementsByTagName('body')[0];
  }

  render() {
    let isOpen = this.props.isOpen ? ' modal-open' : '';
    if (isOpen && this._body.className.indexOf('modal-open') === -1) {
      this._body.className += 'modal-open';
    } else {
      this._body.className = '';
    }

    return <div className={`modal ${this.props.className}${isOpen}`} id={this.props.id}>
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