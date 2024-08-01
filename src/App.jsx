import { useState } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  const [cards, setCards] = useState([
    { id: generateCardId() },
    { id: generateCardId() },
    { id: generateCardId() },
  ]);

  function addCard() {
    const newCard = { id: generateCardId() };
    setCards([...cards, newCard]);
  }

  function removeCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  function generateCardId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  return (
    <>
      <div className="container">
        {cards.map((card) => (
          <WeatherCard
            key={card.id}
            id={card.id}
            removeCard={() => removeCard(card.id)}
          />
        ))}
        <button onClick={addCard} className="btn-add-card">
          +
        </button>
      </div>
    </>
  );
}

export default App;
