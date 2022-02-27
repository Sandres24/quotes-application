import { useState } from 'react';
import data from './sample/quotes.json';
import './App.css';
import Card from './components/CardComponent/Card';
import Loading from './components/LoadingComponent/Loading';

function App() {

  const [quotes] = useState(previousQuotes => data);

  return (
    <div className="card-container">
      {
        quotes.length === 0
        ? <Loading />
        : <Card
          quotes={quotes}
        />
      }
    </div>
  );

}

export default App;
