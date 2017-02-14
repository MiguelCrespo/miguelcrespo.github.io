import React, {Component} from 'react';

export default class ExperienceElement extends Component {
  componentWillMount() {
    this.state = {
      secondsWorking: 0
    };

    if (!this.props.experience.endDate) {
      this.setState({
        secondsWorking: (new Date().getTime() - this.props.experience.startDate.getTime()) / 1000
      });

      setInterval(() => {
        this.setState({
          secondsWorking: (new Date().getTime() - this.props.experience.startDate.getTime()) / 1000
        });
      }, 1000);
    }
  }

  render() {
    let startDate = this.props.experience.startDate;
    let endDate = this.props.experience.endDate;
    let endDateTemp = endDate
      ? endDate
      : new Date();

    let allMonths = endDateTemp.getMonth() - startDate.getMonth() + (12 * (endDateTemp.getFullYear() - startDate.getFullYear()));
    let numberYears = endDateTemp.getFullYear() - startDate.getFullYear();
    let numberMonths = endDateTemp.getMonth() - startDate.getMonth();

    if (numberMonths < 0) {
      numberYears--;
      numberMonths = numberMonths + 12;
    }

    let durationString = '';
    if (numberYears > 0) {
      durationString = `${numberYears}y`;
    }

    if (numberMonths > 0) {
      durationString += ` ${numberMonths}m`;
    }

    return <li className="experience-item">
      <section className="experience-item__company">
        <img
          className="image-round image-company"
          src={this.props.experience.company.image_url}
          alt={`${this.props.experience.company.name} Logo`}/>

        <h3 className="experience-item__company__name">{this.props.experience.company.name}</h3>

        {endDate
          ? null
          : <div>
            <h5 className="experience-item__company__seconds">{Math.floor(this.state.secondsWorking)}
              secs</h5>
          </div>}

      </section>
      <section className="experience-item__details">

        <div className="experience-timeline"></div>

        <div className="experience-item__details__duration">
          {durationString}
        </div>

        <h2 className="experience-item__details__title">{this.props.experience.title}</h2>

        <h4 className="experience-item__details__dates">{`( ${startDate.toLocaleString('en-us', {
            month: "short"})} ${startDate.getFullYear()} - 
                    ${endDate
              ? `${endDate.toLocaleString('en-us', {
                month: "short"})} ${endDate.getFullYear()}` : 'Present'}
                    )`}</h4>
        <p className="experience-item__details__description">{this.props.experience.description}</p>
      </section>
    </li>;
  }
}

ExperienceElement.propTypes = {
  experience: React.PropTypes.object.isRequired
}