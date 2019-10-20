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
        {title:'Debri-Land 1', own:'John', img:'d01', price:'$199.00', 
          orgid: 'CCSM-804',
          part: 'Body cover',
          scale: '3.9 x 2.2 m',
          weight: '8,510 kg',
          manufacturer: 'NASA',
          desc: 'Marked with U.S. Flag'
        },

        {title:'Debri-Land 2', own:'Tom', img:'d02', price:'$99.00',
          orgid: 'CCSM-804',
          part: 'Engine nozzle',
          scale: '1.9 x 3.0 m',
          weight: '1,820 kg',
          manufacturer: 'NASA',
          desc: ''
        },

        {title:'Debri-Land 3', own:'Alice', img:'dtori', price:'$299.00', 
          orgid: 'SATM-22',
          part: 'Heat fin',
          scale: '0.9 x 1.8 m',
          weight: '640 kg',
          manufacturer: 'JAXA',
          desc: 'Fragile'
        }
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
  desc: 'Marked with U.S. Flag'
},
{
  id: 2,
  orgid: 'CCSM-804',
  part: 'Engine nozzle',
  scale: '1.9 x 3.0 m',
  weight: '1,820 kg',
  manufacturer: 'NASA',
  desc: ''
},
{
  id: 3,
  orgid: 'SATM-22',
  part: 'Heat fin',
  scale: '0.9 x 1.8 m',
  weight: '640 kg',
  manufacturer: 'JAXA',
  desc: 'Fragile'
}
*/
  }

  sel(item) {
    if (item < 0) {
      this.setState({mode:'top', selected:item});
    } else {
      this.setState({mode:'detail', selected:item});      
    }
  }

  render() {
    switch (this.state.mode) {

      case 'top':
        return(
          <div className="App">
            <img className="logo" src="images/logo2.jpeg" />
            <div className="servicetitle">Happy Debriday!</div>
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
        return(<Detail idx={this.state.selected} item={this.state.item[this.state.selected]} sel={this.sel.bind(this)}/>);
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
