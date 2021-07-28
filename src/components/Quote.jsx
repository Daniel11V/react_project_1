import React from "react";
import { connect } from 'react-redux';

const Quote = ({quote, nextQuote}) => (
    <div className="background" style={{background: quote.color, color: quote.color}}>
        <div id="quote-box">
            <span id="text">{quote.frase}</span>
            <span id="author">- {quote.autor}</span>
            <div className="buttons">
                <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noreferrer" style={{background: quote.color}}>tw</a>
                <button id="new-quote" onClick={() => nextQuote()} style={{background: quote.color}}>New quote</button>
            </div>
        </div>
        <a className="by" target="_blank" rel="noreferrer" href="https://danielvinet.netlify.app/">by Daniel Vinet</a>
    </div>
)

const mapStateToProps = state => ({
    quote: state.quote
});

const mapDispatchToProps = dispatch => ({
    nextQuote() {
        dispatch({
            type: "NEXT_QUOTE"
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);