import React, { Component } from "react"
import PropTypes from "prop-types"

import ProjectShowCase from "./ProjectShowCase"

export default class Projects extends Component {
  render() {
    return (
      <div className="section-content projects-content section-angled-content">
        {this.props.projects.map(project => {
          return <ProjectShowCase key={project.id} project={project} />
        })}
      </div>
    )
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}
