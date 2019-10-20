import React from 'react';
import './App.css';
import Card from './card';
import Detail from './detail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
      selected: 1, 
      item: [
        {title:'Land 1', img:'d01', price:'$199.00', desc:'the term space debris referred to the natural debris found in the Solar System: asteroids'},
        {title:'Land 2', img:'d02', price:'$99.00', desc:'the term space debris referred to the natural debris found in the Solar System: asteroids'},
        {title:'Land 3', img:'d03', price:'$99.00', desc:'the term space debris referred to the natural debris found in the Solar System: asteroids'},
      ]
    };
/*
{
  id: 1,
  orgid: 'CCSM-804',
  part: 'Body cover',
  scale: '3.9 x 2.2 m',
  weight: '8,510 kg',
  manufacturer: 'NASA',
  comment: 'Marked with U.S. Flag'
},
{
  id: 2,
  orgid: 'CCSM-804',
  part: 'Engine nozzle',
  scale: '1.9 x 3.0 m',
  weight: '1,820 kg',
  manufacturer: 'NASA',
  comment: ''
},
{
  id: 3,
  orgid: 'SATM-22',
  part: 'Heat fin',
  scale: '0.9 x 1.8 m',
  weight: '640 kg',
  manufacturer: 'JAXA',
  comment: 'Fragile'
}
*/
  }

  sel(item) {
    this.setState({mode:'detail', selected:item});
  }

  render() {
    switch (this.state.mode) {

      case 'top':
        return(
          <div className="App">
            <header className="App-header">
              Buy Your Orbital Land
            </header>
            <div className="card pattern">
              <Card idx={0} item={this.state.item} sel={this.sel.bind(this)} />
              <Card idx={1} item={this.state.item} sel={this.sel.bind(this)} />
              <Card idx={2} item={this.state.item} sel={this.sel.bind(this)} />

              <Card idx={0} item={this.state.item} sel={this.sel.bind(this)} />
              <Card idx={1} item={this.state.item} sel={this.sel.bind(this)} />
              <Card idx={2} item={this.state.item} sel={this.sel.bind(this)} />
            </div>
          </div>
        );
        break;

      case 'detail':
        return(<Detail item={this.state.item[this.state.selected]} />);
        break;

      default:
        return(
          <div className="App">
            Hello
          </div>
        );
        break;
    }
  }
}

export default App;
