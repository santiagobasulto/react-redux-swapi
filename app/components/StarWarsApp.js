import React from 'react'
import Person from './Person.js'

class StarWarsApp extends React.Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
    this.state = this.store.getState();
  }
  componentDidMount() {
    let store = this.store;
    let self = this;
    store.subscribe(() => self.setState(store.getState()));
  }
  render () {
    let components = this.state.people.map((val, idx) => {
      return <Person person={val} key={val.name.replace(' ', '-')}/>
    });
    return <div>
      {components}
    </div>;
  }
}

export default StarWarsApp;
