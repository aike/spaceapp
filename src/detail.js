import React from 'react';

class Detail extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	buy: false
    }
	}

  buy() {
  	console.log('buy');
  	this.setState({buy: true});
  }

	handleClick(title) {
		console.log('click => ' + title);
	}

	render() {
		return (
      <div className="detail" >

	      <div className="det_left">
	        <div className="det_ttl">{this.props.item.title}</div>
	        <img className="det_img" src={'images/' + this.props.item.img + '.png'} />
	        <div className="det_mov">{this.props.item.movie}</div>
	      </div>

	      <div className="det_right">
	        <div className="det_forsale">FOR SALE!</div>
	        <div className="det_prc">{this.props.item.price}</div>
	        <div className="det_dsc">{this.props.item.desc}</div>
	        <div className="det_back" onClick={this.props.sel.bind(this, -1)}>BACK</div>
	        <div className="det_btn" onClick={this.buy.bind(this)}>BUY NOW!</div>
	      </div>

	      {this.state.buy ?
	      	<div className="det_congrat">Congratulations! You are the owner of this debri-land</div> :
	      	<div />}
	    </div>
		);
	}
}

export default Detail;