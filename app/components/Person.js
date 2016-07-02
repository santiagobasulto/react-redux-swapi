import React from 'react'

class Person extends React.Component {
  render () {
    return <div className="row person">
      <div className="col-xs-12">
        <h3>{this.props.person.name}</h3>
        <p>(Participated in <span>{this.props.person.film_count}</span> films)</p>
        <ul>
          <li>
            <span>Gender:</span> {this.props.person.gender}
          </li>
          <li><span>Birth Year:</span> {this.props.person.birth_year}</li>
          <li><span>Eye color:</span> {this.props.person.eye_color}</li>
          <li><span>Hair color:</span> {this.props.person.hair_color}</li>
        </ul>
      </div>
    </div>
  }
}

export default Person;
