import React from 'react'
import './QuoteBox.css';

const QuoteBox = ({_quote}) => {

    const {quote, author} = _quote;

    return (
      <div className='quotebox'>
          <div className="quote-left">
              <i className="fa-solid fa-quote-left"></i>
          </div>
          <blockquote className='quote'>
              {quote}
          </blockquote>
          <cite className='author'>
              {author}
          </cite>
          <div className="quote-right">
              <i className="fa-solid fa-quote-right"></i>
          </div>
      </div>
    );

}

export default QuoteBox;
