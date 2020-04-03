import React, { Component } from 'react';

class Deck extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.shuffle = this.shuffle.bind(this);

        this.numCards = 55;
        this.cardIndex = -1;

        this.hugCard = 13;
        this.skipCards = [this.hugCard];
        this.deckOrder = [];

        for (let i = 1; i <= this.numCards; i++){
            this.deckOrder.push(i);
        }

        this.shuffle();
    }

    shuffle() {
        for (let i = this.deckOrder.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deckOrder[i], this.deckOrder[j]] = [this.deckOrder[j], this.deckOrder[i]];
        }
    }

    nextCard() {
        this.cardIndex++;
        if (this.skipCards.includes(this.deckOrder[this.cardIndex])){
            this.cardIndex++;
        }
    }

    handleClick(e) {
        this.nextCard();

        if (this.cardIndex > this.numCards){
            this.shuffle();
            this.cardIndex = -1;
            this.nextCard();
        }

        this.props.onDraw(this.deckOrder[this.cardIndex]);
    }

    render() {
        return (
            <div className="Deck card-display">
                <img src="/resources/images/cardback.png" alt="cardback-component" onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Deck;