import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import axios from "axios"

function App() {
  const quotes = ["Quote 1","Quote 2","Quote 3"]
  const [randomQuote, setRandomQuote] = useState('')

  const generateQuote = async() => {
    try{
      const response = await axios.get('https://api.quotable.io/random')
      setRandomQuote(response.data.content)
    }
    catch(error){
      console.error('Error fetching quote', error.message)
    }
  }

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <button onClick={generateQuote}>Generate Quote</button>
      <p>{randomQuote}</p>
    </div>
  );
}

export default App;
