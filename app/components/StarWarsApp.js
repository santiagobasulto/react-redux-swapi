import React from 'react'
import Person from './Person.js'

import {loadMoreActors} from '../actions'

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
  loadMore(){
    this.store.dispatch(loadMoreActors(this.state.next));
  }
  render () {
    let components = this.state.people.map((val, idx) => {
      return <Person person={val} key={val.name.replace(' ', '-')}/>;
    });
    let loading = this.state.loading ? <p>Loading...</p> : '';
    let loadMoreButton = !this.state.loading && this.state.next ? <button className='btn btn-primary' onClick={this.loadMore.bind(this)}>Load More</button> : '';
    return <div>
      {components}
      {loading}
      {loadMoreButton}
    </div>;
  }
}

export default StarWarsApp;
