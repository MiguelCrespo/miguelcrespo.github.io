import React, { Component } from "react"

export default class Award extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false
  }

  render() {
    return (
      <section className="award">
        <img className="award__entity" src={this.props.entity} alt="Entity" />
        <section className="award__content">
          <h3 className="award__content-title">{this.props.title}</h3>
          <p className="award__content-description">{this.props.description}</p>
        </section>
      </section>
    )
  }
}
