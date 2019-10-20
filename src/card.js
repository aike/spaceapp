import React from 'react';

class Card extends React.Component {
	constructor(props) {
    super(props);
	}

	render() {
		var item = this.props.item[this.props.idx];
		return (
        <div className="mycard_item"  onClick={this.props.sel.bind(this, this.props.idx)} >
          <div className="mycard_ttl">{item.title}</div>
          <div className="mycard_own1">current owner:</div>
          <div className="mycard_own2">{item.own}</div>
	        <img className="mycard_img" src={'images/' + item.img + '.png'} />
          <div className="mycard_prc">{item.price}</div>
          <div className="mycard_desc">{item.desc}</div>
          <div className="mycard_btn">BUY NOW!</div>
        </div>
		);
	}
}

export default Card;