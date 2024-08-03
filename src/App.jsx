import { useState } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  const [cards, setCards] = useState([
    { id: generateCardId(), city: "London", units: "metric" },
    { id: generateCardId(), city: "Washington", units: "imperial" },
    { id: generateCardId(), city: "Berlin", units: "metric" },
  ]);

  function addCard() {
    const newCard = { id: generateCardId(), city: "London", units: "metric" };
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
            initialCity={card.city}
            initialUnits={card.units}
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
