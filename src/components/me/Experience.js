import React, { Component } from "react"
import PropTypes from "prop-types"
import ExperienceElement from "./ExperienceElement"

export default class Experience extends Component {
  render() {
    return (
      <div className="section-content experience-content">
        <ul>
          {this.props.experiences.map(experience => {
            return (
              <ExperienceElement key={experience.id} experience={experience} />
            )
          })}
        </ul>
      </div>
    )
  }
}

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
}
