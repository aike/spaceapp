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
		console.log(this.props);
		return (
      <div className="detail" >

	      <div className="det_left">
	        <div className="det_ttl">{this.props.item.title}</div>
          {this.props.idx === 2 ? 
            <iframe className="det_mov" src="https://www.youtube.com/embed/ppToj28jAlM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :
	          <img className="det_img" src={'images/' + this.props.item.img + '.png'} />}
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