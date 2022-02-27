import React, { useState } from 'react'
import './Card.css';
import QuoteBox from '../QuoteBoxComponent/QuoteBox';
import ButtonQuote from '../ButtonQuoteComponent/ButtonQuote';
import { randomData, randomColor } from '../../helpers/randomGenerator';

const Card = ({quotes}) => {

    const  [quote, setQuote] = useState(randomData(quotes));

    const color = document.body.style.background = randomColor();

    const handleChangeQuote = () => setQuote(previousQuote => randomData(quotes));

    return (
      <div className='card' style={{color}}>
          <QuoteBox
            _quote={quote}
          />
          <ButtonQuote
            background={color}
            handleChangeQuote={handleChangeQuote}
          />
      </div>
    );

}

export default Card;
