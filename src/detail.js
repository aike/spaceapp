import React from 'react';

class Detail extends React.Component {
	constructor(props) {
    super(props);
	}

	handleClick(title) {
		console.log('click => ' + title);
	}

	render() {
		return (
      <div className="detail"  onClick={this.handleClick.bind(this, this.props.item.title)} >

	      <div className="det_left">
	        <div className="det_ttl">{this.props.item.title}</div>
	        <img className="det_img" src={'images/' + this.props.item.img + '.png'} />
	        <div className="det_mov">{this.props.item.movie}</div>
	      </div>

	      <div className="det_right">
	        <div className="det_prc">{this.props.item.price}</div>
	        <div className="det_dsc">{this.props.item.desc}</div>
	        <div className="det_btn">BUY NOW!</div>
	      </div>

	    </div>
		);
	}
}

export default Detail;