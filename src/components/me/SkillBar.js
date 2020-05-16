import React, { Component } from "react"
import PropTypes from "prop-types"

export default class SkillBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }

    this.setRef = this.setRef.bind(this)
    this.checkViewport = this.checkViewport.bind(this)
  }

  setRef(element) {
    this.element = element
    return this
  }

  isInViewport() {
    const rect = this.element.getBoundingClientRect()
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top < viewportHeight &&
      rect.left < viewportWidth &&
      this.element.offsetParent !== null
    )
  }

  checkViewport() {
    if (this.isInViewport()) {
      console.log("Is visible")
      if (!this.props.avoidRun) {
        this.setState({
          visible: true,
        })
      }
    }

    return null
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkViewport)

    this.checkViewport()
  }

  render() {
    return (
      <div
        className="skill-bar"
        style={{ backgroundColor: this.props.primaryColor }}
        ref={this.setRef}
      >
        <div
          className={`skill-bar-progress${
            this.state.visible ? " skill-bar-progress-active" : ""
          }`}
          style={{ backgroundColor: this.props.accentColor }}
        ></div>
        <span
          className="skill-bar-title"
          style={{ color: this.props.textColor }}
        >
          {this.props.title}
        </span>
      </div>
    )
  }
}

SkillBar.propTypes = {
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
}

SkillBar.defaultProps = {
  avoidRun: false,
}
