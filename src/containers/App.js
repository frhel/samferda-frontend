import React from 'react';
import './App.css';
import RideList from '../components/RideList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlBase: 'http://apis.is/rides/samferda-',
      url: 'http://apis.is/rides/samferda-drivers',
      listType: 'drivers',
      rideList: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(e) {
    await this.setState({ listType: e.target.getAttribute('list-type') });
    this.fetchList();
  }

  async fetchList() {
    await this.setState({ url: this.state.urlBase + this.state.listType + '/' });
    let resp = await fetch(this.state.url);
    let data = await resp.json();
    this.setState({ rideList: data.results })
  }

  componentDidMount() {
    this.fetchList()
  }

  render() {
    return (
      <header className="App-header" >
        <h1 className="f1">Carpooling in Iceland</h1>
        <div className="ride-type-selection-wrapper flex flex-column w-100 justify-center items-center">
          <h2 className="f2">I am looking for:</h2>
          <div
            className={"btn f3 pa3 ba bw2 br4 br--top w-100 mw6 " + (this.state.listType === 'drivers' ? 'active' : '')}
            list-type='drivers'
            onClick={this.handleClick}
          >
            A Ride
            </div>
          <h2 className="f2 ma3">or</h2>
          <div
            className={"btn f3 pa3 ba bw2 br4 br--bottom w-100 mw6 " + (this.state.listType === 'passengers' ? 'active' : '')}
            list-type='passengers'
            onClick={this.handleClick}
          >
            Passengers
            </div>
        </div>
        <RideList
          list={this.state.rideList}
          listType={this.state.listType}
        />
      </header >
    )
  }
}

export default App;
