import React from 'react';

class Card extends React.Component {
	constructor(props) {
    super(props);
	}

	render() {
		var item = this.props.item[this.props.idx];
		return (
        <div className="card_item"  onClick={this.props.sel.bind(this, this.props.idx)} >
          <div className="card_ttl">{item.title}</div>
          <img className="card_img" src={'images/' + item.img + '.png'} />
          <div className="card_prc">{item.price}</div>
          {item.desc}
          <div className="card_btn">BUY NOW!</div>
        </div>
		);
	}
}

export default Card;