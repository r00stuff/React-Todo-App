import './App.css';
import { useState, useEffect } from 'react';
import Header from "./Header";
import TodoList from "./components/TodoList";

function App() {

  const [quote, setQuote] = useState("");

  useEffect(() => {

    var randomNum = Math.floor((Math.random() * 100) +1);

    const fetchQuote = async () =>
      await fetch(
        `https://type.fit/api/quotes`
      )
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[randomNum].text);
        console.log(data);
      });

      fetchQuote();
  }, []);


  return (
    <div className="App">
      <div className="todo-app">
        <Header />
        <h2 className="quote">{quote}</h2>
                
          <TodoList />

      </div>
    </div>
  );
}

export default App;
