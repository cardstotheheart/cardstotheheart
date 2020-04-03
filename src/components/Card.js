import React, { Component } from 'react';

class Card extends Component {
    render() {
        let card;

        if (this.props.card){
            let url = "/resources/images/cards/CTTH v4 Prod Cards layout final" + this.props.card + ".png";
            card = <img src={url} alt="cardback-component" style={{ display: this.props.card ? 'block': 'none'}}/>;
        } else {
            card = <div>Click on the deck to shuffle and draw a card!</div>
        }

        return (
            <div className="Card card-display">
                {card}
            </div>
        );
    }
}

export default Card;