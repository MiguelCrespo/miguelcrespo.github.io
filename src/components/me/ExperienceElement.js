import React, { Component } from "react"
import PropTypes from "prop-types"
import Award from "./Award"

export default class ExperienceElement extends Component {
  componentWillMount() {
    // eslint-disable-next-line
    this.state = {
      secondsWorking: 0,
    }

    if (!this.props.experience.endDate) {
      this.setState({
        secondsWorking:
          (new Date().getTime() - this.props.experience.startDate.getTime()) /
          1000,
      })

      setInterval(() => {
        this.setState({
          secondsWorking:
            (new Date().getTime() - this.props.experience.startDate.getTime()) /
            1000,
        })
      }, 1000)
    }
  }

  render() {
    let startDate = this.props.experience.startDate
    let endDate = this.props.experience.endDate
    let endDateTemp = endDate ? endDate : new Date()

    let allMonths =
      endDateTemp.getMonth() -
      startDate.getMonth() +
      12 * (endDateTemp.getFullYear() - startDate.getFullYear())
    let numberYears = Math.floor(allMonths / 12)
    let numberMonths = Math.ceil(allMonths % 12)

    if (numberMonths < 0) {
      numberYears--
      numberMonths = numberMonths + 12
    }

    let durationString = ""
    if (numberYears > 0) {
      durationString = `${numberYears}y`
    }

    if (numberMonths > 0) {
      durationString += ` ${numberMonths}m`
    }

    return (
      <li className="experience-item">
        <section className="experience-item__company">
          <img
            src={this.props.experience.company.image_url}
            className="image-round image-company"
            alt={`${this.props.experience.company.name} Logo`}
          />

          <h3 className="experience-item__company__name">
            {this.props.experience.company.name}
          </h3>

          {endDate ? null : (
            <div>
              <h5 className="experience-item__company__seconds">
                {Math.floor(this.state.secondsWorking)} secs
              </h5>
            </div>
          )}
        </section>
        <section className="experience-item__details">
          <div className="experience-timeline"></div>

          <div className="experience-item__details__duration">
            {durationString}
          </div>

          <h2 className="experience-item__details__title">
            {this.props.experience.title}
          </h2>

          <h4 className="experience-item__details__location">
            {this.props.experience.location.title}
            <a
              className="experience-item__details__location__open"
              href={this.props.experience.location.map_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </h4>
          <h4 className="experience-item__details__dates">{`( ${startDate.toLocaleString(
            "en-us",
            {
              month: "short",
            }
          )} ${startDate.getFullYear()} -
                    ${
                      endDate
                        ? `${endDate.toLocaleString("en-us", {
                            month: "short",
                          })} ${endDate.getFullYear()}`
                        : "Present"
                    }
                    )`}</h4>
          <p className="experience-item__details__description">
            {this.props.experience.description}
          </p>

          {this.props.experience.awards &&
            this.props.experience.awards.length > 0 &&
            this.props.experience.awards.map(award => (
              <Award key={award.title} {...award} />
            ))}
        </section>
      </li>
    )
  }
}

ExperienceElement.propTypes = {
  experience: PropTypes.object.isRequired,
}
