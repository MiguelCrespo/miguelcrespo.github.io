import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Modal extends Component {
  componentWillMount() {
    if (typeof document !== `undefined`)
      this._body = document.getElementsByTagName("body")[0]
  }

  render() {
    if (typeof window === `undefined`) return null
    let isOpen = this.props.isOpen ? " modal-open" : ""
    if (isOpen && this._body.className.indexOf("modal-open") === -1) {
      this._body.className += "modal-open"
    } else {
      this._body.className = ""
    }

    return (
      <div
        className={`modal ${this.props.className}${isOpen}`}
        id={this.props.id}
      >
        <div className="modal-content">{this.props.children}</div>
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  id: PropTypes.string,
}

Modal.defaultProps = {
  isOpen: false,
}
